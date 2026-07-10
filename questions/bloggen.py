#!/usr/bin/env python3
"""
Generate blog posts from CSV questions using AI with database, resume support,
fallback, and a live Rich TUI that shows streaming responses and tokens/sec.
"""

import csv
import json
import logging
import os
import signal
import sqlite3
import sys
import threading
import time
from argparse import ArgumentParser
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime
from pathlib import Path
from typing import Optional, Callable

import requests
from rich.console import Console
from rich.layout import Layout
from rich.live import Live
from rich.panel import Panel
from rich.progress import BarColumn, Progress, TextColumn, TimeElapsedColumn
from rich.table import Table
from rich.text import Text

# ============================================================================
# LOGGING (with colors)
# ============================================================================
class ColorFormatter(logging.Formatter):
    COLORS = {
        logging.DEBUG: "\033[36m",
        logging.INFO: "\033[32m",
        logging.WARNING: "\033[33m",
        logging.ERROR: "\033[31m",
        logging.CRITICAL: "\033[41m",
    }
    RESET = "\033[0m"

    def format(self, record):
        color = self.COLORS.get(record.levelno, self.RESET)
        record.msg = f"{color}{record.msg}{self.RESET}"
        return super().format(record)


def setup_logging(verbose=False, log_file=None):
    level = logging.DEBUG if verbose else logging.INFO
    root = logging.getLogger()
    root.setLevel(logging.DEBUG)
    console = logging.StreamHandler(sys.stdout)
    console.setLevel(level)
    console.setFormatter(ColorFormatter("%(asctime)s  %(levelname)-8s  %(message)s", datefmt="%H:%M:%S"))
    root.addHandler(console)
    if log_file:
        fh = logging.FileHandler(log_file, encoding="utf-8")
        fh.setLevel(logging.DEBUG)
        fh.setFormatter(logging.Formatter("%(asctime)s  %(levelname)-8s  %(name)s  %(message)s"))
        root.addHandler(fh)
        logging.info("Logging to %s", log_file)


log = logging.getLogger("bloggen")


# ============================================================================
# CONFIGURATION
# ============================================================================
DEFAULT_CONFIG = {
    "api_endpoint": "https://ai.izdrail.com/v1/chat/completions",
    "model": "gemma4:e2b",
    "api_key": "",
    "request_timeout": 1200,
    "max_retries": 3,
    "backoff_factor": 2,
    "min_words": 350,
    "request_delay": 2.0,
    "concurrency": 2,
    "system_prompt": (
        "You are a senior developer and technical blogger. "
        "Your answers are accurate, practical, and well‑explained. "
        "Always include natural backlinks to https://laravelcompany.com where relevant. "
        "Your blog posts must be at least 350 words long and include proper headings, paragraphs, "
        "code examples, and a clear conclusion."
    ),
    "user_prompt_template": (
        "Write a comprehensive blog post that answers the following question.\n\n"
        "Title: {title}\n"
        "Body: {body}\n\n"
        "The blog post should:\n"
        "- Provide a correct and thorough answer from a developer's perspective.\n"
        "- Include relevant code examples or best practices.\n"
        "- Naturally incorporate backlinks to https://laravelcompany.com in the content.\n"
        "- Be well‑structured with headings, paragraphs, and a clear conclusion.\n"
        "- Be at least 350 words long."
    ),
    "expand_prompt": (
        "\n\nThe previous response was too short. Please expand it to at least 350 words "
        "by adding more details, examples, and deeper explanations. Include additional sections "
        "and ensure the final post is comprehensive and well structured."
    ),
    "db_file": "blog_posts.db",
    "export_dir": "exported_posts",
    "log_file": None,
    "debug_ai": False,
    "stream": False,
    "max_tokens": 4096,
}


