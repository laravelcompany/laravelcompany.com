#!/usr/bin/env python3
"""Generate Astro content-collection JSON files for the Prompts section.

Reads improved prompts from prompts/prompts.db and writes one JSON file per
prompt into src/content/prompts/. Run from the repo root:

    python3 scripts/generate_prompts_content.py

The files are committed so the Astro build stays fully static; re-run this
script whenever prompts.db changes.
"""
import json
import re
import sqlite3
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DB_PATH = ROOT / "prompts" / "prompts.db"
OUT_DIR = ROOT / "src" / "content" / "prompts"


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return text[:80] or "prompt"


def main() -> None:
    conn = sqlite3.connect(DB_PATH)
    rows = conn.execute(
        """
        SELECT id, act, prompt, for_devs, type, contributor, improved_prompt,
               created_at
        FROM prompts
        WHERE improved_prompt IS NOT NULL AND TRIM(improved_prompt) != ''
        ORDER BY id
        """
    ).fetchall()
    conn.close()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for stale in OUT_DIR.glob("*.json"):
        # ctk-* entries come from prompts/third-party (awesome-claude-code-toolkit), not prompts.db
        if stale.name.startswith(("ctk-", "csv-")):
            continue
        stale.unlink()

    for row_id, act, prompt, for_devs, ptype, contributor, improved, created_at in rows:
        entry = {
            "act": act,
            "prompt": prompt,
            "improvedPrompt": improved,
            "forDevs": bool(for_devs),
            "type": ptype,
            "contributor": contributor,
            "date": (created_at or "")[:10],
        }
        path = OUT_DIR / f"{row_id}-{slugify(act)}.json"
        path.write_text(json.dumps(entry, ensure_ascii=False, indent=2) + "\n")

    print(f"Wrote {len(rows)} prompt entries to {OUT_DIR}")


if __name__ == "__main__":
    main()
