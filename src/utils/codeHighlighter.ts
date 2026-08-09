import { createHighlighter } from "shiki";

const THEME = "material-theme-palenight";

const LANGS = [
  "php",
  "blade",
  "shell",
  "bash",
  "sql",
  "javascript",
  "typescript",
  "css",
  "scss",
  "html",
  "xml",
  "json",
  "markdown",
  "yaml",
  "python",
  "ruby",
  "vue",
] as const;

const LANG_ALIASES: Record<string, string> = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  sh: "shell",
  zsh: "shell",
  py: "python",
  rb: "ruby",
  md: "markdown",
  yml: "yaml",
  none: "text",
  plain: "text",
  text: "text",
  txt: "text",
  apache: "apache",
  htaccess: "apache",
};

const highlighterPromise = createHighlighter({
  themes: [THEME],
  langs: [...LANGS],
});

const PRE_BLOCK_RE = /<pre([^>]*)>([\s\S]*?)<\/pre>/g;

function decodeEntities(str: string): string {
  let decoded = str;
  for (let i = 0; i < 3; i++) {
    const next = decoded.replace(
      /&(amp|lt|gt|quot|#\d+|#x[0-9a-fA-F]+);/g,
      (match, code: string) => {
        if (code === "amp") return "&";
        if (code === "lt") return "<";
        if (code === "gt") return ">";
        if (code === "quot") return '"';
        const radix = code.startsWith("x") ? 16 : 10;
        const value = parseInt(code.slice(1), radix);
        return value ? String.fromCharCode(value) : match;
      },
    );
    if (next === decoded) break;
    decoded = next;
  }
  return decoded;
}

function extractLang(attrs: string): string {
  const classes = attrs.match(/class="([^"]+)"/)?.[1] ?? "";
  const tokens = classes.split(/\s+/);
  for (const token of tokens) {
    const match = /^(?:lang|language)-([\w-]+)$/.exec(token);
    if (match) return match[1];
  }
  return "";
}

function normalizeLang(lang: string): string {
  const key = lang.toLowerCase();
  return LANG_ALIASES[key] ?? key;
}

function detectLang(code: string): string {
  const trimmed = code.trim();
  if (
    trimmed.startsWith("<?php") ||
    /namespace\s+[A-Za-z_\\]+\s*;/.test(code) ||
    /use\s+(Illuminate|App|DB|Auth|Schema|Carbon)\b/.test(code)
  ) {
    return "php";
  }
  if (/^#!\//m.test(code)) return "shell";
  if (
    /^(php|composer|sudo|npm|yarn|pnpm|curl|git|artisan|docker|cp|mkdir|chmod|chown)\s/m.test(
      code,
    )
  ) {
    return "shell";
  }
  if (
    /^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|BEGIN|COMMIT|ROLLBACK)\b/im.test(
      code,
    )
  ) {
    return "sql";
  }
  if (
    /\b(import\s+.+from\s+['"]|export\s+(default|const|function)|console\.log\b)/.test(
      code,
    )
  ) {
    return "javascript";
  }
  return "php";
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const COPY_ICON = `<svg class="code-block__copy-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2" stroke="currentColor" stroke-width="1.4"/></svg>`;

const CHECK_ICON = `<svg class="code-block__copy-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5 6.2 11.5 13 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function buildCodeBlock(code: string, lang: string): Promise<string> {
  return highlighterPromise.then(async (highlighter) => {
    const resolvedLang = LANGS.includes(
      lang as (typeof LANGS)[number],
    )
      ? lang
      : "text";
    let highlighted: string;
    try {
      highlighted = highlighter.codeToHtml(code, {
        lang: resolvedLang,
        theme: THEME,
      });
    } catch {
      highlighted = highlighter.codeToHtml(code, {
        lang: "text",
        theme: THEME,
      });
    }
    return `<div class="code-block"><div class="code-block__header"><div class="code-block__dots" aria-hidden="true"><span class="code-block__dot code-block__dot--red"></span><span class="code-block__dot code-block__dot--yellow"></span><span class="code-block__dot code-block__dot--green"></span></div><span class="code-block__lang">${escapeHtml(lang)}</span><button type="button" class="code-block__copy" aria-label="Copy code"><span class="code-block__copy-icon-wrap">${COPY_ICON}</span><span class="code-block__copy-label">Copy</span></button></div>${highlighted}</div>`;
  });
}

export async function enrichCodeBlocks(html: string): Promise<string> {
  const matches = Array.from(html.matchAll(PRE_BLOCK_RE));
  if (matches.length === 0) return html;

  let result = "";
  let lastIndex = 0;

  for (const match of matches) {
    const index = match.index ?? 0;
    result += html.slice(lastIndex, index);

    const preAttrs = match[1];
    const inner = match[2];

    let code: string;
    let codeAttrs = "";
    const codeMatch = /^<code([^>]*)>([\s\S]*?)<\/code>/.exec(inner);
    if (codeMatch) {
      codeAttrs = codeMatch[1];
      code = codeMatch[2];
    } else {
      code = inner;
    }

    const rawLang =
      extractLang(preAttrs) || extractLang(codeAttrs) || detectLang(code);
    const lang = normalizeLang(rawLang);

    result += await buildCodeBlock(
      decodeEntities(code).replace(/\n$/, ""),
      lang,
    );
    lastIndex = index + match[0].length;
  }

  result += html.slice(lastIndex);
  return result;
}
