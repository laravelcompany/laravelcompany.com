#!/usr/bin/env python3
"""
CSV to JSON converter for Astro projects.
Converts a CSV with columns: act, prompt, for_devs, type, contributor
to a JSON array of objects with proper boolean conversion.
"""

import csv
import json
import argparse
import sys
from pathlib import Path

csv.field_size_limit(sys.maxsize)


def convert_csv_to_json(input_path: Path, output_path: Path) -> None:
    data = []
    try:
        with open(input_path, "r", encoding="utf-8") as f:
            reader = csv.reader(f)
            header = next(reader, None)
            if header is None:
                raise ValueError("Empty CSV file")
            expected = ["act", "prompt", "for_devs", "type", "contributor"]
            if header != expected:
                if len(header) < 5:
                    raise ValueError(
                        f"CSV must have at least 5 columns. Found {len(header)}"
                    )
                print(
                    f"Warning: Header columns {header} do not exactly match expected {expected}. Using first 5 columns in order.",
                    file=sys.stderr,
                )

            for row_num, row in enumerate(reader, start=2):
                if not row:
                    continue
                if len(row) < 5:
                    print(
                        f"Warning: Row {row_num} has {len(row)} columns, expected 5. Skipping row.",
                        file=sys.stderr,
                    )
                    continue
                act, prompt, for_devs_str, type_str, contributor = (
                    row[0],
                    row[1],
                    row[2],
                    row[3],
                    row[4],
                )
                if for_devs_str.upper() == "TRUE":
                    for_devs = True
                elif for_devs_str.upper() == "FALSE":
                    for_devs = False
                else:
                    print(
                        f"Warning: Row {row_num} has invalid for_devs value '{for_devs_str}'. Treating as False.",
                        file=sys.stderr,
                    )
                    for_devs = False

                data.append(
                    {
                        "act": act.strip(),
                        "prompt": prompt,
                        "for_devs": for_devs,
                        "type": type_str.strip(),
                        "contributor": contributor.strip(),
                    }
                )

    except FileNotFoundError:
        print(f"Error: File '{input_path}' not found.", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error processing CSV: {e}", file=sys.stderr)
        sys.exit(1)

    try:
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Successfully converted {input_path} to {output_path}")
    except Exception as e:
        print(f"Error writing JSON: {e}", file=sys.stderr)
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="Convert CSV to JSON for Astro project."
    )
    parser.add_argument("input", help="Path to input CSV file")
    parser.add_argument(
        "-o",
        "--output",
        help="Path to output JSON file (default: input filename with .json extension)",
    )
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Error: Input file '{input_path}' does not exist.", file=sys.stderr)
        sys.exit(1)

    if args.output:
        output_path = Path(args.output)
    else:
        output_path = input_path.with_suffix(".json")

    convert_csv_to_json(input_path, output_path)


if __name__ == "__main__":
    main()
