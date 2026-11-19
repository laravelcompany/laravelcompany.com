// Convert GitHub-style alert blockquotes (`> [!NOTE]`, `> [!WARNING]`, ...)
// into labelled callouts. The corpus also carries joke markers from the funny
// docs ([!YARRRR] and friends); unknown types still become callouts, labelled
// with their own name.

const KINDS = {
  NOTE: "note",
  INFO: "note",
  PSA: "note",
  TIP: "note",
  WARNING: "warning",
  ATTENTION: "warning",
  ATTN: "warning",
  ALERT: "warning",
  CAUTION: "danger",
  DANGER: "danger",
};

function titleCase(word) {
  return word[0] + word.slice(1).toLowerCase();
}

export function alertKind(marker) {
  return KINDS[marker] || "note";
}

export function transformAlert(blockquote) {
  const first = blockquote.children && blockquote.children[0];
  if (!first || first.type !== "paragraph") return false;
  const firstText = first.children && first.children[0];
  if (!firstText || firstText.type !== "text") return false;

  const match = /^\[!([A-Z]+)\][ \t]*(\n)?/.exec(firstText.value);
  if (!match) return false;

  const marker = match[1];
  const kind = alertKind(marker);
  firstText.value = firstText.value.slice(match[0].length);

  // Drop the marker paragraph when nothing is left on it.
  const restEmpty = first.children.every(
    (child, index) =>
      (index === 0 && child.value === "") || child.type === "break",
  );
  if (firstText.value === "" && (first.children.length === 1 || restEmpty)) {
    blockquote.children.shift();
  } else if (firstText.value === "") {
    first.children.shift();
  }

  blockquote.data = blockquote.data || {};
  blockquote.data.hProperties = {
    ...(blockquote.data.hProperties || {}),
    "data-alert": kind,
  };
  blockquote.children.unshift({
    type: "paragraph",
    data: { hProperties: { class: ["docs-alert-label"] } },
    children: [
      { type: "strong", children: [{ type: "text", value: titleCase(marker) }] },
    ],
  });
  return true;
}

export default function remarkDocsAlerts() {
  return function transform(tree, file) {
    const path = (file && file.path ? file.path : "").replace(/\\/g, "/");
    if (!/\/src\/content\/(docs|funny-docs)\//.test(path)) return;
    function visit(node) {
      if (node.type === "blockquote") transformAlert(node);
      if (Array.isArray(node.children)) node.children.forEach(visit);
    }
    visit(tree);
  };
}
