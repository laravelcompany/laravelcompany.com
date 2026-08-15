#!/usr/bin/env python3
"""
Generate product content from CSV product feeds using AI with database,
resume support, fallback, and a flicker-free live Rich TUI showing streaming
responses, per-worker progress, and tokens/sec.

Key improvements over the previous version
-------------------------------------------
* TUI no longer flickers: the Layout tree is built ONCE and only the
  renderables inside it are swapped in place. Rich's own `Live` auto-refresh
  thread paints the screen on a fixed cadence -- there is no more competing
  manual `live.update()` loop that used to double-render and tear the screen.
* Multi-job view: when concurrency > 1 you now see every active generation
  (title, status, words, tokens/sec, mini progress bar), not just one.
* A small tokens/sec sparkline per active job.
* HTTP session reuse with urllib3 retry/backoff adapter (fewer TCP/TLS
  handshakes, more resilient to transient 5xx/connection errors).
* Cooperative cancellation: Ctrl+C now signals a `threading.Event` that is
  checked inside the streaming loop, so shutdown is prompt instead of
  waiting for an in-flight HTTP request to time out.
* SQLite: added an index on `status`, and CSV import now uses a single
  `executemany` transaction instead of one round trip per row.
* Export supports both Markdown (default) and JSON.
* New `--init-config` command that writes a starter JSON config file.
* Config validation with clear error messages before any work starts.
"""
import csv
import hashlib
import json
import logging
import os
import re
import signal
import sqlite3
import sys
import threading
import time
from argparse import ArgumentParser
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime
from pathlib import Path
from typing import Callable, Optional

import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from rich.console import Console, Group
from rich.layout import Layout
from rich.live import Live
from rich.panel import Panel
from rich.progress import BarColumn, Progress, TextColumn, TimeElapsedColumn, TimeRemainingColumn
from rich.table import Table
from rich.text import Text
from rich import box

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
    root.handlers.clear()
    console = logging.StreamHandler(sys.stdout)
    console.setLevel(level)
    console.setFormatter(ColorFormatter("%(asctime)s %(levelname)-8s %(message)s", datefmt="%H:%M:%S"))
    root.addHandler(console)
    if log_file:
        fh = logging.FileHandler(log_file, encoding="utf-8")
        fh.setLevel(logging.DEBUG)
        fh.setFormatter(logging.Formatter("%(asctime)s %(levelname)-8s %(name)s %(message)s"))
        root.addHandler(fh)
        logging.info("Logging to %s", log_file)


log = logging.getLogger("bloggen")

# ============================================================================
# CONFIGURATION
# ============================================================================
DEFAULT_CONFIG = {
    "api_endpoint": "https://ai.izdrail.com/v1/chat/completions",
    "model": "gemma4:e4b",
    "api_key": "",
    "request_timeout": 1200,
    "max_retries": 3,
    "backoff_factor": 2,
    "min_words": 350,
    "request_delay": 2.0,
    "concurrency": 1,
    "system_prompt": (
        "You are a product content writer. "
        "Create accurate, useful product-focused copy from the supplied product data. "
        "Write entirely in natural English, even if the source data contains another language. "
        "Do not invent specifications, prices, availability, ratings, reviews, or discounts. "
        "Preserve factual product information and keep links exactly as supplied. "
        "Optimize the output for organic search visibility without keyword stuffing."
    ),
    "user_prompt_template": (
        "Write product-focused content for the following product.\n\n"
        "{product_context}\n\n"
        "The content should:\n"
        "- Be written entirely in English and not in Romanian.\n"
        "- Be suitable for a product page or product content block.\n"
        "- Use the affiliate link as the primary outbound link when linking is needed.\n"
        "- Use the store/product URL only as a secondary reference if absolutely necessary.\n"
        "- Be SEO optimized for the product title, brand, category, and likely buyer intent.\n"
        "- Use a clear H1 or opening title, descriptive H2/H3 headings, and short scannable paragraphs.\n"
        "- Include the main keyword naturally in the opening paragraph and a few related phrases throughout.\n"
        "- Include one short FAQ section if it fits the product.\n"
        "- End with a line that lists 8 to 12 relevant tags as comma-separated keywords.\n"
        "- Prefer natural language over repetitive keyword stuffing.\n"
        "- Keep pricing consistent with the supplied data.\n"
        "- Treat old_price as the previous/original price only.\n"
        "- Do not fabricate reviews, ratings, availability, discounts, or specifications.\n"
        "- Preserve factual product information from the input.\n"
        "- Include useful, natural product copy with product-relevant headings or structure.\n"
        "- Produce clean {output_format}."
    ),
    "expand_prompt": (
        "\n\nThe previous response was too short. Please expand it to at least 350 words "
        "by adding more details, examples, and deeper explanations. Include additional sections "
        "and ensure the final post is comprehensive and well structured."
    ),
    "db_file": "blog_posts.db",
    "export_dir": "exported_posts",
    "export_format": "md",
    "log_file": None,
    "debug_ai": False,
    "stream": False,
    "max_tokens": 4096,
    "no_tui": False,
    "stream_to_file": None,
    "stream_lines": 180,
    "quiet": False,
    "tui_refresh_per_second": 10,
    "content_format": "markdown",
}

CONFIG_INT_KEYS = {"request_timeout", "max_tokens", "stream_lines", "concurrency",
                   "max_retries", "backoff_factor", "tui_refresh_per_second"}
CONFIG_BOOL_KEYS = {"debug_ai", "stream", "no_tui", "quiet"}
CONFIG_FLOAT_KEYS = {"request_delay"}

PRODUCT_CSV_COLUMNS = [
    "title",
    "aff_code",
    "price",
    "url",
    "gtin",
    "campaign_name",
    "created_at",
    "campaign_url",
    "product_active",
    "product_id",
    "brand",
    "other_data",
    "old_price",
    "category",
    "widget_name",
    "campaign_id",
    "image_urls",
    "description",
]
LEGACY_CSV_COLUMNS = ["Title", "Body"]
GENERATION_FIELDS = [
    "title",
    "brand",
    "category",
    "price",
    "old_price",
    "description",
    "url",
    "campaign_url",
    "gtin",
    "aff_code",
    "other_data",
    "image_urls",
    "campaign_name",
    "campaign_id",
    "widget_name",
    "product_id",
    "product_active",
]


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
        "EXPORT_FORMAT": "export_format",
        "DEBUG_AI": "debug_ai",
        "STREAM": "stream",
        "MAX_TOKENS": "max_tokens",
        "NO_TUI": "no_tui",
        "STREAM_LINES": "stream_lines",
        "CONTENT_FORMAT": "content_format",
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
    if cfg.get("export_format") not in ("md", "json"):
        errors.append("export_format must be 'md' or 'json'")
    if cfg.get("content_format") not in ("markdown", "html"):
        errors.append("content_format must be 'markdown' or 'html'")
    if errors:
        for e in errors:
            log.error("Config error: %s", e)
        raise SystemExit("Invalid configuration. Fix the errors above and try again.")


