// Collapse raw Markdown body text into plain prose for card excerpts.
// Imported docs bodies still carry upstream link syntax such as
// "[Release Notes](/docs/{{version}}/releases)"; rendering that verbatim
// leaks literal /docs/{{version}}/... URLs onto the page, which scraper
// bots then crawl (GA4 showed those placeholder URLs as real 404 traffic).
export function stripMarkdown(text) {
  return text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // images -> alt text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> link text
    .replace(/\[([^\]]*)\]\[[^\]]*\]/g, '$1') // reference links -> link text
    .replace(/^\s{0,3}#{1,6}\s+/gm, '') // headings
    .replace(/^\s*[-*+]\s+/gm, '') // list bullets
    .replace(/^\s*>\s?/gm, '') // blockquotes
    .replace(/`{1,3}([^`]*)`{1,3}/g, '$1') // inline code
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1') // emphasis
    .replace(/\s+/g, ' ')
    .trim();
}
