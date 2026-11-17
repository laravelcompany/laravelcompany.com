import { readdirSync } from 'node:fs';

// Imported Laravel Markdown still uses the upstream version placeholder, but
// this site's documentation routes are unversioned. Only rewrite known pages.
export function resolveDocLink(url, knownSlugs) {
  const match = /^\/docs\/(?:\{\{version\}\}|%7B%7Bversion%7D%7D)\/([a-z0-9-]+)\/?([?#].*)?$/i.exec(url);
  if (!match || !knownSlugs.has(match[1])) return url;
  return `/docs/${match[1]}/${match[2] || ''}`;
}

export default function remarkDocLinks(options = {}) {
  const slugs = new Set(options.slugs ?? readdirSync(new URL('../content/docs/', import.meta.url))
    .filter(name => name.endsWith('.md') && name !== 'readme.md')
    .map(name => name.slice(0, -3)));
  return function transform(tree) {
    function visit(node) {
      if ((node.type === 'link' || node.type === 'definition') && typeof node.url === 'string') {
        node.url = resolveDocLink(node.url, slugs);
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    }
    visit(tree);
  };
}