def write_starter_config(path):
    starter = {k: v for k, v in DEFAULT_CONFIG.items()}
    with open(path, "w", encoding="utf-8") as f:
        json.dump(starter, f, indent=2, ensure_ascii=False)
    log.info("Wrote starter config to %s", path)


# ============================================================================
# DATABASE
# ============================================================================
def get_db_connection(db_path):
    conn = sqlite3.connect(db_path, timeout=10)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA synchronous=NORMAL")
    return conn


def _clean_text(value):
    if value is None:
        return ""
    return str(value).strip()


def _normalize_cell(value):
    text = _clean_text(value)
    if not text:
        return ""
    try:
        parsed = json.loads(text)
    except Exception:
        return text
    if isinstance(parsed, (list, dict)):
        return json.dumps(parsed, ensure_ascii=False, separators=(",", ":"))
    return text


def _parse_image_urls(value):
    text = _clean_text(value)
    if not text:
        return []
    try:
        parsed = json.loads(text)
    except Exception:
        parsed = None
    if isinstance(parsed, list):
        return [str(item).strip() for item in parsed if str(item).strip()]
    if isinstance(parsed, dict):
        return [json.dumps(parsed, ensure_ascii=False)]
    if "\n" in text or "|" in text or ";" in text:
        parts = re.split(r"[\n|;]+", text)
    elif text.count("http://") + text.count("https://") > 1 and "," in text:
        parts = [part.strip() for part in text.split(",")]
    else:
        return [text]
    return [part for part in (piece.strip() for piece in parts) if part]


