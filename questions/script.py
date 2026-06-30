#!/usr/bin/env python3
"""
Generate blog posts from CSV questions using an Ollama‑compatible endpoint.
Uses SQLite for persistent storage and resume capability.
Enforces a minimum word count (1000) and retries with backoff.
"""

import csv
import os
import sqlite3
import sys
import time
from argparse import ArgumentParser, Namespace
from datetime import datetime
from typing import Optional, List, Dict, Any

import requests

# ============================================================================
# CONFIGURATION (adjust via environment variables or edit below)
# ============================================================================
# Endpoint – change if the URL is different
API_ENDPOINT = os.environ.get("AI_ENDPOINT", "https://ai.izdrail.com/v1/chat/completions")
MODEL = os.environ.get("AI_MODEL", "gemma4:12b")

# No API key – Ollama typically does not require one.
# If authentication is needed, set AI_API_KEY in environment.
API_KEY = os.environ.get("AI_API_KEY", "")

# Timeout and retry settings
REQUEST_TIMEOUT = int(os.environ.get("REQUEST_TIMEOUT", 300))   # seconds
MAX_RETRIES = 3
BACKOFF_FACTOR = 2   # seconds to wait between retries (exponential)

MIN_WORDS = 1000     # minimum word count per blog post
REQUEST_DELAY = 2.0  # seconds between different records (rate limiting)

# System prompt – instructs the AI to act as a developer blogger
SYSTEM_PROMPT = (
    "You are a senior developer and technical blogger. "
    "Your answers are accurate, practical, and well-explained. "
    "Always include natural backlinks to https://laravelcompany.com where relevant. "
    "Your blog posts must be at least 1000 words long."
)

# Base user prompt – will be extended if the response is too short
USER_PROMPT_TEMPLATE = (
    "Write a comprehensive blog post that answers the following question.\n\n"
    "Title: {title}\n"
    "Body: {body}\n\n"
    "The blog post should:\n"
    "- Provide a correct and thorough answer from a developer's perspective.\n"
    "- Include relevant code examples or best practices.\n"
    "- Naturally incorporate backlinks to https://laravelcompany.com in the content.\n"
    "- Be well-structured with headings, paragraphs, and a clear conclusion.\n"
    "- Be at least 1000 words long."
)

EXPAND_PROMPT = (
    "\n\nThe previous response was too short. Please expand it to at least 1000 words "
    "by adding more details, examples, and deeper explanations, while keeping the same "
    "high quality and structure."
)

# ============================================================================
# DATABASE HELPERS
# ============================================================================
DB_FILE = "blog_posts.db"

