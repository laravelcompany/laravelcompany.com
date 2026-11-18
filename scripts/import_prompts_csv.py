#!/usr/bin/env python3
"""Import root prompts.csv without replacing curated entries. Run with zero flags."""
import csv
import hashlib
import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def identity(act, prompt):
    return (act.strip().casefold(), ' '.join(prompt.split()))


def import_csv(root=ROOT):
    folder = root / 'src/content/prompts'
    existing = {}
    for path in sorted(folder.glob('*.json')):
        data = json.loads(path.read_text())
        existing[identity(data['act'], data['prompt'])] = path.stem
    csv.field_size_limit(20_000_000)
    added = 0
    with (root / 'prompts.csv').open(encoding='utf-8-sig', newline='') as source:
        reader = csv.DictReader(source)
        if not {'act', 'prompt', 'for_devs', 'type', 'contributor'}.issubset(reader.fieldnames or []):
            raise ValueError('prompts.csv is missing required columns')
        rows = list(reader)
    # Validate the entire file before writing anything.
    for number, row in enumerate(rows, 2):
        if not row.get('act', '').strip() or not row.get('prompt', '').strip() or None in row:
            raise ValueError(f'Invalid CSV row {number}')
    for row in rows:
        key = identity(row['act'], row['prompt'])
        if key in existing:
            continue
        slug = unicodedata.normalize('NFKD', row['act']).encode('ascii', 'ignore').decode().lower()
        slug = re.sub('[^a-z0-9]+', '-', slug).strip('-')[:65] or 'prompt'
        digest = hashlib.sha256(json.dumps(key, ensure_ascii=False).encode()).hexdigest()[:16]
        stem = f'csv-{slug}-{digest}'
        data = dict(act=row['act'].strip(), prompt=row['prompt'], improvedPrompt=row['prompt'],
                    forDevs=row['for_devs'].strip().lower() in ('true', '1', 'yes'),
                    type=row['type'].strip() or 'TEXT', contributor=row['contributor'].strip(),
                    sourceFile='prompts.csv')
        (folder / f'{stem}.json').write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
        existing[key] = stem
        added += 1
    print(f'CSV: {len(rows)} rows covered, {added} added, {len(list(folder.glob("*.json")))} total prompts')
    return len(rows), added


if __name__ == '__main__':
    import_csv()