def _canonical_json(data):
    return json.dumps(data, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def _safe_identifier(value):
    text = _clean_text(value).lower()
    text = re.sub(r"\s+", " ", text)
    return text


def _build_product_key(row):
    product_id = _clean_text(row.get("product_id"))
    gtin = _clean_text(row.get("gtin"))
    if product_id:
        return f"product_id:{product_id}"
    if gtin:
        return f"gtin:{gtin}"
    fingerprint_fields = {field: _safe_identifier(row.get(field)) for field in GENERATION_FIELDS}
    fingerprint = _canonical_json(fingerprint_fields)
    digest = hashlib.sha1(fingerprint.encode("utf-8")).hexdigest()
    return f"fallback:{digest}"


def _build_signature(row):
    relevant = {
        field: _safe_identifier(row.get(field))
        for field in (
            "title",
            "brand",
            "category",
            "price",
            "old_price",
            "description",
            "url",
            "campaign_url",
            "gtin",
            "aff_code",
            "other_data",
            "image_urls",
            "campaign_name",
            "campaign_id",
            "widget_name",
            "product_id",
            "product_active",
        )
    }
    return hashlib.sha1(_canonical_json(relevant).encode("utf-8")).hexdigest()


def _normalize_product_row(row, source_mode="product"):
    normalized = {field: _normalize_cell(row.get(field)) for field in PRODUCT_CSV_COLUMNS}
    normalized["source_created_at"] = _normalize_cell(row.get("created_at") or row.get("source_created_at"))
    if source_mode == "legacy":
        normalized["title"] = _normalize_cell(row.get("Title"))
        normalized["description"] = _normalize_cell(row.get("Body"))
    normalized["image_urls"] = _normalize_cell(row.get("image_urls"))
    normalized["product_key"] = _build_product_key(normalized)
    normalized["product_signature"] = _build_signature(normalized)
    normalized["source_mode"] = source_mode
    normalized["source_payload"] = _canonical_json({
        key: _normalize_cell(row.get(key)) for key in (PRODUCT_CSV_COLUMNS if source_mode == "product" else LEGACY_CSV_COLUMNS)
    })
    return normalized


def _legacy_row_to_product(row):
    title = _normalize_cell(row.get("title"))
    body = _normalize_cell(row.get("body"))
    payload = {
        "title": title,
        "description": body,
        "product_id": "",
        "gtin": "",
        "url": "",
        "campaign_url": "",
        "brand": "",
        "category": "",
        "price": "",
        "old_price": "",
        "aff_code": "",
        "other_data": "",
        "campaign_name": "",
        "campaign_id": "",
        "widget_name": "",
        "image_urls": "",
        "product_active": "",
        "source_created_at": "",
        "source_mode": "legacy",
        "product_key": f"legacy:{hashlib.sha1(title.encode('utf-8')).hexdigest()}",
    }
    payload["product_signature"] = _build_signature(payload)
    payload["source_payload"] = _canonical_json({"Title": title, "Body": body})
    return payload


def _table_needs_migration(conn):
    cursor = conn.execute("PRAGMA table_info(blog_posts)")
    existing = {row["name"] for row in cursor.fetchall()}
    return bool(existing) and "product_key" not in existing


def _create_product_schema(conn):
    conn.execute("""
        CREATE TABLE IF NOT EXISTS blog_posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_key TEXT NOT NULL UNIQUE,
            product_signature TEXT,
            source_mode TEXT DEFAULT 'product',
            title TEXT NOT NULL,
            aff_code TEXT,
            price TEXT,
            url TEXT,
            gtin TEXT,
            campaign_name TEXT,
            source_created_at TEXT,
            campaign_url TEXT,
            product_active TEXT,
            product_id TEXT,
            brand TEXT,
            other_data TEXT,
            old_price TEXT,
            category TEXT,
            widget_name TEXT,
            campaign_id TEXT,
            image_urls TEXT,
            description TEXT,
            source_payload TEXT,
            generated_content TEXT,
            blog_post TEXT,
            status TEXT DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            retries INTEGER DEFAULT 0,
            word_count INTEGER DEFAULT 0,
            error_message TEXT
        )
    """)
    conn.execute("CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_blog_posts_product_id ON blog_posts(product_id)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_blog_posts_gtin ON blog_posts(gtin)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_blog_posts_product_key ON blog_posts(product_key)")


def _migrate_legacy_blog_posts(conn):
    conn.execute("ALTER TABLE blog_posts RENAME TO blog_posts_legacy")
    _create_product_schema(conn)
    cursor = conn.execute("SELECT * FROM blog_posts_legacy ORDER BY id")
    rows = cursor.fetchall()
    legacy_columns = {col[1] for col in conn.execute("PRAGMA table_info(blog_posts_legacy)").fetchall()}
    insert_rows = []
    for row in rows:
        legacy = dict(row)
        normalized = _legacy_row_to_product(legacy)
        insert_rows.append((
            normalized["product_key"],
            normalized["product_signature"],
            normalized["source_mode"],
            normalized["title"],
            normalized["aff_code"],
            normalized["price"],
            normalized["url"],
            normalized["gtin"],
            normalized["campaign_name"],
            normalized["source_created_at"],
            normalized["campaign_url"],
            normalized["product_active"],
            normalized["product_id"],
            normalized["brand"],
            normalized["other_data"],
            normalized["old_price"],
            normalized["category"],
            normalized["widget_name"],
            normalized["campaign_id"],
            normalized["image_urls"],
            normalized["description"],
            normalized["source_payload"],
            legacy.get("blog_post") or legacy.get("generated_content"),
            legacy.get("blog_post") or legacy.get("generated_content"),
            legacy.get("status", "pending"),
            legacy.get("created_at"),
            legacy.get("updated_at"),
            legacy.get("retries", 0),
            legacy.get("word_count", 0),
            legacy.get("error_message"),
        ))
    if insert_rows:
        conn.executemany(
            """
            INSERT INTO blog_posts (
                product_key, product_signature, source_mode, title, aff_code, price, url, gtin,
                campaign_name, source_created_at, campaign_url, product_active, product_id, brand,
                other_data, old_price, category, widget_name, campaign_id, image_urls, description,
                source_payload, generated_content, blog_post, status, created_at, updated_at, retries,
                word_count, error_message
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            insert_rows,
        )
    conn.execute("DROP TABLE blog_posts_legacy")
    conn.commit()


def init_db(db_path):
    conn = get_db_connection(db_path)
    cursor = conn.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='blog_posts'")
    if cursor.fetchone() is None:
        _create_product_schema(conn)
        conn.commit()
        conn.close()
        return

    if _table_needs_migration(conn):
        _migrate_legacy_blog_posts(conn)
        conn.close()
        return

    cursor = conn.execute("PRAGMA table_info(blog_posts)")
    existing = {row["name"] for row in cursor.fetchall()}
    for col, col_def in [
        ("product_key", "TEXT"),
        ("product_signature", "TEXT"),
        ("source_mode", "TEXT DEFAULT 'product'"),
        ("aff_code", "TEXT"),
        ("price", "TEXT"),
        ("url", "TEXT"),
        ("gtin", "TEXT"),
        ("campaign_name", "TEXT"),
        ("source_created_at", "TEXT"),
        ("campaign_url", "TEXT"),
        ("product_active", "TEXT"),
        ("product_id", "TEXT"),
        ("brand", "TEXT"),
        ("other_data", "TEXT"),
        ("old_price", "TEXT"),
        ("category", "TEXT"),
        ("widget_name", "TEXT"),
        ("campaign_id", "TEXT"),
        ("image_urls", "TEXT"),
        ("description", "TEXT"),
        ("source_payload", "TEXT"),
        ("generated_content", "TEXT"),
    ]:
        if col not in existing:
            conn.execute(f"ALTER TABLE blog_posts ADD COLUMN {col} {col_def}")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_blog_posts_product_id ON blog_posts(product_id)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_blog_posts_gtin ON blog_posts(gtin)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_blog_posts_product_key ON blog_posts(product_key)")
    conn.commit()
    conn.close()


def import_csv_to_db(csv_file, db_path):
    with open(csv_file, "r", newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames or []
        if set(PRODUCT_CSV_COLUMNS).issubset(fieldnames):
            source_mode = "product"
        elif set(LEGACY_CSV_COLUMNS).issubset(fieldnames):
            source_mode = "legacy"
        else:
            raise ValueError(
                "CSV must contain either the product schema columns or legacy 'Title'/'Body' columns."
            )

        rows = []
        for row in reader:
            if source_mode == "product":
                normalized = _normalize_product_row(row, source_mode="product")
                if not normalized["title"]:
                    log.warning("Skipping row with empty title")
                    continue
                rows.append(normalized)
            else:
                title = _normalize_cell(row.get("Title"))
                body = _normalize_cell(row.get("Body"))
                if not title or not body:
                    log.warning("Skipping row with empty title/body")
                    continue
                rows.append(_normalize_product_row({"title": title, "description": body}, source_mode="legacy"))

    if not rows:
        return 0

    conn = get_db_connection(db_path)
    cursor = conn.cursor()
    existing_rows = cursor.execute(
        "SELECT id, product_key, product_id, gtin, product_signature, status, generated_content, blog_post, "
        "retries, word_count, error_message "
        "FROM blog_posts"
    ).fetchall()
    index = {}
    existing_by_id = {}
    for row in existing_rows:
        row_id = row["id"]
        existing_by_id[row_id] = row
        for key in (row["product_key"], row["product_id"], row["gtin"]):
            if key:
                index[key] = row_id

    inserts = []
    updates = []
    inserted = 0
    updated = 0
    seen_keys = set()

    for row in rows:
        lookup_keys = [row["product_key"], row["product_id"], row["gtin"]]
        if any(key in seen_keys for key in lookup_keys if key):
            continue
        for key in lookup_keys:
            if key:
                seen_keys.add(key)
        record_id = next((index[key] for key in lookup_keys if key and key in index), None)
        is_existing = record_id is not None
        source_payload = row.get("source_payload")
        existing_signature = None
        existing_status = None
        existing_content = None
        if is_existing:
            existing = existing_by_id.get(record_id)
            if existing is not None:
                existing_signature = existing["product_signature"]
                existing_status = existing["status"]
                existing_content = existing["generated_content"] or existing["blog_post"]
        needs_regen = (existing_signature != row["product_signature"]) or not existing_content
        status = "pending" if not is_existing or needs_regen else (existing_status or "pending")
        if not is_existing:
            inserts.append((
                row["product_key"],
                row["product_signature"],
                row["source_mode"],
                row["title"],
                row["aff_code"],
                row["price"],
                row["url"],
                row["gtin"],
                row["campaign_name"],
                row["source_created_at"],
                row["campaign_url"],
                row["product_active"],
                row["product_id"],
                row["brand"],
                row["other_data"],
                row["old_price"],
                row["category"],
                row["widget_name"],
                row["campaign_id"],
                row["image_urls"],
                row["description"],
                source_payload,
                None,
                None,
                status,
                0,
                0,
                None,
            ))
            inserted += 1
            index[row["product_key"]] = -1
            if row["product_id"]:
                index[row["product_id"]] = -1
            if row["gtin"]:
                index[row["gtin"]] = -1
        else:
            updates.append((
                row["product_key"],
                row["product_signature"],
                row["source_mode"],
                row["title"],
                row["aff_code"],
                row["price"],
                row["url"],
                row["gtin"],
                row["campaign_name"],
                row["source_created_at"],
                row["campaign_url"],
                row["product_active"],
                row["product_id"],
                row["brand"],
                row["other_data"],
                row["old_price"],
                row["category"],
                row["widget_name"],
                row["campaign_id"],
                row["image_urls"],
                row["description"],
                source_payload,
                status if needs_regen else existing_status,
                0 if needs_regen else existing["retries"] if existing is not None else 0,
                0 if needs_regen else existing["word_count"] if existing is not None else 0,
                None if needs_regen else existing["error_message"] if existing is not None else None,
                record_id,
            ))
            updated += 1
            index[row["product_key"]] = record_id
            if row["product_id"]:
                index[row["product_id"]] = record_id
            if row["gtin"]:
                index[row["gtin"]] = record_id

    if inserts:
        cursor.executemany(
            """
            INSERT INTO blog_posts (
                product_key, product_signature, source_mode, title, aff_code, price, url, gtin,
                campaign_name, source_created_at, campaign_url, product_active, product_id, brand,
                other_data, old_price, category, widget_name, campaign_id, image_urls, description,
                source_payload, generated_content, blog_post, status, retries, word_count, error_message
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            inserts,
        )

    if updates:
        update_sql = (
            "UPDATE blog_posts SET "
            "product_key=?, product_signature=?, source_mode=?, title=?, aff_code=?, price=?, url=?, gtin=?, "
            "campaign_name=?, source_created_at=?, campaign_url=?, product_active=?, product_id=?, brand=?, "
            "other_data=?, old_price=?, category=?, widget_name=?, campaign_id=?, image_urls=?, description=?, "
            "source_payload=?, "
            "status=?, "
            "retries=?, "
            "word_count=?, "
            "error_message=?, "
            "updated_at=CURRENT_TIMESTAMP "
            "WHERE id=?"
        )
        cursor.executemany(update_sql, updates)

    conn.commit()
    conn.close()
    return inserted, updated


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
    query = f"SELECT * FROM blog_posts {where} ORDER BY id"
    if limit is not None:
        query += f" LIMIT {limit}"
    cursor = conn.execute(query, params)
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]


def update_record_status(db_path, record_id, status, blog_post=None, generated_content=None,
                          retries=None, word_count=None, error_message=None):
    conn = get_db_connection(db_path)
    updates, params = [], []
    if status:
        updates.append("status = ?"); params.append(status)
    if blog_post is not None:
        updates.append("blog_post = ?"); params.append(blog_post)
    if generated_content is not None:
        updates.append("generated_content = ?"); params.append(generated_content)
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
# HTTP SESSION (connection reuse + retry/backoff at the transport level)
# ============================================================================
def build_session(cfg):
    session = requests.Session()
    retry = Retry(
        total=0,  # we do our own application-level retry loop in call_ai
        connect=0,
        read=0,
        backoff_factor=0,
    )
    adapter = HTTPAdapter(max_retries=retry, pool_connections=10, pool_maxsize=10)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session


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


def _stream_response(response, debug_ai, on_chunk=None, cancel_event: Optional[threading.Event] = None):
    """Streaming parser – handles SSE and plain JSON fallback, cancellable mid-stream."""
    try:
        content_type = response.headers.get("content-type", "")
        if "application/json" in content_type and response.headers.get("transfer-encoding") != "chunked":
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
                        delta = chunk.get("choices", [{}])[0].get("delta", {}) or chunk.get("message", {})
                        content = delta.get("content", "") if isinstance(delta, dict) else ""
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


def call_ai(prompt, cfg, session, expand=False, on_chunk: Optional[Callable[[str], None]] = None,
            cancel_event: Optional[threading.Event] = None):
    """Unified AI caller – auto-detects endpoint format."""
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
    stream_enabled = cfg.get("stream", False) and on_chunk is not None

    if use_ollama:
        payload = {
            "model": cfg["model"],
            "messages": messages,
            "stream": stream_enabled,
            "options": {
                "temperature": 0.7,
                "num_predict": cfg.get("max_tokens", 4096),
            },
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
                log.debug("RAW RESPONSE BODY (first 1500 chars): %s",
                          resp.text[:1500] if not stream_enabled else "[STREAMING]")

            resp.raise_for_status()

            if stream_enabled:
                content_parts = []
                for chunk in _stream_response(resp, cfg.get("debug_ai", False), on_chunk=on_chunk,
                                               cancel_event=cancel_event):
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
                    full_content = choices[0].get("message", {}).get("content", "").strip()

            if not full_content:
                raise ValueError("Empty response from API")

            wc = len(full_content.split())
            log.debug("Received %d words", wc)
            if cfg.get("debug_ai"):
                log.debug("FULL RESPONSE (truncated): %s...", full_content[:1500])

            return full_content

        except requests.exceptions.Timeout:
            wait = backoff ** attempt
            log.warning("Timeout (attempt %d). Retry in %ds", attempt, wait)
            _sleep_cancellable(wait, cancel_event)
        except requests.exceptions.ConnectionError as e:
            wait = backoff ** attempt
            log.error("Connection error (attempt %d): %s. Retry in %ds", attempt, e, wait)
            _sleep_cancellable(wait, cancel_event)
        except requests.exceptions.HTTPError as e:
            status_code = e.response.status_code if e.response else "?"
            log.error("HTTP %s (attempt %d): %s", status_code, attempt, e)
            if e.response is not None and e.response.text:
                log.debug("Response body: %s", e.response.text[:800])
            if attempt == max_retries:
                return None
            _sleep_cancellable(backoff ** attempt, cancel_event)
        except (json.JSONDecodeError, ValueError, KeyError) as e:
            log.error("Invalid response (attempt %d): %s", attempt, e)
            if attempt == max_retries:
                return None
            _sleep_cancellable(backoff ** attempt, cancel_event)
        except Exception as e:
            log.warning("API error (attempt %d): %s", attempt, e)
            if log.isEnabledFor(logging.DEBUG):
                log.exception("Exception details:")
            if attempt == max_retries:
                return None
            _sleep_cancellable(backoff ** attempt, cancel_event)

    return None


def _sleep_cancellable(seconds, cancel_event: Optional[threading.Event]):
    """Sleep in small increments so a cancel request is honored promptly."""
    if cancel_event is None:
        time.sleep(seconds)
        return
    end = time.time() + seconds
    while time.time() < end:
        if cancel_event.is_set():
            return
        time.sleep(min(0.1, end - time.time()))


def _json_or_text(value):
    text = _clean_text(value)
    if not text:
        return ""
    try:
        parsed = json.loads(text)
    except Exception:
        return text
    if isinstance(parsed, (list, dict)):
        return parsed
    return text


def build_product_context(record, cfg):
    image_urls = _parse_image_urls(record.get("image_urls"))
    campaign_url = record.get("campaign_url", "")
    product_url = record.get("url", "")
    product = {
        "product_id": record.get("product_id", ""),
        "title": record.get("title", ""),
        "brand": record.get("brand", ""),
        "category": record.get("category", ""),
        "price": record.get("price", ""),
        "old_price": record.get("old_price", ""),
        "url": product_url,
        "gtin": record.get("gtin", ""),
        "description": record.get("description", ""),
        "image_urls": image_urls,
        "product_active": record.get("product_active", ""),
    }
    campaign = {
        "campaign_id": record.get("campaign_id", ""),
        "campaign_name": record.get("campaign_name", ""),
        "campaign_url": campaign_url,
        "aff_code": record.get("aff_code", ""),
        "widget_name": record.get("widget_name", ""),
    }
    metadata = {
        "source_created_at": record.get("source_created_at", ""),
        "other_data": _json_or_text(record.get("other_data", "")),
    }
    return {
        "product": product,
        "campaign": campaign,
        "preferred_link": campaign_url or product_url,
        "secondary_link": product_url or campaign_url,
        "metadata": metadata,
    }


def build_product_prompt(record, cfg):
    context = build_product_context(record, cfg)
    product_context = json.dumps(context, indent=2, ensure_ascii=False)
    output_format = "Markdown" if cfg.get("content_format", "markdown") == "markdown" else "HTML"
    return cfg["user_prompt_template"].format(
        product_context=f"```json\n{product_context}\n```",
        output_format=output_format,
    )


def generate_product_content(record, cfg, session, on_chunk: Optional[Callable[[str], None]] = None,
                             cancel_event: Optional[threading.Event] = None):
    """Generate product content with fallback – returns best content even if below min_words."""
    title = record.get("title", "")
    user_prompt = build_product_prompt(record, cfg)
    current_prompt = user_prompt
    expand = False
    best_content = None
    best_word_count = 0

    for attempt in range(1, cfg["max_retries"] + 1):
        if cancel_event is not None and cancel_event.is_set():
            break
        identity = record.get("product_id") or record.get("gtin") or title
        log.info("Attempt %d/%d for '%s'...", attempt, cfg["max_retries"], str(identity)[:50])
        if cfg.get("debug_ai"):
            log.debug("PROMPT (attempt %d): %s", attempt, current_prompt[:500])

        content = call_ai(current_prompt, cfg, session, expand=expand, on_chunk=on_chunk,
                           cancel_event=cancel_event)
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


def generate_blog_post(title, body, cfg, session, on_chunk: Optional[Callable[[str], None]] = None,
                       cancel_event: Optional[threading.Event] = None):
    legacy_record = {"title": title, "description": body}
    return generate_product_content(legacy_record, cfg, session, on_chunk=on_chunk, cancel_event=cancel_event)


# ============================================================================
# RICH TUI – flicker-free, event-driven refresh, multi-job view
# ============================================================================
SPARK_CHARS = " ▁▂▃▄▅▆▇█"


def _sparkline(values, width=24):
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
    """
    Flicker-free design:
    * The Layout object (and its named sub-layouts) is built exactly once.
    * All state changes call `refresh()`, which mutates the *contents* of the
      existing layout sections in place (layout["x"].update(new_renderable)).
    * `Live` itself owns a single background thread that repaints the
      terminal at a fixed `refresh_per_second`. We never call `live.update()`
      or `live.refresh()` from multiple places, so there is exactly one
      writer to the terminal and no competing/overlapping redraws.
    """

    def __init__(self, total, stream_lines=180, refresh_per_second=10):
        self.total = total
        self.completed = 0
        self.failed = 0
        self.running = {}  # id -> job state dict
        self.lock = threading.RLock()
        self.console = Console()
        self._stop = False
        self.overall_start = time.time()
        self.stream_lines = stream_lines

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
        self.refresh()  # populate initial content before first paint

    # ---- layout skeleton (built once) -------------------------------------------------
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

    # ---- lifecycle ----------------------------------------------------------------------
    def start(self):
        self.live.start()

    def stop(self):
        self._stop = True
        self.live.stop()

    # ---- job state mutation (event-driven; each call triggers a targeted refresh) -------
    def start_record(self, record_id, title, product_id="", brand=""):
        with self.lock:
            self.running[record_id] = {
                "title": title,
                "product_id": product_id,
                "brand": brand,
                "start_time": time.time(),
                "word_count": 0,
                "token_count": 0,
                "content": "",
                "status": "starting",
                "history": [],
            }
            self.current_record_id = getattr(self, "current_record_id", None) or record_id
        self.refresh()

    def update_stream(self, record_id, chunk):
        with self.lock:
            rec = self.running.get(record_id)
            if not rec:
                return
            rec["content"] += chunk
            words = len(rec["content"].split())
            rec["word_count"] = words
            rec["token_count"] = int(words * 1.35)
            rec["status"] = "streaming"
            elapsed = max(time.time() - rec["start_time"], 0.001)
            rec["history"].append(rec["token_count"] / elapsed)
            if not hasattr(self, "current_record_id") or self.current_record_id not in self.running:
                self.current_record_id = record_id
        self.refresh()

    def set_content(self, record_id, content):
        with self.lock:
            rec = self.running.get(record_id)
            if not rec:
                return
            rec["content"] = content
            words = len(content.split())
            rec["word_count"] = words
            rec["token_count"] = int(words * 1.35)
            rec["status"] = "completed" if words > 0 else "failed"
        self.refresh()

    def set_error(self, record_id, error_msg):
        with self.lock:
            rec = self.running.get(record_id)
            if not rec:
                return
            rec["status"] = f"error: {error_msg[:60]}"
        self.refresh()

    def finish_record(self, record_id, success):
        with self.lock:
            self.running.pop(record_id, None)
            if success:
                self.completed += 1
            else:
                self.failed += 1
            if getattr(self, "current_record_id", None) == record_id:
                self.current_record_id = next(iter(self.running.keys()), None)
        self.refresh()

    def focus(self, record_id):
        """Explicitly switch which job the content pane shows."""
        with self.lock:
            if record_id in self.running:
                self.current_record_id = record_id
        self.refresh()

    # ---- rendering (mutates existing layout sections; never rebuilds the tree) ----------
    def refresh(self):
        with self.lock:
            self._render_header()
            self._render_progress()
            self._render_jobs()
            self._render_content()

    def _render_header(self):
        header_text = Text("Product Content Generator • Live Streaming", style="bold blue", justify="center")
        self.layout["header"].update(Panel(header_text, style="white", box=box.ROUNDED))

    def _render_progress(self):
        done = self.completed + self.failed
        pct = (done / self.total * 100) if self.total else 0
        elapsed = time.time() - self.overall_start
        speed = done / max(elapsed, 1) * 60  # posts/min
        eta = (self.total - done) / max(speed / 60, 0.001) if done > 0 else 0

        prog_table = Table(show_header=False, box=None, padding=(0, 1), expand=True)
        prog_table.add_column(justify="left", width=14)
        prog_table.add_column(justify="right")
        prog_table.add_column(justify="left", width=14)
        prog_table.add_column(justify="right")
        prog_table.add_row(
            "Total", str(self.total), "Active", str(len(self.running)),
        )
        prog_table.add_row(
            "Completed", f"[green]{self.completed} ✅[/green]",
            "Failed", f"[red]{self.failed} ❌[/red]",
        )
        prog_table.add_row(
            "Elapsed", f"{elapsed:.0f}s",
            "Speed", f"{speed:.2f} posts/min",
        )
        prog_table.add_row(
            "Progress", f"{pct:.1f}%",
            "ETA", f"{eta/60:.1f} min" if eta > 60 else f"{eta:.0f}s",
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
        self.layout["progress"].update(Panel(group, title="Progress", border_style="green", box=box.ROUNDED))

    def _render_jobs(self):
        table = Table(box=box.SIMPLE, expand=True, show_lines=False)
        table.add_column("Job", ratio=3, overflow="ellipsis")
        table.add_column("Product ID", ratio=2, overflow="ellipsis")
        table.add_column("Brand", ratio=2, overflow="ellipsis")
        table.add_column("Status", ratio=2)
        table.add_column("Words", ratio=1, justify="right")
        table.add_column("Tok/s", ratio=2)

        if not self.running:
            table.add_row("[dim]No active generation[/dim]", "", "", "", "", "")
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
                marker = "➤ " if rid == getattr(self, "current_record_id", None) else "  "
                spark = _sparkline(rec["history"], width=12)
                table.add_row(
                    f"{marker}{rec['title'][:40]}",
                    (rec.get("product_id") or "")[:28],
                    (rec.get("brand") or "")[:28],
                    f"[{style}]{status}[/{style}]",
                    str(rec["word_count"]),
                    f"{tps:5.1f} {spark}",
                )
        self.layout["jobs"].update(Panel(table, title="Active Jobs", border_style="cyan", box=box.ROUNDED))

    def _render_content(self):
        rid = getattr(self, "current_record_id", None)
        rec = self.running.get(rid) if rid is not None else None
        if not rec:
            content = "Waiting for the next job..."
        else:
            content = rec["content"] or "Waiting for first tokens..."
            if rec["status"].startswith("error"):
                content = f"❌ {rec['status']}\n\n{content}"
        lines = content.splitlines() or [content]
        max_lines = self.stream_lines
        if len(lines) > max_lines:
            content = "... [truncated to last %d lines]\n\n" % max_lines + "\n".join(lines[-max_lines:])

        title = f"Live Output — {rec['title'][:50]}" if rec else "Live Output"
        self.layout["content"].update(
            Panel(Text(content, style="white"), title=title, border_style="yellow", box=box.ROUNDED,
                  padding=(1, 2))
        )


# ============================================================================
# WORKER
# ============================================================================
_shutdown_event = threading.Event()


def _signal_handler(signum, frame):
    if _shutdown_event.is_set():
        log.warning("Forced exit.")
        sys.exit(1)
    _shutdown_event.set()
    log.warning("Shutdown requested. Finishing current record(s)... (Ctrl+C again to force)")


def _worker(cfg, record, tui, session, stream_file=None, quiet=False):
    rec_id = record["id"]
    title = record["title"]
    product_id = record.get("product_id", "")
    brand = record.get("brand", "")
    retries = record["retries"] + 1
    db_path = cfg["db_file"]

    if tui:
        tui.start_record(rec_id, title, product_id=product_id, brand=brand)
    elif not quiet:
        identity = product_id or record.get("gtin") or title
        log.info("Processing: %s", str(identity)[:60])

    log.debug("Worker: starting record %d", rec_id)

    conn = get_db_connection(db_path)
    conn.execute("UPDATE blog_posts SET status='processing', retries=?, updated_at=? WHERE id=?",
                 (retries, datetime.now().isoformat(), rec_id))
    conn.commit()
    conn.close()

    stream_output = None
    if stream_file:
        mode = "a" if os.path.exists(stream_file) else "w"
        stream_output = open(stream_file, mode, encoding="utf-8")

    def on_chunk(chunk):
        if tui:
            tui.update_stream(rec_id, chunk)
        if not quiet and not tui:
            sys.stdout.write(chunk)
            sys.stdout.flush()
        if stream_output:
            stream_output.write(chunk)
            stream_output.flush()

    generated_content = generate_product_content(
        record, cfg, session,
        on_chunk=on_chunk if cfg.get("stream") else None,
        cancel_event=_shutdown_event,
    )

    if stream_output:
        stream_output.close()

    success = generated_content is not None
    if success:
        wc = len(generated_content.split())
        update_record_status(db_path, rec_id, "completed", blog_post=generated_content,
                              generated_content=generated_content, word_count=wc, error_message=None)
        if tui:
            tui.set_content(rec_id, generated_content)
            log.info("✅ Completed %s (%d words)", title[:60], wc)
        else:
            if not quiet:
                log.info("✅ Completed %s (%d words)", title[:60], wc)
            if not cfg.get("stream") and not quiet:
                print("\n--- FINAL CONTENT ---\n")
                print(generated_content)
                print("\n---\n")
    else:
        error_msg = "Cancelled" if _shutdown_event.is_set() else "Failed after retries"
        update_record_status(db_path, rec_id, "failed", error_message=error_msg)
        if tui:
            tui.set_error(rec_id, error_msg)
            log.error("❌ Failed %s (%s)", title[:60], error_msg)
        else:
            if not quiet:
                log.error("❌ Failed %s (%s)", title[:60], error_msg)

    if tui:
        tui.finish_record(rec_id, success)
    return success


def process_records(cfg, limit=None, force=False):
    signal.signal(signal.SIGINT, _signal_handler)
    _shutdown_event.clear()

    if force:
        conn = get_db_connection(cfg["db_file"])
        conn.execute("UPDATE blog_posts SET status='pending', generated_content=NULL, blog_post=NULL, retries=0, "
                     "word_count=0, error_message=NULL")
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
        log.info("Streaming enabled with concurrency=%d — the TUI will show all active jobs.", concurrency)

    use_tui = not cfg.get("no_tui", False)
    stream_lines = cfg.get("stream_lines", 180)
    stream_file = cfg.get("stream_to_file")
    quiet = cfg.get("quiet", False)
    session = build_session(cfg)

    tui = None
    if use_tui:
        try:
            tui = RichTUI(total, stream_lines=stream_lines,
                          refresh_per_second=cfg.get("tui_refresh_per_second", 10))
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
                f = pool.submit(_worker, cfg, rec, tui, session, stream_file, quiet)
                futures.append((f, rec["id"]))

            for f, rid in futures:
                try:
                    f.result()
                except Exception as e:
                    log.error("Worker for record %d crashed: %s", rid, e)
                    if log.isEnabledFor(logging.DEBUG):
                        log.exception("Details:")
                    update_record_status(cfg["db_file"], rid, "failed", error_message=str(e))
                    if tui:
                        tui.set_error(rid, str(e))
                        tui.finish_record(rid, success=False)
    finally:
        if tui:
            tui.stop()
        session.close()

    log.info("Processing finished.")


# ============================================================================
# EXPORT, STATS, OTHER COMMANDS
# ============================================================================
def export_posts(db_path, export_dir, status="completed", fmt="md"):
    export_path = Path(export_dir)
    export_path.mkdir(parents=True, exist_ok=True)
    records = get_records(db_path, status_filter=status)
    exported = 0
    for rec in records:
        content = rec.get("generated_content") or rec.get("blog_post")
        if not content:
            continue
        title = rec.get("title", "")
        wc = rec.get("word_count", len(content.split()))
        rec_id = rec["id"]
        safe_name = "".join(c if c.isalnum() or c in " _-" else "_" for c in title)
        safe_name = safe_name.strip().replace(" ", "_")[:80] or f"product_{rec_id}"
        product_payload = {
            "product_id": rec.get("product_id", ""),
            "title": title,
            "brand": rec.get("brand", ""),
            "price": rec.get("price", ""),
            "old_price": rec.get("old_price", ""),
            "url": rec.get("url", ""),
            "gtin": rec.get("gtin", ""),
            "category": rec.get("category", ""),
            "description": rec.get("description", ""),
            "image_urls": _parse_image_urls(rec.get("image_urls")),
        }
        campaign_payload = {
            "campaign_id": rec.get("campaign_id", ""),
            "campaign_name": rec.get("campaign_name", ""),
            "campaign_url": rec.get("campaign_url", ""),
            "aff_code": rec.get("aff_code", ""),
        }
        payload = {
            "product": product_payload,
            "campaign": campaign_payload,
            "content": content,
            "status": rec.get("status", status),
            "generated_at": rec.get("updated_at", datetime.now().isoformat()),
            "word_count": wc,
            "metadata": {
                "source_created_at": rec.get("source_created_at", ""),
                "product_active": rec.get("product_active", ""),
                "widget_name": rec.get("widget_name", ""),
                "other_data": _json_or_text(rec.get("other_data", "")),
            },
        }

        if fmt == "json":
            filepath = export_path / f"{rec_id:04d}_{safe_name}.json"
            filepath.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
        else:
            filepath = export_path / f"{rec_id:04d}_{safe_name}.md"
            frontmatter = {
                "id": rec_id,
                "product_id": rec.get("product_id", ""),
                "title": title,
                "brand": rec.get("brand", ""),
                "category": rec.get("category", ""),
                "price": rec.get("price", ""),
                "old_price": rec.get("old_price", ""),
                "url": rec.get("url", ""),
                "gtin": rec.get("gtin", ""),
                "campaign_id": rec.get("campaign_id", ""),
                "campaign_name": rec.get("campaign_name", ""),
                "campaign_url": rec.get("campaign_url", ""),
                "aff_code": rec.get("aff_code", ""),
                "word_count": wc,
                "generated_at": rec.get("updated_at", datetime.now().isoformat()),
            }
            frontmatter_text = "---\n" + "\n".join(f"{key}: {json.dumps(value, ensure_ascii=False)}" for key, value in frontmatter.items()) + "\n---\n\n"
            filepath.write_text(frontmatter_text + content, encoding="utf-8")

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
    log.info("📊 Product Job Statistics")
    log.info(" Total: %d", total)
    for s in ("pending", "processing", "completed", "failed"):
        log.info(" %s: %d", s.capitalize(), status_counts.get(s, 0))
    if completed:
        log.info(" Completed products: avg=%.0f, min=%d, max=%d", avg, mn, mx)


def cmd_list(db_path, status):
    records = get_records(db_path, status_filter=status if status != "all" else None)
    if not records:
        log.info("No records found with status '%s'.", status)
        return
    log.info("Records (status=%s):", status)
    log.info(" %-4s %-10s %-18s %-18s %-16s %-10s %s",
             "ID", "Status", "Product ID", "Brand", "Category", "Price", "Title")
    log.info(" %s", "-" * 120)
    for rec in records:
        log.info(
            " %-4d %-10s %-18s %-18s %-16s %-10s %s",
            rec["id"],
            rec["status"],
            (rec.get("product_id") or rec.get("gtin") or rec.get("product_key") or "")[:18],
            (rec.get("brand") or "")[:18],
            (rec.get("category") or "")[:16],
            (rec.get("price") or "")[:10],
            (rec.get("title") or "")[:70],
        )


def cmd_show(db_path, record_id):
    conn = get_db_connection(db_path)
    row = conn.execute("SELECT * FROM blog_posts WHERE id=?", (record_id,)).fetchone()
    conn.close()
    if not row:
        log.error("Record %d not found.", record_id)
        return
    rec = dict(row)
    log.info("ID: %d", rec["id"])
    log.info("Product title: %s", rec["title"])
    log.info("Product ID: %s", rec.get("product_id") or "")
    log.info("GTIN: %s", rec.get("gtin") or "")
    log.info("Brand: %s", rec.get("brand") or "")
    log.info("Category: %s", rec.get("category") or "")
    log.info("Price: %s", rec.get("price") or "")
    log.info("Old price: %s", rec.get("old_price") or "")
    log.info("URL: %s", rec.get("url") or "")
    log.info("Campaign: %s", rec.get("campaign_name") or "")
    log.info("Campaign URL: %s", rec.get("campaign_url") or "")
    log.info("Affiliate code: %s", rec.get("aff_code") or "")
    log.info("Status: %s", rec["status"])
    log.info("Retries: %d", rec["retries"])
    log.info("Word count: %d", rec.get("word_count", 0))
    log.info("Created: %s", rec["created_at"])
    log.info("Updated: %s", rec["updated_at"])
    if rec.get("error_message"):
        log.info("Error: %s", rec["error_message"])
    log.info("\n--- Product Description ---\n%s", rec.get("description") or "")
    if rec.get("image_urls"):
        log.info("Image URLs: %s", rec["image_urls"])
    if rec.get("other_data"):
        log.info("Other data: %s", rec["other_data"])
    content = rec.get("generated_content") or rec.get("blog_post")
    if content:
        log.info("\n--- Generated Product Content ---\n%s", content)


def test_connection(cfg):
    session = build_session(cfg)
    headers = {"Content-Type": "application/json"}
    if cfg.get("api_key"):
        headers["Authorization"] = f"Bearer {cfg['api_key']}"
    payload = {"model": cfg["model"], "messages": [{"role": "user", "content": "Reply with OK"}],
               "max_tokens": 10, "stream": False}
    try:
        resp = session.post(cfg["api_endpoint"], headers=headers, json=payload, timeout=30)
        resp.raise_for_status()
        log.info("✅ Connection successful.")
        return True
    except Exception as e:
        log.error("❌ Connection failed: %s", e)
        return False
    finally:
        session.close()


# ============================================================================
# MAIN
# ============================================================================
def parse_args():
    parser = ArgumentParser(description="Product content generator with AI and TUI.")
    parser.add_argument("csv", nargs="?", help="CSV file to import (product feed or legacy Title/Body)")
    parser.add_argument("--db", help="SQLite database file")
    parser.add_argument("--config", help="JSON config file")
    parser.add_argument("--init-config", metavar="FILE", help="Write a starter JSON config file and exit")
    parser.add_argument("--limit", type=int, help="Max records to process")
    parser.add_argument("--force", action="store_true", help="Reset all to pending")
    parser.add_argument("--stats", action="store_true", help="Show statistics")
    parser.add_argument("--list", nargs="?", const="pending", help="List records by status")
    parser.add_argument("--show", type=int, help="Show record by ID")
    parser.add_argument("--export", action="store_true", help="Export completed product content")
    parser.add_argument("--export-dir", help="Export directory")
    parser.add_argument("--export-format", choices=["md", "json"], help="Export format")
    parser.add_argument("--test", action="store_true", help="Test AI connection")
    parser.add_argument("--dry-run", action="store_true", help="Preview what would be imported/processed")
    parser.add_argument("--retry-failed", action="store_true", help="Reset failed to pending")
    parser.add_argument("--delete", nargs="?", const="all", help="Delete records by status")
    parser.add_argument("--log-file", help="Log file path")
    parser.add_argument("--verbose", action="store_true", help="Enable debug logging")
    parser.add_argument("-P", "--parallel", type=int, dest="concurrency", help="Number of parallel workers")
    parser.add_argument("--debug-ai", action="store_true", help="Log full AI payloads and raw responses")
    parser.add_argument("--timeout", type=int, help="Request timeout in seconds")
    parser.add_argument("--pending", action="store_true", help="Show pending count")
    parser.add_argument("--stream", action="store_true", help="Enable streaming and show live content in TUI")
    parser.add_argument("--no-tui", action="store_true", help="Disable TUI and print streaming content to stdout")
    parser.add_argument("--stream-to-file", metavar="FILE", help="Write streaming chunks to this file in real time")
    parser.add_argument("--stream-lines", type=int, help="Number of lines to show in TUI streaming panel")
    parser.add_argument("--tui-fps", type=int, dest="tui_refresh_per_second",
                        help="TUI redraw rate (refreshes/sec). Lower this if you still see flicker "
                             "on a slow terminal/SSH link (default 10).")
    parser.add_argument("--quiet", action="store_true", help="Suppress progress output when --no-tui is used")
    return parser.parse_args()


def main():
    args = parse_args()

    if args.init_config:
        setup_logging(verbose=False)
        write_starter_config(args.init_config)
        return

    cfg = load_config(args.config)

    if args.db:
        cfg["db_file"] = args.db
    if args.export_dir:
        cfg["export_dir"] = args.export_dir
    if args.export_format:
        cfg["export_format"] = args.export_format
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
    if args.stream_to_file:
        cfg["stream_to_file"] = args.stream_to_file
    if args.stream_lines:
        cfg["stream_lines"] = args.stream_lines
    if args.tui_refresh_per_second:
        cfg["tui_refresh_per_second"] = args.tui_refresh_per_second
    if args.quiet:
        cfg["quiet"] = True

    validate_config(cfg)
    setup_logging(verbose=args.verbose or cfg.get("debug_ai"), log_file=cfg.get("log_file"))

    db_path = cfg["db_file"]
    init_db(db_path)

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
        exported = export_posts(db_path, cfg["export_dir"], fmt=cfg.get("export_format", "md"))
        log.info("Exported %d product records to %s/", exported, cfg["export_dir"])
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
        count = conn.execute(
            "SELECT COUNT(*) FROM blog_posts WHERE status IN ('pending','failed') AND retries < ?",
            (cfg["max_retries"],),
        ).fetchone()[0]
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
                fieldnames = reader.fieldnames or []
                mode = "product" if set(PRODUCT_CSV_COLUMNS).issubset(fieldnames) else (
                    "legacy" if set(LEGACY_CSV_COLUMNS).issubset(fieldnames) else "unknown"
                )
                log.info("CSV: %s (%d rows, mode=%s)", args.csv, len(rows), mode)
                log.info(" %-4s %-18s %-18s %-16s %-10s %s", "Row", "Product ID", "Brand", "Category", "Price", "Title")
                log.info(" %s", "-" * 100)
                for idx, row in enumerate(rows[:5], start=1):
                    title = row.get("title") or row.get("Title") or ""
                    product_id = row.get("product_id") or ""
                    brand = row.get("brand") or ""
                    category = row.get("category") or ""
                    price = row.get("price") or ""
                    log.info(
                        " %-4d %-18s %-18s %-16s %-10s %s",
                        idx,
                        product_id[:18],
                        brand[:18],
                        category[:16],
                        price[:10],
                        title[:70],
                    )
            except Exception as e:
                log.error("Error reading CSV: %s", e)
                return
        pending = get_records(db_path, status_filter="pending", max_retries=cfg["max_retries"])
        log.info("Would process %d records.", len(pending))
        return

    if args.csv:
        try:
            inserted, updated = import_csv_to_db(args.csv, db_path)
            log.info("Imported %d new records and updated %d existing records.", inserted, updated)
        except Exception as e:
            log.error("Import failed: %s", e)
            return

    process_records(cfg, limit=args.limit, force=args.force)
    show_stats(db_path)


if __name__ == "__main__":
    main()
