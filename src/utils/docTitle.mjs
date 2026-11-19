// Page title for a docs entry: the first H1 in the Markdown body. Some files
// (e.g. documentation.md) open with a link list instead of a heading, so fall
// back to a humanized slug rather than rendering raw Markdown as the title.
export function docTitle(body, slug) {
  const heading = body.split("\n").find((line) => /^#\s+\S/.test(line));
  if (heading) return heading.replace(/^#\s*/, "").trim();
  return slug
    .split("-")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}