def get_db_connection():
    """Return a connection to the SQLite database."""
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Create the table if it doesn't exist."""
    conn = get_db_connection()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS blog_posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            body TEXT NOT NULL,
            blog_post TEXT,
            status TEXT DEFAULT 'pending',  -- pending, processing, completed, failed
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            retries INTEGER DEFAULT 0,
            UNIQUE(title)
        )
    """)
    conn.commit()
    conn.close()

def import_csv_to_db(csv_file: str) -> int:
    """
    Read CSV and insert new records into the database (skip duplicates by title).
    Returns number of new records inserted.
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    inserted = 0

    with open(csv_file, "r", newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        # validate columns
        if not {"Title", "Body"}.issubset(reader.fieldnames):
            raise ValueError("CSV must have 'Title' and 'Body' columns.")

        for row in reader:
            title = row["Title"].strip()
            body = row["Body"].strip()
            if not title or not body:
                continue

            # Check if title already exists
            cursor.execute("SELECT id FROM blog_posts WHERE title = ?", (title,))
            if cursor.fetchone() is not None:
                continue

            cursor.execute(
                "INSERT INTO blog_posts (title, body, status) VALUES (?, ?, ?)",
                (title, body, "pending")
            )
            inserted += 1

    conn.commit()
    conn.close()
    return inserted

def get_pending_records(limit: Optional[int] = None) -> List[Dict[str, Any]]:
    """Fetch records with status 'pending' or 'failed' (retries < MAX_RETRIES)."""
    conn = get_db_connection()
    query = """
        SELECT id, title, body, retries
        FROM blog_posts
        WHERE status IN ('pending', 'failed') AND retries < ?
        ORDER BY id
    """
    if limit is not None:
        query += f" LIMIT {limit}"
    cursor = conn.execute(query, (MAX_RETRIES,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def update_record_status(record_id: int, status: str, blog_post: Optional[str] = None, retries: Optional[int] = None):
    """Update status, blog_post, retries, and updated_at."""
    conn = get_db_connection()
    cursor = conn.cursor()
    updates = []
    params = []

    if status:
        updates.append("status = ?")
        params.append(status)
    if blog_post is not None:
        updates.append("blog_post = ?")
        params.append(blog_post)
    if retries is not None:
        updates.append("retries = ?")
        params.append(retries)

    updates.append("updated_at = ?")
    params.append(datetime.now().isoformat())
    params.append(record_id)

    sql = f"UPDATE blog_posts SET {', '.join(updates)} WHERE id = ?"
    cursor.execute(sql, params)
    conn.commit()
    conn.close()

# ============================================================================
# AI CALL WITH RETRY AND BACKOFF
# ============================================================================
def call_ai(prompt: str, expand: bool = False) -> Optional[str]:
    """
    Send a request to the AI endpoint using Ollama (no API key by default).
    Retries with exponential backoff on timeouts or errors.
    """
    headers = {"Content-Type": "application/json"}
    if API_KEY:
        headers["Authorization"] = f"Bearer {API_KEY}"

    system_msg = SYSTEM_PROMPT
    if expand:
        system_msg += " The response must be at least 1000 words. If you have already written a shorter version, expand it now."

    messages = [
        {"role": "system", "content": system_msg},
        {"role": "user", "content": prompt},
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 3000,   # allow longer responses
        "stream": False,
    }

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            response = requests.post(
                API_ENDPOINT,
                headers=headers,
                json=payload,
                timeout=REQUEST_TIMEOUT
            )
            response.raise_for_status()
            data = response.json()

            # Handle both OpenAI‑compatible and Ollama‑native responses
            if "choices" in data:
                content = data["choices"][0]["message"]["content"].strip()
            elif "response" in data:   # Ollama's raw endpoint sometimes uses this
                content = data["response"].strip()
            else:
                raise ValueError("Unexpected response format")

            return content

        except requests.exceptions.Timeout:
            wait = BACKOFF_FACTOR ** attempt
            print(f"    Timeout (attempt {attempt}). Retrying in {wait}s...")
            time.sleep(wait)
        except Exception as e:
            wait = BACKOFF_FACTOR ** attempt
            print(f"    API error (attempt {attempt}): {e}. Retrying in {wait}s...")
            time.sleep(wait)

    return None

def generate_blog_post(title: str, body: str) -> Optional[str]:
    """
    Generate a blog post with at least MIN_WORDS words.
    Retries up to MAX_RETRIES times, each time asking to expand if too short.
    Returns the final post or None if failed.
    """
    user_prompt = USER_PROMPT_TEMPLATE.format(title=title, body=body)
    current_prompt = user_prompt
    expand = False

    for attempt in range(1, MAX_RETRIES + 1):
        print(f"    Attempt {attempt}/{MAX_RETRIES}...")
        content = call_ai(current_prompt, expand=expand)

        if content is None:
            print("    API call failed.")
            continue

        word_count = len(content.split())
        print(f"    Generated {word_count} words.")

        if word_count >= MIN_WORDS:
            return content

        # Too short – prepare for next attempt with expansion instruction
        print(f"    Too short ({word_count} < {MIN_WORDS}). Asking for expansion.")
        current_prompt = user_prompt + EXPAND_PROMPT
        expand = True

    print(f"    Failed to produce {MIN_WORDS} words after {MAX_RETRIES} attempts.")
    return None

# ============================================================================
# MAIN PROCESSING
# ============================================================================
def process_records(limit: Optional[int] = None, force: bool = False) -> None:
    """
    Fetch pending records, generate blog posts, update database.
    If force=True, reset all records to pending (reprocess everything).
    """
    if force:
        conn = get_db_connection()
        conn.execute("UPDATE blog_posts SET status = 'pending', blog_post = NULL, retries = 0, updated_at = CURRENT_TIMESTAMP")
        conn.commit()
        conn.close()
        print("All records reset to pending.")

    records = get_pending_records(limit)
    if not records:
        print("No pending records to process.")
        return

    total = len(records)
    print(f"Processing {total} records...")

    for idx, rec in enumerate(records, start=1):
        rec_id = rec["id"]
        title = rec["title"]
        body = rec["body"]
        retries = rec["retries"]

        print(f"\n[{idx}/{total}] Processing: {title[:60]}...")

        # Update status to processing and increment retries
        new_retries = retries + 1
        update_record_status(rec_id, status="processing", retries=new_retries)

        # Generate
        blog_post = generate_blog_post(title, body)

        if blog_post is None:
            update_record_status(rec_id, status="failed")
            print(f"  Failed after {new_retries} retries. Marked as failed.")
        else:
            final_word_count = len(blog_post.split())
            update_record_status(rec_id, status="completed", blog_post=blog_post)
            print(f"  Completed with {final_word_count} words.")

        # Rate limiting between records
        if idx < total:
            time.sleep(REQUEST_DELAY)

    print("\nProcessing finished.")

def show_stats() -> None:
    """Display a summary of records by status."""
    conn = get_db_connection()
    cursor = conn.execute("""
        SELECT status, COUNT(*) as count FROM blog_posts GROUP BY status
    """)
    rows = cursor.fetchall()
    conn.close()
    print("Database statistics:")
    for row in rows:
        print(f"  {row['status']}: {row['count']}")

# ============================================================================
# COMMAND-LINE INTERFACE
# ============================================================================
def parse_args() -> Namespace:
    parser = ArgumentParser(
        description="Generate blog posts from CSV questions using AI with database and resume support."
    )
    parser.add_argument("csv", nargs="?", help="CSV file to import (Title, Body columns).")
    parser.add_argument("--db", default=DB_FILE, help="SQLite database file (default: blog_posts.db)")
    parser.add_argument("--limit", type=int, help="Maximum number of records to process (for testing).")
    parser.add_argument("--force", action="store_true", help="Reset all records to pending and reprocess everything.")
    parser.add_argument("--stats", action="store_true", help="Show current database statistics and exit.")
    return parser.parse_args()

def main() -> None:
    args = parse_args()

    global DB_FILE
    DB_FILE = args.db

    # Initialize database
    init_db()

    if args.stats:
        show_stats()
        return

    # Import CSV if provided
    if args.csv:
        print(f"Importing {args.csv} into database...")
        inserted = import_csv_to_db(args.csv)
        print(f"Inserted {inserted} new records.")

    # Process pending records
    process_records(limit=args.limit, force=args.force)

    # Show final stats
    show_stats()

if __name__ == "__main__":
    main()
