# awesome-claude-code-toolkit (source of the `ctk-*` prompt entries)

- Upstream: https://github.com/rohitg00/awesome-claude-code-toolkit at commit ebdf1d596d2cde5c5cceb32177e8d1cf4829e7d9 (Copyright 2026 Rohit Ghumare, Apache License 2.0; copy of the license file in this folder). Every entry's sourceUrl points to its file at that commit.
- The user supplied https://github.com/LGD-Eval/awesome-claude-code-toolkit (commit 09e8a8ed688087a024dfcea207dfd60c48a6c0cc, 2026-10-28), a copy of the upstream toolkit. The imported folders are byte-identical to the upstream commit above.
- Imported: agents/, skills/, commands/, rules/, contexts/, templates/ markdown files, one entry each, `ctk-` prefix in src/content/prompts/.
- The `prompt` field holds the unmodified upstream file. `improvedPrompt` is the same text with YAML frontmatter removed, the description shown as a quote line, and raw angle-bracket words outside code escaped so they show as text. No other edits.
- Not imported: plugins/, hooks/, mcp-configs/, setup/ (scripts and config; nothing was run).
