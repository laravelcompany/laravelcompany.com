// Issue #40: programmatic pages render their own title as the page h1, so any
// h1 inside imported body HTML is a duplicate that dilutes the document
// outline. Demote every body h1 to h2. Safe for code samples: marked escapes
// code content, so a literal "<h1" tag sequence only occurs as a real heading.
export function demoteH1Html(html) {
  return html.replace(/<h1(\s[^>]*)?>/g, "<h2$1>").replace(/<\/h1>/g, "</h2>");
}
