#!/usr/bin/env python3
"""
improve_prompts.py
-------------------
Improve a large JSON dataset of prompts using an AI model (Ollama API).
Supports resumable processing, concurrency, and a flicker-free Rich TUI.
"""

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
from typing import Optional, Callable

import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from rich.console import Console, Group
from rich.layout import Layout
from rich.live import Live
from rich.panel import Panel
from rich.progress import (
    BarColumn,
    Progress,
    TextColumn,
    TimeElapsedColumn,
    TimeRemainingColumn,
)
from rich.table import Table
from rich.text import Text
from rich import box


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
    root.handlers.clear()
    console = logging.StreamHandler(sys.stdout)
    console.setLevel(level)
    console.setFormatter(
        ColorFormatter("%(asctime)s %(levelname)-8s %(message)s", datefmt="%H:%M:%S")
    )
    root.addHandler(console)
    if log_file:
        fh = logging.FileHandler(log_file, encoding="utf-8")
        fh.setLevel(logging.DEBUG)
        fh.setFormatter(
            logging.Formatter("%(asctime)s %(levelname)-8s %(name)s %(message)s")
        )
        root.addHandler(fh)
        logging.info("Logging to %s", log_file)


log = logging.getLogger("prompt_improver")

DEFAULT_CONFIG = {
    "api_endpoint": "https://ai.izdrail.com/v1/chat/completions",
    "model": "gemma4:e2b",
    "api_key": "",
    "request_timeout": 1200,
    "max_retries": 3,
    "backoff_factor": 2,
    "concurrency": 1,
    "request_delay": 1.0,
    "system_prompt": (
        "You are an expert prompt engineer. Your task is to improve the given prompt "
        "to make it more clear, detailed, specific, and effective. "
        "Enhance the prompt by adding context, clarifying the desired output, "
        "including constraints, and making instructions unambiguous. "
        "The improved prompt should be a polished version that will elicit better responses "
        "from an AI. Keep the original intent but refine the wording and structure. "
        "Return only the improved prompt text, without any additional commentary."
    ),
    "user_prompt_template": (
        "Original prompt:\n\n{original_prompt}\n\n"
        "Please provide an improved version of this prompt."
    ),
    "db_file": "prompts.db",
    "log_file": None,
    "debug_ai": False,
    "stream": True,
    "max_tokens": 2048,
    "no_tui": False,
    "tui_refresh_per_second": 10,
    "quiet": False,
}

CONFIG_INT_KEYS = {
    "request_timeout",
    "max_tokens",
    "concurrency",
    "max_retries",
    "backoff_factor",
    "tui_refresh_per_second",
}
CONFIG_BOOL_KEYS = {"debug_ai", "stream", "no_tui", "quiet"}
CONFIG_FLOAT_KEYS = {"request_delay"}


def load_config(config_path=None):
    cfg = dict(DEFAULT_CONFIG)
    if config_path and os.path.exists(config_path):
        with open(config_path, "r", encoding="utf-8") as f:
            file_cfg = json.load(f)
        cfg.update(file_cfg)
        log.info("Loaded config from %s", config_path)
    env_map = {
        "AI_ENDPOINT": "api_endpoint",
        "AI_MODEL": "model",
        "AI_API_KEY": "api_key",
        "REQUEST_TIMEOUT": "request_timeout",
        "DB_FILE": "db_file",
        "DEBUG_AI": "debug_ai",
        "STREAM": "stream",
        "MAX_TOKENS": "max_tokens",
        "NO_TUI": "no_tui",
    }
    for env_key, cfg_key in env_map.items():
        val = os.environ.get(env_key)
        if val is not None:
            if cfg_key in CONFIG_INT_KEYS:
                val = int(val)
            elif cfg_key in CONFIG_BOOL_KEYS:
                val = val.lower() in ("1", "true", "yes")
            cfg[cfg_key] = val
    validate_config(cfg)
    return cfg


