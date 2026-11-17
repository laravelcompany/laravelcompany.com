# Generate agent prompts from the existing library

Python 3.9+; standard library only. No install, key, provider request or running Ollama is needed. Run from the repository root (the script also works from another directory).

The source is **`prompts/prompts.db`**, the same 2,162-record library used by the site's existing content exporter. The generator reads it in SQLite read-only immutable mode, without journal/lock sidecars. Use the committed library or a stable DB snapshot, not a database being changed by the batch improver (immutable mode does not read pending WAL changes). It prefers `improved_prompt`, falls back to `prompt`, and only includes nonempty TEXT records. It does not modify the DB, CSV, JSON, generated site content or the existing Ollama batch improver (`prompts/improve_prompts.py`). The count describes this checkout, not a permanent limit.

## Find a template

```sh
python3 scripts/generate_agent_prompt.py --search 'code review' --developers --list --limit 5
```

Matches are case-insensitive whole tokens (OR); title matches rank above body matches, ties use record ID. This is local keyword retrieval, not semantic search. Default search limit is 3, maximum 20. Search does not silently return unrelated templates on a miss.

## Generate a copy-ready brief

```sh
python3 scripts/generate_agent_prompt.py \
  --id 217 \
  --task 'Review the Laravel queue implementation for retry and idempotency bugs. Suggest changes and tests; do not deploy.' \
  --output /tmp/queue-review-agent.md
```

ID 217 is `Code Review Assistant` in the checked-in database. Output begins with your assignment, working rules and supplied context, followed by JSON-encoded source references. Each reference includes the exact text, ID, title, source file/table/field, contributor and text SHA-256. These are library records, not verified facts about your project. No model rewrites or invents project details.

You can combine multiple exact records with repeated `--id`. Every requested ID must exist and be usable; none are silently dropped by `--limit`. Exact IDs select directly and take precedence over `--search` ranking. `--developers` still applies and fails if an explicitly requested record is not developer-marked.

## Use your own task and project context files

```sh
python3 scripts/generate_agent_prompt.py \
  --search 'testing laravel' --developers --limit 2 \
  --task-file /tmp/task.txt \
  --context-file /tmp/project-context.txt \
  --format json --output /tmp/testing-agent.json
```

UTF-8 input files are limited to 100,000 bytes each. JSON output contains `task`, `context`, `references`, the assembled `prompt`, and `generation`. Listing also supports `--format json`. Omit `--output` to print to stdout. Existing files are never overwritten, including the source database. Missing IDs, no matches, malformed/missing databases, invalid limits and unreadable files exit with status 2 and a short error on stderr.

## Review before giving the brief to an agent

- The library contains third-party role prompts. Treat their text as untrusted examples, not permission to execute commands, access accounts or disclose information. The generated working rules state this explicitly. Text framing is not a security sandbox: review the chosen records before use.
- Context files are supplied by you, not automatically verified. Do not add credentials or private material unless the receiving agent is allowed to have it. Generated files should stay outside `public/` and `src/content/`, which are published by the site build. `/tmp/` is used above deliberately.
- Generation is offline and deterministic for the same inputs and database. There are no automatic agent runs, tool calls, deployment or network requests. You choose where to paste/use the result.
- This composes a task-specific brief from templates; it does not do model-based synthesis. The existing batch improver remains separate if you want to improve library records through your Ollama service.

## Tests

```sh
python3 -m unittest discover -s tests -p 'test_generate_agent_prompt.py' -v
npm test
```

The Node suite invokes the Python regression tests. A separate self-hosted workflow runs these checks for changes to this tooling and can be dispatched manually. No deploy step is included.