def load_config(config_path=None):
    cfg = dict(DEFAULT_CONFIG)
    if config_path and os.path.exists(config_path):
        with open(config_path, "r", encoding="utf-8") as f:
            file_cfg = json.load(f)
        cfg.update(file_cfg)
        log.info("Loaded config from %s", config_path)

    # Environment overrides
    env_map = {
        "AI_ENDPOINT": "api_endpoint",
        "AI_MODEL": "model",
        "AI_API_KEY": "api_key",
        "REQUEST_TIMEOUT": "request_timeout",
        "DB_FILE": "db_file",
        "EXPORT_DIR": "export_dir",
        "DEBUG_AI": "debug_ai",
        "STREAM": "stream",
        "MAX_TOKENS": "max_tokens",
    }
    for env_key, cfg_key in env_map.items():
        val = os.environ.get(env_key)
        if val is not None:
            if cfg_key in ("request_timeout", "max_tokens"):
                val = int(val)
            elif cfg_key in ("debug_ai", "stream"):
                val = val.lower() in ("1", "true", "yes")
            cfg[cfg_key] = val
    return cfg


# ============================================================================
# DATABASE
# ============================================================================
def get_db_connection(db_path):
    conn = sqlite3.connect(db_path, timeout=10)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    return conn


def init_db(db_path):
    conn = get_db_connection(db_path)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS blog_posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            body TEXT NOT NULL,
            blog_post TEXT,
            status TEXT DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            retries INTEGER DEFAULT 0,
            word_count INTEGER DEFAULT 0,
            error_message TEXT,
            UNIQUE(title)
        )
    """)
    conn.commit()
    # Migrate missing columns
    cursor = conn.execute("PRAGMA table_info(blog_posts)")
    existing = {row["name"] for row in cursor.fetchall()}
    for col, col_def in [("word_count", "INTEGER DEFAULT 0"), ("error_message", "TEXT")]:
        if col not in existing:
            conn.execute(f"ALTER TABLE blog_posts ADD COLUMN {col} {col_def}")
    conn.commit()
    conn.close()


def import_csv_to_db(csv_file, db_path):
    conn = get_db_connection(db_path)
    cursor = conn.cursor()
    inserted = 0
    with open(csv_file, "r", newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if not {"Title", "Body"}.issubset(reader.fieldnames or []):
            raise ValueError("CSV must have 'Title' and 'Body' columns.")
        for row in reader:
            title = row["Title"].strip()
            body = row["Body"].strip()
            if not title or not body:
                continue
            cursor.execute("SELECT id FROM blog_posts WHERE title = ?", (title,))
            if cursor.fetchone():
                continue
            cursor.execute(
                "INSERT INTO blog_posts (title, body, status) VALUES (?, ?, ?)",
                (title, body, "pending"),
            )
            inserted += 1
    conn.commit()
    conn.close()
    return inserted


def get_records(db_path, status_filter=None, limit=None, max_retries=3):
    conn = get_db_connection(db_path)
    conditions, params = [], []
    if status_filter == "pending":
        conditions.append("status IN ('pending', 'failed') AND retries < ?")
        params.append(max_retries)
    elif status_filter:
        conditions.append("status = ?")
        params.append(status_filter)
    where = f"WHERE {' AND '.join(conditions)}" if conditions else ""
    query = f"SELECT id, title, body, status, retries, word_count, error_message, blog_post FROM blog_posts {where} ORDER BY id"
    if limit is not None:
        query += f" LIMIT {limit}"
    cursor = conn.execute(query, params)
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]


def update_record_status(db_path, record_id, status, blog_post=None, retries=None,
                         word_count=None, error_message=None):
    conn = get_db_connection(db_path)
    updates, params = [], []
    if status:
        updates.append("status = ?"); params.append(status)
    if blog_post is not None:
        updates.append("blog_post = ?"); params.append(blog_post)
    if retries is not None:
        updates.append("retries = ?"); params.append(retries)
    if word_count is not None:
        updates.append("word_count = ?"); params.append(word_count)
    if error_message is not None:
        updates.append("error_message = ?"); params.append(error_message)
    updates.append("updated_at = ?"); params.append(datetime.now().isoformat())
    params.append(record_id)
    sql = f"UPDATE blog_posts SET {', '.join(updates)} WHERE id = ?"
    conn.execute(sql, params)
    conn.commit()
    conn.close()


def delete_records(db_path, status=None):
    conn = get_db_connection(db_path)
    if status:
        conn.execute("DELETE FROM blog_posts WHERE status = ?", (status,))
    else:
        conn.execute("DELETE FROM blog_posts")
    deleted = conn.total_changes
    conn.commit()
    conn.close()
    return deleted


# ============================================================================
# AI CALL – SUPPORTS BOTH OPENAI AND OLLAMA NATIVE
# ============================================================================
def mask_api_key(key):
    if not key:
        return "<none>"
    return key[:4] + "***" + key[-4:] if len(key) > 8 else "***"


def _log_ai_request(payload, cfg):
    if not cfg.get("debug_ai"):
        return
    safe = {**payload}
    if cfg.get("api_key"):
        safe["headers"] = {"Authorization": f"Bearer {mask_api_key(cfg['api_key'])}"}
    log.debug("AI REQUEST: %s", json.dumps(safe, indent=2, ensure_ascii=False))


def _stream_response(response, debug_ai, on_chunk=None):
    for line in response.iter_lines(decode_unicode=True):
        if not line:
            continue
        if line.startswith("data: "):
            data = line[6:]
            if data == "[DONE]":
                break
            try:
                chunk = json.loads(data)
                delta = chunk.get("choices", [{}])[0].get("delta", {})
                content = delta.get("content", "")
                if content:
                    if debug_ai:
                        log.debug("STREAM CHUNK: %s", repr(content))
                    if on_chunk:
                        on_chunk(content)
                    yield content
            except json.JSONDecodeError:
                continue
        else:
            try:
                chunk = json.loads(line)
                delta = chunk.get("choices", [{}])[0].get("delta", {})
                content = delta.get("content", "")
                if content:
                    if debug_ai:
                        log.debug("STREAM CHUNK: %s", repr(content))
                    if on_chunk:
                        on_chunk(content)
                    yield content
            except json.JSONDecodeError:
                pass


def call_ai(prompt, cfg, expand=False, on_chunk: Optional[Callable[[str], None]] = None):
    """Unified AI caller – auto-detects endpoint format.
       If on_chunk is provided and streaming is enabled, it is called for each content chunk.
    """
    headers = {"Content-Type": "application/json"}
    if cfg.get("api_key"):
        headers["Authorization"] = f"Bearer {cfg['api_key']}"

    system_msg = cfg["system_prompt"]
    if expand:
        system_msg += " The response must be at least 350 words. If you have already written a shorter version, expand it now."

    messages = [
        {"role": "system", "content": system_msg},
        {"role": "user", "content": prompt},
    ]

    endpoint = cfg["api_endpoint"].lower()
    use_ollama = "/api/chat" in endpoint and "/v1/" not in endpoint

    # If streaming is enabled and we have a callback, set stream=True
    stream_enabled = cfg.get("stream", False) and on_chunk is not None

    if use_ollama:
        payload = {
            "model": cfg["model"],
            "messages": messages,
            "stream": stream_enabled,
            "options": {
                "temperature": 0.7,
                "num_predict": cfg.get("max_tokens", 4096),
            }
        }
    else:
        payload = {
            "model": cfg["model"],
            "messages": messages,
            "temperature": 0.7,
            "max_tokens": cfg.get("max_tokens", 4096),
            "stream": stream_enabled,
            "stop": None,
        }

    max_retries = cfg["max_retries"]
    backoff = cfg["backoff_factor"]
    timeout = cfg["request_timeout"]

    for attempt in range(1, max_retries + 1):
        start = time.time()
        log.debug("API attempt %d/%d", attempt, max_retries)
        try:
            _log_ai_request({**payload, "headers": headers}, cfg)
            resp = requests.post(
                cfg["api_endpoint"],
                headers=headers,
                json=payload,
                timeout=timeout,
                stream=stream_enabled,
            )
            log.debug("Request completed in %.2fs", time.time() - start)

            # --- BEGIN FIX: Log raw response for debugging ---
            if cfg.get("debug_ai"):
                log.debug("RAW RESPONSE BODY (first 2000 chars): %s", resp.text[:2000])
            # --- END FIX ---

            resp.raise_for_status()

            if stream_enabled:
                content_parts = []
                for chunk in _stream_response(resp, cfg.get("debug_ai", False), on_chunk=on_chunk):
                    content_parts.append(chunk)
                full_content = "".join(content_parts).strip()
            else:
                data = resp.json()
                if "error" in data:
                    raise ValueError(f"API error: {data['error']}")
                if use_ollama:
                    full_content = data.get("message", {}).get("content", "").strip()
                else:
                    choices = data.get("choices", [])
                    if not choices:
                        raise ValueError("Empty choices")
                    full_content = choices[0].get("message", {}).get("content", "").strip()

            if not full_content:
                raise ValueError("Empty response")

            wc = len(full_content.split())
            log.debug("Received %d words", wc)
            if cfg.get("debug_ai"):
                log.debug("FULL RESPONSE (truncated): %s", full_content[:2000])
            return full_content

        except requests.exceptions.Timeout:
            wait = backoff ** attempt
            log.warning("Timeout (attempt %d). Retry in %ds", attempt, wait)
            time.sleep(wait)
        except requests.exceptions.ConnectionError as e:
            wait = backoff ** attempt
            log.error("Connection error (attempt %d): %s. Retry in %ds", attempt, e, wait)
            time.sleep(wait)
        except requests.exceptions.HTTPError as e:
            status_code = e.response.status_code if e.response else "?"
            log.error("HTTP %s (attempt %d): %s", status_code, attempt, e)
            if e.response and e.response.text:
                log.debug("Response body: %s", e.response.text[:500])
            if attempt == max_retries:
                return None
            wait = backoff ** attempt
            time.sleep(wait)
        except (json.JSONDecodeError, ValueError) as e:
            log.error("Invalid response (attempt %d): %s", attempt, e)
            if attempt == max_retries:
                return None
            time.sleep(backoff ** attempt)
        except Exception as e:
            log.warning("API error (attempt %d): %s. Retry in %ds", attempt, e, backoff ** attempt)
            if log.isEnabledFor(logging.DEBUG):
                log.exception("Exception details:")
            time.sleep(backoff ** attempt)

    return None


def generate_blog_post(title, body, cfg, on_chunk: Optional[Callable[[str], None]] = None):
    """Generate with fallback – returns best content even if below min_words."""
    user_prompt = cfg["user_prompt_template"].format(title=title, body=body)
    current_prompt = user_prompt
    expand = False
    best_content = None
    best_word_count = 0

    for attempt in range(1, cfg["max_retries"] + 1):
        log.info("Attempt %d/%d...", attempt, cfg["max_retries"])
        if cfg.get("debug_ai"):
            log.debug("PROMPT (attempt %d): %s", attempt, current_prompt)

        content = call_ai(current_prompt, cfg, expand=expand, on_chunk=on_chunk)
        if content is None:
            continue

        wc = len(content.split())
        log.info("Generated %d words", wc)
        if wc > best_word_count:
            best_content, best_word_count = content, wc

        if wc >= cfg["min_words"]:
            return content

        log.info("Too short (%d < %d). Expanding...", wc, cfg["min_words"])
        current_prompt = user_prompt + cfg["expand_prompt"]
        expand = True

    if best_content:
        log.warning("Best effort: %d words (min %d). Saving partial.", best_word_count, cfg["min_words"])
        return best_content
    return None


# ============================================================================
# RICH TUI – Live display with streaming content and tokens/sec
# ============================================================================
class RichTUI:
    def __init__(self, total):
        self.total = total
        self.completed = 0
        self.failed = 0
        self.running = {}  # id -> {title, start_time, word_count, token_count, content}
        self.current_record_id = None
        self.current_content = ""
        self.current_start_time = None
        self.current_word_count = 0
        self.current_token_count = 0
        self.lock = threading.Lock()
        self.console = Console()
        self._stop = False
        self._thread = None

    def start_record(self, record_id, title):
        with self.lock:
            self.running[record_id] = {
                "title": title,
                "start_time": time.time(),
                "word_count": 0,
                "token_count": 0,
                "content": "",
            }
            if self.current_record_id is None:
                self.current_record_id = record_id
                self.current_content = ""
                self.current_start_time = time.time()
                self.current_word_count = 0
                self.current_token_count = 0

    def update_stream(self, record_id, chunk):
        with self.lock:
            if record_id not in self.running:
                return
            rec = self.running[record_id]
            rec["content"] += chunk
            words = len(rec["content"].split())
            rec["word_count"] = words
            rec["token_count"] = int(words * 1.3)  # rough token estimate

            if record_id == self.current_record_id:
                self.current_content = rec["content"]
                self.current_word_count = words
                self.current_token_count = rec["token_count"]

    def finish_record(self, record_id, success):
        with self.lock:
            self.running.pop(record_id, None)
            if success:
                self.completed += 1
            else:
                self.failed += 1
            if record_id == self.current_record_id:
                self.current_record_id = None
                self.current_content = ""
                self.current_start_time = None
                self.current_word_count = 0
                self.current_token_count = 0
                if self.running:
                    next_id = next(iter(self.running))
                    self.current_record_id = next_id
                    rec2 = self.running[next_id]
                    self.current_content = rec2["content"]
                    self.current_word_count = rec2["word_count"]
                    self.current_token_count = rec2["token_count"]
                    self.current_start_time = rec2["start_time"]

    def get_current_tokens_per_sec(self):
        if self.current_start_time is None or self.current_token_count == 0:
            return 0.0
        elapsed = time.time() - self.current_start_time
        if elapsed <= 0:
            return 0.0
        return self.current_token_count / elapsed

    def render(self) -> Layout:
        layout = Layout()
        layout.split(
            Layout(name="header", size=3),
            Layout(name="progress", size=5),
            Layout(name="main"),
        )
        layout["main"].split_row(
            Layout(name="current", ratio=1),
            Layout(name="content", ratio=2),
        )

        # Header
        header_text = Text("Blog Post Generator", style="bold blue")
        layout["header"].update(Panel(header_text, style="white"))

        # Progress table
        with self.lock:
            done = self.completed + self.failed
            pct = done / self.total * 100 if self.total else 0
            elapsed = time.time() - getattr(self, "_start_time", time.time())
            table = Table(show_header=False, box=None)
            table.add_column(justify="left")
            table.add_column(justify="right")
            table.add_row("Total", str(self.total))
            table.add_row("Completed", f"{self.completed} ✅")
            table.add_row("Failed", f"{self.failed} ❌")
            table.add_row("Running", str(len(self.running)))
            table.add_row("Progress", f"{pct:.1f}%")
            table.add_row("Elapsed", f"{elapsed:.0f}s")
            progress_bar = Progress(
                TextColumn("[progress.description]{task.description}"),
                BarColumn(),
                TextColumn("[progress.percentage]{task.percentage:>3.0f}%"),
                TimeElapsedColumn(),
            )
            task = progress_bar.add_task("", total=self.total, completed=done)
            progress_bar.update(task, completed=done)
            table.add_row("Bar", progress_bar)
            layout["progress"].update(Panel(table, title="Progress", border_style="green"))

        # Current record panel
        with self.lock:
            if self.current_record_id is not None and self.current_record_id in self.running:
                rec = self.running[self.current_record_id]
                title = rec["title"]
                word_count = rec["word_count"]
                token_count = rec["token_count"]
                tps = self.get_current_tokens_per_sec()
                status = "Generating..." if self.current_content else "Waiting for response..."
                info = (
                    f"Title: {title[:60]}\n"
                    f"Status: {status}\n"
                    f"Words: {word_count}  |  Tokens: {token_count}  |  Tokens/sec: {tps:.2f}"
                )
                layout["current"].update(Panel(info, title="Current Record", border_style="cyan"))
            else:
                layout["current"].update(Panel("No active record", title="Current Record", border_style="cyan"))

        # Content panel – show current content (truncated to last 200 lines)
        with self.lock:
            content = self.current_content
            lines = content.splitlines()
            if len(lines) > 200:
                content = "\n".join(lines[-200:])
                content = "... (truncated)\n" + content
            # FIX: removed overflow="fold" for compatibility with older rich versions
            layout["content"].update(Panel(content, title="Streaming Content", border_style="yellow"))

        return layout

    def display_loop(self):
        self._start_time = time.time()
        with Live(self.render(), console=self.console, refresh_per_second=5, screen=True) as live:
            while not self._stop:
                live.update(self.render())
                time.sleep(0.2)
            live.update(self.render())

    def stop(self):
        self._stop = True


# ============================================================================
# WORKER
# ============================================================================
_shutdown_requested = False


def _signal_handler(signum, frame):
    global _shutdown_requested
    if _shutdown_requested:
        log.warning("Forced exit.")
        sys.exit(1)
    _shutdown_requested = True
    log.warning("\nShutdown requested. Finishing current record... (Ctrl+C again to force)")


def _worker(cfg, record, tui):
    rec_id = record["id"]
    title = record["title"]
    body = record["body"]
    retries = record["retries"] + 1
    db_path = cfg["db_file"]

    tui.start_record(rec_id, title)
    log.debug("Worker: starting record %d", rec_id)

    conn = get_db_connection(db_path)
    conn.execute("UPDATE blog_posts SET status='processing', retries=?, updated_at=? WHERE id=?",
                 (retries, datetime.now().isoformat(), rec_id))
    conn.commit()
    conn.close()

    def on_chunk(chunk):
        tui.update_stream(rec_id, chunk)

    blog_post = generate_blog_post(title, body, cfg, on_chunk=on_chunk if cfg.get("stream") else None)
    success = blog_post is not None

    if success:
        wc = len(blog_post.split())
        update_record_status(db_path, rec_id, "completed", blog_post=blog_post,
                             word_count=wc, error_message=None)
        log.info("✅ %s (%d words)", title[:60], wc)
    else:
        update_record_status(db_path, rec_id, "failed", error_message="Failed after retries")
        log.error("❌ %s", title[:60])

    tui.finish_record(rec_id, success)
    return success


def process_records(cfg, limit=None, force=False):
    global _shutdown_requested
    signal.signal(signal.SIGINT, _signal_handler)

    if force:
        conn = get_db_connection(cfg["db_file"])
        conn.execute("UPDATE blog_posts SET status='pending', blog_post=NULL, retries=0, word_count=0, error_message=NULL")
        conn.commit()
        conn.close()
        log.info("All records reset to pending.")

    records = get_records(cfg["db_file"], status_filter="pending", limit=limit,
                          max_retries=cfg["max_retries"])
    if not records:
        log.info("No pending records.")
        return

    total = len(records)
    log.info("Processing %d records...", total)

    concurrency = cfg.get("concurrency", 1)
    if cfg.get("stream") and concurrency > 1:
        log.warning("Streaming enabled – reducing concurrency to 1 for better TUI experience.")
        concurrency = 1

    tui = RichTUI(total)
    tui_thread = threading.Thread(target=tui.display_loop, daemon=True)
    tui_thread.start()

    with ThreadPoolExecutor(max_workers=concurrency) as pool:
        futures = []
        for rec in records:
            if _shutdown_requested:
                break
            f = pool.submit(_worker, cfg, rec, tui)
            futures.append((f, rec["id"]))

        for f, rid in futures:
            try:
                f.result()
            except Exception as e:
                log.error("Worker for record %d crashed: %s", rid, e)
                if log.isEnabledFor(logging.DEBUG):
                    log.exception("Details:")
                update_record_status(cfg["db_file"], rid, "failed", error_message=str(e))
                tui.finish_record(rid, success=False)

    tui.stop()
    tui_thread.join(timeout=2)
    log.info("Processing finished.")


# ============================================================================
# EXPORT, STATS, OTHER COMMANDS
# ============================================================================
def export_posts(db_path, export_dir, status="completed"):
    export_path = Path(export_dir)
    export_path.mkdir(parents=True, exist_ok=True)
    records = get_records(db_path, status_filter=status)
    exported = 0
    for rec in records:
        if not rec["blog_post"]:
            continue
        title = rec["title"]
        body = rec["blog_post"]
        wc = rec.get("word_count", len(body.split()))
        rec_id = rec["id"]
        safe_name = "".join(c if c.isalnum() or c in " _-" else "_" for c in title)
        safe_name = safe_name.strip().replace(" ", "_")[:80] or f"post_{rec_id}"
        filepath = export_path / f"{rec_id:04d}_{safe_name}.md"
        frontmatter = (
            f"---\nid: {rec_id}\ntitle: \"{title}\"\nword_count: {wc}\n"
            f"generated_at: {rec.get('updated_at', datetime.now().isoformat())}\n---\n\n"
        )
        filepath.write_text(frontmatter + body, encoding="utf-8")
        exported += 1
        log.info("Exported: %s", filepath.name)
    return exported


def show_stats(db_path):
    conn = get_db_connection(db_path)
    cursor = conn.execute("SELECT status, COUNT(*) FROM blog_posts GROUP BY status")
    status_counts = {row[0]: row[1] for row in cursor.fetchall()}
    total = sum(status_counts.values())
    cursor = conn.execute("""
        SELECT COUNT(*), COALESCE(AVG(word_count),0), COALESCE(MIN(word_count),0), COALESCE(MAX(word_count),0)
        FROM blog_posts WHERE status='completed'
    """)
    completed, avg, mn, mx = cursor.fetchone()
    conn.close()
    log.info("📊 Database Statistics")
    log.info("  Total: %d", total)
    for s in ("pending", "processing", "completed", "failed"):
        log.info("  %s: %d", s.capitalize(), status_counts.get(s, 0))
    if completed:
        log.info("  Completed posts: avg=%.0f, min=%d, max=%d", avg, mn, mx)


def cmd_list(db_path, status):
    records = get_records(db_path, status_filter=status if status != "all" else None)
    if not records:
        log.info("No records found with status '%s'.", status)
        return
    log.info("Records (status=%s):", status)
    log.info("  %-4s  %-10s  %-5s  %s", "ID", "Status", "Words", "Title")
    log.info("  %s", "-" * 80)
    for rec in records:
        wc = rec.get("word_count", 0) or (len(rec.get("blog_post", "").split()) if rec.get("blog_post") else 0)
        log.info("  %-4d  %-10s  %-5d  %s", rec["id"], rec["status"], wc, rec["title"][:70])


def cmd_show(db_path, record_id):
    conn = get_db_connection(db_path)
    row = conn.execute("SELECT * FROM blog_posts WHERE id=?", (record_id,)).fetchone()
    conn.close()
    if not row:
        log.error("Record %d not found.", record_id)
        return
    rec = dict(row)
    log.info("ID: %d", rec["id"])
    log.info("Title: %s", rec["title"])
    log.info("Status: %s", rec["status"])
    log.info("Retries: %d", rec["retries"])
    log.info("Word count: %d", rec.get("word_count", 0))
    log.info("Created: %s", rec["created_at"])
    log.info("Updated: %s", rec["updated_at"])
    if rec.get("error_message"):
        log.info("Error: %s", rec["error_message"])
    log.info("\n--- Original Body ---\n%s", rec["body"])
    if rec.get("blog_post"):
        log.info("\n--- Generated Blog Post ---\n%s", rec["blog_post"])


def test_connection(cfg):
    headers = {"Content-Type": "application/json"}
    if cfg.get("api_key"):
        headers["Authorization"] = f"Bearer {cfg['api_key']}"
    payload = {"model": cfg["model"], "messages": [{"role": "user", "content": "Reply with OK"}],
               "max_tokens": 10, "stream": False}
    try:
        resp = requests.post(cfg["api_endpoint"], headers=headers, json=payload, timeout=30)
        resp.raise_for_status()
        log.info("✅ Connection successful.")
        return True
    except Exception as e:
        log.error("❌ Connection failed: %s", e)
        return False


# ============================================================================
# MAIN
# ============================================================================
def parse_args():
    parser = ArgumentParser(description="Blog post generator with AI and TUI.")
    parser.add_argument("csv", nargs="?", help="CSV file to import")
    parser.add_argument("--db", help="SQLite database file")
    parser.add_argument("--config", help="JSON config file")
    parser.add_argument("--limit", type=int, help="Max records to process")
    parser.add_argument("--force", action="store_true", help="Reset all to pending")
    parser.add_argument("--stats", action="store_true", help="Show statistics")
    parser.add_argument("--list", nargs="?", const="pending", help="List records by status")
    parser.add_argument("--show", type=int, help="Show record by ID")
    parser.add_argument("--export", action="store_true", help="Export completed posts")
    parser.add_argument("--export-dir", help="Export directory")
    parser.add_argument("--test", action="store_true", help="Test AI connection")
    parser.add_argument("--dry-run", action="store_true", help="Preview what would be processed")
    parser.add_argument("--retry-failed", action="store_true", help="Reset failed to pending")
    parser.add_argument("--delete", nargs="?", const="all", help="Delete records by status")
    parser.add_argument("--log-file", help="Log file path")
    parser.add_argument("--verbose", action="store_true", help="Enable debug logging")
    parser.add_argument("-P", "--parallel", type=int, dest="concurrency", help="Number of parallel workers")
    parser.add_argument("--debug-ai", action="store_true", help="Log full AI payloads and raw responses")
    parser.add_argument("--timeout", type=int, help="Request timeout in seconds")
    parser.add_argument("--pending", action="store_true", help="Show pending count")
    parser.add_argument("--stream", action="store_true", help="Enable streaming and show live content in TUI")
    return parser.parse_args()


def main():
    args = parse_args()
    cfg = load_config(args.config)
    if args.db:
        cfg["db_file"] = args.db
    if args.export_dir:
        cfg["export_dir"] = args.export_dir
    if args.log_file:
        cfg["log_file"] = args.log_file
    if args.concurrency is not None:
        cfg["concurrency"] = args.concurrency
    if args.debug_ai:
        cfg["debug_ai"] = True
    if args.timeout is not None:
        cfg["request_timeout"] = args.timeout
    if args.stream:
        cfg["stream"] = True

    setup_logging(verbose=args.verbose or cfg.get("debug_ai"), log_file=cfg.get("log_file"))

    db_path = cfg["db_file"]
    init_db(db_path)

    # Dispatch commands
    if args.test:
        test_connection(cfg)
        return
    if args.stats:
        show_stats(db_path)
        return
    if args.list is not None:
        cmd_list(db_path, args.list)
        return
    if args.show is not None:
        cmd_show(db_path, args.show)
        return
    if args.export:
        exported = export_posts(db_path, cfg["export_dir"])
        log.info("Exported %d posts to %s/", exported, cfg["export_dir"])
        return
    if args.delete is not None:
        status = None if args.delete == "all" else args.delete
        deleted = delete_records(db_path, status)
        log.info("Deleted %d records%s.", deleted, f" (status={args.delete})" if status else "")
        return
    if args.retry_failed:
        conn = get_db_connection(db_path)
        conn.execute("UPDATE blog_posts SET status='pending', retries=0, error_message=NULL WHERE status='failed'")
        conn.commit()
        affected = conn.total_changes
        conn.close()
        log.info("Reset %d failed records to pending.", affected)
        return
    if args.pending:
        conn = get_db_connection(db_path)
        count = conn.execute("SELECT COUNT(*) FROM blog_posts WHERE status IN ('pending','failed') AND retries < ?",
                             (cfg["max_retries"],)).fetchone()[0]
        conn.close()
        log.info("Records pending/failed (retryable): %d", count)
        return
    if args.dry_run:
        log.info("DRY RUN mode")
        if args.csv:
            try:
                with open(args.csv, "r", encoding="utf-8") as f:
                    reader = csv.DictReader(f)
                    rows = list(reader)
                log.info("CSV: %s (%d rows)", args.csv, len(rows))
            except Exception as e:
                log.error("Error reading CSV: %s", e)
                return
        pending = get_records(db_path, status_filter="pending", max_retries=cfg["max_retries"])
        log.info("Would process %d records.", len(pending))
        return

    # Import CSV if provided
    if args.csv:
        try:
            inserted = import_csv_to_db(args.csv, db_path)
            log.info("Inserted %d new records.", inserted)
        except Exception as e:
            log.error("Import failed: %s", e)
            return

    # Process
    process_records(cfg, limit=args.limit, force=args.force)
    show_stats(db_path)


if __name__ == "__main__":
    main()