def validate_config(cfg):
    errors = []
    if not cfg.get("api_endpoint"):
        errors.append("api_endpoint is required")
    if not cfg.get("model"):
        errors.append("model is required")
    for key in CONFIG_INT_KEYS:
        try:
            int(cfg[key])
        except (TypeError, ValueError):
            errors.append(f"{key} must be an integer, got {cfg[key]!r}")
    if cfg.get("concurrency", 1) < 1:
        errors.append("concurrency must be >= 1")
    if errors:
        for e in errors:
            log.error("Config error: %s", e)
        raise SystemExit("Invalid configuration. Fix the errors above and try again.")


def get_db_connection(db_path):
    conn = sqlite3.connect(db_path, timeout=30, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA synchronous=NORMAL")
    conn.execute("PRAGMA busy_timeout=30000")
    return conn


def init_db(db_path):
    conn = get_db_connection(db_path)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            act TEXT NOT NULL,
            prompt TEXT NOT NULL,
            for_devs INTEGER,
            type TEXT,
            contributor TEXT,
            improved_prompt TEXT,
            status TEXT DEFAULT 'pending',
            retries INTEGER DEFAULT 0,
            error_message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(act, prompt)
        )
    """)
    conn.execute("CREATE INDEX IF NOT EXISTS idx_prompts_status ON prompts(status)")
    conn.commit()
    conn.close()


def import_json_to_db(json_file, db_path):
    conn = get_db_connection(db_path)
    cursor = conn.cursor()
    existing = set()
    for row in cursor.execute("SELECT act, prompt FROM prompts"):
        existing.add((row[0], row[1]))

    with open(json_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, list):
        raise ValueError("JSON must be a list of objects")

    to_insert = []
    for item in data:
        act = str(item.get("act", "")).strip()
        prompt = str(item.get("prompt", "")).strip()
        if not act or not prompt:
            continue
        key = (act, prompt)
        if key in existing:
            continue
        existing.add(key)
        for_devs = 1 if item.get("for_devs", False) else 0
        type_ = str(item.get("type", "TEXT"))
        contributor = str(item.get("contributor", ""))
        to_insert.append((act, prompt, for_devs, type_, contributor, "pending"))

    if to_insert:
        cursor.executemany(
            "INSERT OR IGNORE INTO prompts (act, prompt, for_devs, type, contributor, status) VALUES (?, ?, ?, ?, ?, ?)",
            to_insert,
        )
        conn.commit()
    conn.close()
    return len(to_insert)


def get_pending_records(db_path, limit=None, max_retries=3):
    conn = get_db_connection(db_path)
    query = "SELECT id, act, prompt, for_devs, type, contributor, retries FROM prompts WHERE status IN ('pending','failed') AND retries < ? ORDER BY id"
    params = [max_retries]
    if limit:
        query += " LIMIT ?"
        params.append(limit)
    cursor = conn.execute(query, params)
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]


def update_record(
    db_path, record_id, status, improved_prompt=None, retries=None, error_message=None
):
    conn = get_db_connection(db_path)
    updates, params = [], []
    if status:
        updates.append("status = ?")
        params.append(status)
    if improved_prompt is not None:
        updates.append("improved_prompt = ?")
        params.append(improved_prompt)
    if retries is not None:
        updates.append("retries = ?")
        params.append(retries)
    if error_message is not None:
        updates.append("error_message = ?")
        params.append(error_message)
    updates.append("updated_at = ?")
    params.append(datetime.now().isoformat())
    params.append(record_id)
    sql = f"UPDATE prompts SET {', '.join(updates)} WHERE id = ?"
    conn.execute(sql, params)
    conn.commit()
    conn.close()


def delete_records(db_path, status=None):
    conn = get_db_connection(db_path)
    if status:
        conn.execute("DELETE FROM prompts WHERE status = ?", (status,))
    else:
        conn.execute("DELETE FROM prompts")
    deleted = conn.total_changes
    conn.commit()
    conn.close()
    return deleted


def get_stats(db_path):
    conn = get_db_connection(db_path)
    cursor = conn.execute("SELECT status, COUNT(*) FROM prompts GROUP BY status")
    status_counts = {row[0]: row[1] for row in cursor.fetchall()}
    total = sum(status_counts.values())
    cursor = conn.execute("""
        SELECT COUNT(*), COALESCE(AVG(length(improved_prompt)),0)
        FROM prompts WHERE status='completed'
    """)
    completed, avg_len = cursor.fetchone()
    conn.close()
    return total, status_counts, completed, avg_len


def export_improved_json(db_path, output_file, status="completed"):
    conn = get_db_connection(db_path)
    cursor = conn.execute(
        "SELECT act, prompt, for_devs, type, contributor, improved_prompt FROM prompts WHERE status=? AND improved_prompt IS NOT NULL",
        (status,),
    )
    rows = cursor.fetchall()
    conn.close()
    if not rows:
        log.info("No completed records to export.")
        return 0

    out_data = []
    for row in rows:
        item = {
            "act": row["act"],
            "prompt": row["prompt"],
            "for_devs": bool(row["for_devs"]),
            "type": row["type"],
            "contributor": row["contributor"],
            "improved_prompt": row["improved_prompt"],
        }
        out_data.append(item)

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(out_data, f, indent=2, ensure_ascii=False)
    log.info("Exported %d records to %s", len(out_data), output_file)
    return len(out_data)


def build_session(cfg):
    session = requests.Session()
    retry = Retry(total=0, connect=0, read=0, backoff_factor=0)
    adapter = HTTPAdapter(max_retries=retry, pool_connections=20, pool_maxsize=20)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session


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


def _stream_response(
    response, debug_ai, on_chunk=None, cancel_event: Optional[threading.Event] = None
):
    try:
        content_type = response.headers.get("content-type", "")
        if (
            "application/json" in content_type
            and response.headers.get("transfer-encoding") != "chunked"
        ):
            data = response.json()
            if "choices" in data:
                content = data["choices"][0].get("message", {}).get("content", "") or ""
                if content:
                    if on_chunk:
                        on_chunk(content)
                    yield content
                    return
        for line in response.iter_lines(decode_unicode=True, delimiter=None):
            if cancel_event is not None and cancel_event.is_set():
                log.debug("Streaming cancelled by user request.")
                try:
                    response.close()
                except Exception:
                    pass
                return
            if not line or line.strip() == "":
                continue
            if debug_ai:
                log.debug("RAW LINE: %s", line[:300])

            if line.startswith("data: "):
                data = line[6:].strip()
                if data == "[DONE]":
                    break
                try:
                    chunk = json.loads(data)
                    delta = chunk.get("choices", [{}])[0].get("delta", {})
                    content = delta.get("content", "") or ""
                    if content:
                        if on_chunk:
                            on_chunk(content)
                        yield content
                except (json.JSONDecodeError, KeyError, IndexError) as e:
                    if debug_ai:
                        log.debug("JSON parse error on data line: %s", str(e))
                    continue
            else:
                try:
                    chunk = json.loads(line.strip())
                    if isinstance(chunk, dict):
                        delta = chunk.get("choices", [{}])[0].get(
                            "delta", {}
                        ) or chunk.get("message", {})
                        content = (
                            delta.get("content", "") if isinstance(delta, dict) else ""
                        )
                        if content:
                            if on_chunk:
                                on_chunk(content)
                            yield content
                except json.JSONDecodeError:
                    continue
    except Exception as e:
        log.warning("Streaming interrupted: %s", e)
        if debug_ai:
            log.exception("Streaming error details")


def _sleep_cancellable(seconds, cancel_event: Optional[threading.Event]):
    if cancel_event is None:
        time.sleep(seconds)
        return
    end = time.time() + seconds
    while time.time() < end:
        if cancel_event.is_set():
            return
        time.sleep(min(0.1, end - time.time()))


def call_ai(
    prompt,
    cfg,
    session,
    on_chunk: Optional[Callable[[str], None]] = None,
    cancel_event: Optional[threading.Event] = None,
):
    headers = {"Content-Type": "application/json"}
    if cfg.get("api_key"):
        headers["Authorization"] = f"Bearer {cfg['api_key']}"

    messages = [
        {"role": "system", "content": cfg["system_prompt"]},
        {"role": "user", "content": prompt},
    ]

    endpoint = cfg["api_endpoint"].lower()
    use_ollama = "/api/chat" in endpoint and "/v1/" not in endpoint
    stream_enabled = cfg.get("stream", False) and on_chunk is not None

    if use_ollama:
        payload = {
            "model": cfg["model"],
            "messages": messages,
            "stream": stream_enabled,
            "options": {
                "temperature": 0.7,
                "num_predict": cfg.get("max_tokens", 2048),
            },
        }
    else:
        payload = {
            "model": cfg["model"],
            "messages": messages,
            "temperature": 0.7,
            "max_tokens": cfg.get("max_tokens", 2048),
            "stream": stream_enabled,
            "stop": None,
        }

    max_retries = cfg["max_retries"]
    backoff = cfg["backoff_factor"]
    timeout = cfg["request_timeout"]

    for attempt in range(1, max_retries + 1):
        if cancel_event is not None and cancel_event.is_set():
            return None
        start = time.time()
        log.debug("API attempt %d/%d", attempt, max_retries)
        try:
            _log_ai_request({**payload, "headers": headers}, cfg)

            resp = session.post(
                cfg["api_endpoint"],
                headers=headers,
                json=payload,
                timeout=timeout,
                stream=stream_enabled,
            )

            log.debug("Request completed in %.2fs", time.time() - start)

            if cfg.get("debug_ai"):
                log.debug("RAW RESPONSE STATUS: %s", resp.status_code)
                log.debug(
                    "RAW RESPONSE BODY (first 1500 chars): %s",
                    resp.text[:1500] if not stream_enabled else "[STREAMING]",
                )

            resp.raise_for_status()

            if stream_enabled:
                content_parts = []
                for chunk in _stream_response(
                    resp,
                    cfg.get("debug_ai", False),
                    on_chunk=on_chunk,
                    cancel_event=cancel_event,
                ):
                    content_parts.append(chunk)
                if cancel_event is not None and cancel_event.is_set():
                    return None
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
                    full_content = (
                        choices[0].get("message", {}).get("content", "").strip()
                    )

            if not full_content:
                raise ValueError("Empty response from API")

            log.debug("Received response length: %d chars", len(full_content))
            if cfg.get("debug_ai"):
                log.debug("FULL RESPONSE (truncated): %s...", full_content[:1500])

            return full_content

        except requests.exceptions.Timeout:
            wait = backoff**attempt
            log.warning("Timeout (attempt %d). Retry in %ds", attempt, wait)
            _sleep_cancellable(wait, cancel_event)
        except requests.exceptions.ConnectionError as e:
            wait = backoff**attempt
            log.error(
                "Connection error (attempt %d): %s. Retry in %ds", attempt, e, wait
            )
            _sleep_cancellable(wait, cancel_event)
        except requests.exceptions.HTTPError as e:
            status_code = e.response.status_code if e.response else "?"
            log.error("HTTP %s (attempt %d): %s", status_code, attempt, e)
            if e.response is not None and e.response.text:
                log.debug("Response body: %s", e.response.text[:800])
            if attempt == max_retries:
                return None
            _sleep_cancellable(backoff**attempt, cancel_event)
        except (json.JSONDecodeError, ValueError, KeyError) as e:
            log.error("Invalid response (attempt %d): %s", attempt, e)
            if attempt == max_retries:
                return None
            _sleep_cancellable(backoff**attempt, cancel_event)
        except Exception as e:
            log.warning("API error (attempt %d): %s", attempt, e)
            if log.isEnabledFor(logging.DEBUG):
                log.exception("Exception details:")
            if attempt == max_retries:
                return None
            _sleep_cancellable(backoff**attempt, cancel_event)

    return None


SPARK_CHARS = " ▁▂▃▄▅▆▇█"


def _sparkline(values, width=20):
    if not values:
        return " " * width
    values = values[-width:]
    lo, hi = min(values), max(values)
    span = (hi - lo) or 1.0
    chars = []
    for v in values:
        idx = int((v - lo) / span * (len(SPARK_CHARS) - 1))
        chars.append(SPARK_CHARS[idx])
    return "".join(chars).rjust(width)


class RichTUI:
    def __init__(self, total, refresh_per_second=10):
        self.total = total
        self.completed = 0
        self.failed = 0
        self.running = {}
        self.lock = threading.RLock()
        self.console = Console()
        self._stop = False
        self.overall_start = time.time()
        self.current_record_id = None
        self.layout = self._build_layout()
        self.live = Live(
            self.layout,
            console=self.console,
            refresh_per_second=refresh_per_second,
            screen=True,
            transient=False,
            auto_refresh=True,
            vertical_overflow="crop",
        )
        self.refresh()

    def _build_layout(self):
        layout = Layout()
        layout.split(
            Layout(name="header", size=3),
            Layout(name="progress", size=8),
            Layout(name="main"),
        )
        layout["main"].split_row(
            Layout(name="jobs", ratio=1),
            Layout(name="content", ratio=2),
        )
        return layout

    def start(self):
        self.live.start()

    def stop(self):
        self._stop = True
        self.live.stop()

    def start_record(self, record_id, act):
        with self.lock:
            self.running[record_id] = {
                "act": act,
                "start_time": time.time(),
                "content": "",
                "token_count": 0,
                "status": "starting",
                "history": [],
            }
            self.current_record_id = record_id
        self.refresh()

    def update_stream(self, record_id, chunk):
        with self.lock:
            rec = self.running.get(record_id)
            if not rec:
                return
            rec["content"] += chunk
            rec["token_count"] = len(rec["content"]) // 4
            rec["status"] = "streaming"
            elapsed = max(time.time() - rec["start_time"], 0.001)
            rec["history"].append(rec["token_count"] / elapsed)
        self.refresh()

    def set_completed(self, record_id, improved_prompt):
        with self.lock:
            rec = self.running.get(record_id)
            if rec:
                rec["content"] = improved_prompt
                rec["status"] = "completed"
        self.refresh()

    def set_error(self, record_id, error_msg):
        with self.lock:
            rec = self.running.get(record_id)
            if rec:
                rec["status"] = f"error: {error_msg[:60]}"
        self.refresh()

    def finish_record(self, record_id, success):
        with self.lock:
            self.running.pop(record_id, None)
            if success:
                self.completed += 1
            else:
                self.failed += 1
            if self.current_record_id == record_id:
                self.current_record_id = next(iter(self.running.keys()), None)
        self.refresh()

    def refresh(self):
        with self.lock:
            self._render_header()
            self._render_progress()
            self._render_jobs()
            self._render_content()

    def _render_header(self):
        header_text = Text(
            "Prompt Improver \u2022 Live", style="bold blue", justify="center"
        )
        self.layout["header"].update(Panel(header_text, style="white", box=box.ROUNDED))

    def _render_progress(self):
        done = self.completed + self.failed
        pct = (done / self.total * 100) if self.total else 0
        elapsed = time.time() - self.overall_start
        speed = done / max(elapsed, 1) * 60
        eta = (self.total - done) / max(speed / 60, 0.001) if done > 0 else 0

        prog_table = Table(show_header=False, box=None, padding=(0, 1), expand=True)
        prog_table.add_column(justify="left", width=14)
        prog_table.add_column(justify="right")
        prog_table.add_column(justify="left", width=14)
        prog_table.add_column(justify="right")
        prog_table.add_row("Total", str(self.total), "Active", str(len(self.running)))
        prog_table.add_row(
            "Completed",
            f"[green]{self.completed} \u2705[/green]",
            "Failed",
            f"[red]{self.failed} \u274c[/red]",
        )
        prog_table.add_row(
            "Elapsed", f"{elapsed:.0f}s", "Speed", f"{speed:.2f} items/min"
        )
        prog_table.add_row(
            "Progress",
            f"{pct:.1f}%",
            "ETA",
            f"{eta / 60:.1f} min" if eta > 60 else f"{eta:.0f}s",
        )

        bar = Progress(
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            TextColumn("[progress.percentage]{task.percentage:>3.0f}%"),
            TimeElapsedColumn(),
            TimeRemainingColumn(),
            expand=True,
        )
        bar.add_task("Overall", total=self.total, completed=done)

        group = Group(prog_table, bar)
        self.layout["progress"].update(
            Panel(group, title="Progress", border_style="green", box=box.ROUNDED)
        )

    def _render_jobs(self):
        table = Table(box=box.SIMPLE, expand=True, show_lines=False)
        table.add_column("Job", ratio=3, overflow="ellipsis")
        table.add_column("Status", ratio=2)
        table.add_column("Chars", ratio=1, justify="right")
        table.add_column("Tok/s", ratio=2)
        if not self.running:
            table.add_row("[dim]No active generation[/dim]", "", "", "")
        else:
            for rid, rec in self.running.items():
                elapsed = max(time.time() - rec["start_time"], 0.001)
                tps = rec["token_count"] / elapsed
                status = rec["status"]
                style = {
                    "streaming": "cyan",
                    "starting": "yellow",
                    "completed": "green",
                    "failed": "red",
                }.get(status, "red" if status.startswith("error") else "white")
                marker = "\u27a4 " if rid == self.current_record_id else "  "
                spark = _sparkline(rec["history"], width=12)
                table.add_row(
                    f"{marker}{rec['act'][:40]}",
                    f"[{style}]{status}[/{style}]",
                    str(len(rec["content"])),
                    f"{tps:5.1f} {spark}",
                )
        self.layout["jobs"].update(
            Panel(table, title="Active Jobs", border_style="cyan", box=box.ROUNDED)
        )

    def _render_content(self):
        rid = self.current_record_id
        rec = self.running.get(rid) if rid is not None else None
        if not rec:
            content = "Waiting for the next job..."
        else:
            content = rec["content"] or "Waiting for first tokens..."
            if rec["status"].startswith("error"):
                content = f"\u274c {rec['status']}\n\n{content}"
        lines = content.splitlines() or [content]
        if len(lines) > 50:
            content = "... [truncated to last 50 lines]\n\n" + "\n".join(lines[-50:])
        title = f"Live Output \u2014 {rec['act'][:50]}" if rec else "Live Output"
        self.layout["content"].update(
            Panel(
                Text(content, style="white"),
                title=title,
                border_style="yellow",
                box=box.ROUNDED,
                padding=(1, 2),
            )
        )


_shutdown_event = threading.Event()


def _signal_handler(signum, frame):
    if _shutdown_event.is_set():
        log.warning("Forced exit.")
        sys.exit(1)
    _shutdown_event.set()
    log.warning(
        "Shutdown requested. Finishing current record(s)... (Ctrl+C again to force)"
    )


def _worker(cfg, record, tui, session, quiet=False):
    rec_id = record["id"]
    act = record["act"]
    original_prompt = record["prompt"]
    retries = record["retries"] + 1
    db_path = cfg["db_file"]

    if tui:
        tui.start_record(rec_id, act)
    elif not quiet:
        log.info("Processing: %s", act[:60])

    user_prompt = cfg["user_prompt_template"].format(original_prompt=original_prompt)

    def on_chunk(chunk):
        if tui:
            tui.update_stream(rec_id, chunk)
        if not quiet and not tui:
            sys.stdout.write(chunk)
            sys.stdout.flush()

    improved = call_ai(
        user_prompt,
        cfg,
        session,
        on_chunk=on_chunk if cfg.get("stream") else None,
        cancel_event=_shutdown_event,
    )

    success = improved is not None
    if success:
        update_record(
            db_path, rec_id, "completed", improved_prompt=improved, retries=retries
        )
        if tui:
            tui.set_completed(rec_id, improved)
            log.info("\u2705 Completed %s", act[:60])
        else:
            if not quiet:
                log.info("\u2705 Completed %s", act[:60])
    else:
        error_msg = "Cancelled" if _shutdown_event.is_set() else "Failed after retries"
        update_record(
            db_path, rec_id, "failed", retries=retries, error_message=error_msg
        )
        if tui:
            tui.set_error(rec_id, error_msg)
            log.error("\u274c Failed %s (%s)", act[:60], error_msg)
        else:
            if not quiet:
                log.error("\u274c Failed %s (%s)", act[:60], error_msg)

    if tui:
        tui.finish_record(rec_id, success)
    if cfg.get("request_delay", 0) > 0:
        _sleep_cancellable(cfg["request_delay"], _shutdown_event)
    return success


def process_records(cfg, limit=None, force=False):
    signal.signal(signal.SIGINT, _signal_handler)
    signal.signal(signal.SIGTERM, _signal_handler)
    _shutdown_event.clear()

    if force:
        conn = get_db_connection(cfg["db_file"])
        conn.execute(
            "UPDATE prompts SET status='pending', retries=0, error_message=NULL"
        )
        conn.commit()
        conn.close()
        log.info("All records reset to pending.")

    records = get_pending_records(
        cfg["db_file"], limit=limit, max_retries=cfg["max_retries"]
    )

    if not records:
        log.info("No pending records.")
        return

    total = len(records)
    log.info("Processing %d records...", total)

    concurrency = cfg.get("concurrency", 1)
    use_tui = not cfg.get("no_tui", False) and sys.stdout.isatty()
    quiet = cfg.get("quiet", False)
    session = build_session(cfg)

    tui = None
    if use_tui:
        try:
            tui = RichTUI(
                total, refresh_per_second=cfg.get("tui_refresh_per_second", 10)
            )
            tui.start()
        except Exception as e:
            log.warning("Failed to start TUI, falling back to console mode: %s", e)
            use_tui = False
            tui = None

    try:
        with ThreadPoolExecutor(max_workers=concurrency) as pool:
            futures = []
            for rec in records:
                if _shutdown_event.is_set():
                    break
                f = pool.submit(_worker, cfg, rec, tui, session, quiet)
                futures.append((f, rec["id"]))

            for f, rid in futures:
                try:
                    f.result()
                except Exception as e:
                    log.error("Worker for record %d crashed: %s", rid, e)
                    if log.isEnabledFor(logging.DEBUG):
                        log.exception("Details:")
                    update_record(cfg["db_file"], rid, "failed", error_message=str(e))
                    if tui:
                        tui.set_error(rid, str(e))
                        tui.finish_record(rid, success=False)
    finally:
        if tui:
            tui.stop()
        session.close()

    log.info("Processing finished.")


def cmd_stats(db_path):
    total, status_counts, completed, avg_len = get_stats(db_path)
    log.info("\U0001f4ca Database Statistics")
    log.info(" Total: %d", total)
    for s in ("pending", "processing", "completed", "failed"):
        log.info(" %s: %d", s.capitalize(), status_counts.get(s, 0))
    if completed:
        log.info(" Completed: %d, avg improved length: %.1f chars", completed, avg_len)


def cmd_list(db_path, status):
    conn = get_db_connection(db_path)
    if status == "all":
        rows = conn.execute(
            "SELECT id, act, status, retries FROM prompts ORDER BY id"
        ).fetchall()
    else:
        rows = conn.execute(
            "SELECT id, act, status, retries FROM prompts WHERE status=? ORDER BY id",
            (status,),
        ).fetchall()
    conn.close()
    if not rows:
        log.info("No records found with status '%s'.", status)
        return
    log.info("Records (status=%s):", status)
    log.info(" %-4s %-10s %-5s %s", "ID", "Status", "Retries", "Act")
    log.info(" %s", "-" * 80)
    for row in rows:
        log.info(
            " %-4d %-10s %-5d %s",
            row["id"],
            row["status"],
            row["retries"],
            row["act"][:70],
        )


def cmd_show(db_path, record_id):
    conn = get_db_connection(db_path)
    row = conn.execute("SELECT * FROM prompts WHERE id=?", (record_id,)).fetchone()
    conn.close()
    if not row:
        log.error("Record %d not found.", record_id)
        return
    rec = dict(row)
    log.info("ID: %d", rec["id"])
    log.info("Act: %s", rec["act"])
    log.info("Status: %s", rec["status"])
    log.info("Retries: %d", rec["retries"])
    log.info("Type: %s", rec["type"])
    log.info("Contributor: %s", rec["contributor"])
    if rec.get("error_message"):
        log.info("Error: %s", rec["error_message"])
    log.info("\n--- Original Prompt ---\n%s", rec["prompt"])
    if rec.get("improved_prompt"):
        log.info("\n--- Improved Prompt ---\n%s", rec["improved_prompt"])


def cmd_retry_failed(db_path):
    conn = get_db_connection(db_path)
    conn.execute(
        "UPDATE prompts SET status='pending', retries=0, error_message=NULL WHERE status='failed'"
    )
    conn.commit()
    affected = conn.total_changes
    conn.close()
    log.info("Reset %d failed records to pending.", affected)


def parse_args():
    parser = ArgumentParser(description="Improve prompts in a JSON dataset using AI.")
    parser.add_argument("json", nargs="?", help="Input JSON file to import")
    parser.add_argument("--db", help="SQLite database file")
    parser.add_argument("--config", help="JSON config file")
    parser.add_argument("--limit", type=int, help="Max records to process")
    parser.add_argument(
        "--force", action="store_true", help="Reset all records to pending"
    )
    parser.add_argument("--stats", action="store_true", help="Show statistics")
    parser.add_argument(
        "--list", nargs="?", const="all", help="List records by status (default: all)"
    )
    parser.add_argument("--show", type=int, help="Show record by ID")
    parser.add_argument(
        "--export", metavar="FILE", help="Export improved prompts to JSON file"
    )
    parser.add_argument(
        "--delete", nargs="?", const="all", help="Delete records by status"
    )
    parser.add_argument(
        "--retry-failed", action="store_true", help="Reset failed to pending"
    )
    parser.add_argument("--log-file", help="Log file path")
    parser.add_argument("--verbose", action="store_true", help="Enable debug logging")
    parser.add_argument(
        "-P",
        "--parallel",
        type=int,
        dest="concurrency",
        help="Number of parallel workers",
    )
    parser.add_argument(
        "--debug-ai", action="store_true", help="Log full AI payloads and raw responses"
    )
    parser.add_argument("--timeout", type=int, help="Request timeout in seconds")
    parser.add_argument(
        "--stream",
        action="store_true",
        help="Enable streaming and show live content in TUI",
    )
    parser.add_argument(
        "--no-tui",
        action="store_true",
        help="Disable TUI and print streaming content to stdout",
    )
    parser.add_argument(
        "--quiet",
        action="store_true",
        help="Suppress progress output when --no-tui is used",
    )
    parser.add_argument(
        "--tui-fps", type=int, dest="tui_refresh_per_second", help="TUI refresh rate"
    )
    return parser.parse_args()


def main():
    args = parse_args()
    cfg = load_config(args.config)

    if args.db:
        cfg["db_file"] = args.db
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
    if args.no_tui:
        cfg["no_tui"] = True
    if args.quiet:
        cfg["quiet"] = True
    if args.tui_refresh_per_second:
        cfg["tui_refresh_per_second"] = args.tui_refresh_per_second

    validate_config(cfg)
    setup_logging(
        verbose=args.verbose or cfg.get("debug_ai"), log_file=cfg.get("log_file")
    )

    db_path = cfg["db_file"]
    init_db(db_path)

    if args.stats:
        cmd_stats(db_path)
        return
    if args.list is not None:
        cmd_list(db_path, args.list)
        return
    if args.show is not None:
        cmd_show(db_path, args.show)
        return
    if args.retry_failed:
        cmd_retry_failed(db_path)
        return
    if args.delete is not None:
        status = None if args.delete == "all" else args.delete
        deleted = delete_records(db_path, status)
        log.info(
            "Deleted %d records%s.",
            deleted,
            f" (status={args.delete})" if status else "",
        )
        return
    if args.export:
        exported = export_improved_json(db_path, args.export)
        if exported == 0:
            log.warning("No records to export.")
        return

    if args.json:
        try:
            inserted = import_json_to_db(args.json, db_path)
            log.info("Inserted %d new records.", inserted)
        except Exception as e:
            log.error("Import failed: %s", e)
            return

    process_records(cfg, limit=args.limit, force=args.force)
    cmd_stats(db_path)


if __name__ == "__main__":
    main()
