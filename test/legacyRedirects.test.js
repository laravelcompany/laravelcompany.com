import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';

const lines = readFileSync(new URL('../public/_redirects', import.meta.url), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

const rules = lines.map((l) => {
  const [from, to, status] = l.split(/\s+/);
  return { from, to, status };
});

const pageSlugs = new Set(['/']);
for (const f of readdirSync(new URL('../src/pages', import.meta.url), { withFileTypes: true })) {
  if (f.isFile() && f.name.endsWith('.astro')) pageSlugs.add(`/${f.name.replace(/\.astro$/, '')}/`);
  if (f.isDirectory() && !f.name.startsWith('[')) {
    try {
      const inner = readdirSync(new URL(`../src/pages/${f.name}/`, import.meta.url));
      if (inner.includes('index.astro')) pageSlugs.add(`/${f.name}/`);
    } catch {}
  }
}
for (const f of readdirSync(new URL('../src/content/blog', import.meta.url))) {
  if (f.endsWith('.json')) pageSlugs.add(`/blog/${f.replace(/\.json$/, '')}/`);
}
for (const f of readdirSync(new URL('../posts', import.meta.url))) {
  if (f.endsWith('.json')) pageSlugs.add(`/blog/${f.replace(/\.json$/, '')}/`);
}
for (const f of readdirSync(new URL('../src/content/docs', import.meta.url))) {
  if (f.endsWith('.md') && f !== 'readme.md') pageSlugs.add(`/docs/${f.replace(/\.md$/, '')}/`);
}
for (const extra of ['/blog/', '/jobs/', '/prompts/', '/docs/', '/sitemap.xml']) pageSlugs.add(extra);

test('every rule is a well-formed 301 with a distinct source', () => {
  const seen = new Set();
  for (const { from, to, status } of rules) {
    assert.ok(from.startsWith('/'), `source must be a path: ${from}`);
    assert.equal(status, '301', `status must be 301: ${from}`);
    assert.ok(to.startsWith('https://'), `destination must be absolute: ${from} -> ${to}`);
    assert.ok(!seen.has(from), `duplicate source: ${from}`);
    seen.add(from);
  }
});

test('no rule redirects a path to itself', () => {
  for (const { from, to } of rules) {
    const destPath = new URL(to).pathname;
    assert.notEqual(from.replace(/\/$/, ''), destPath.replace(/\/$/, ''), `self-redirect: ${from}`);
    // splats target their own parent listing (e.g. /jobs/* -> /jobs/); the parent
    // is a prerendered static page, which Cloudflare Pages serves before redirects.
  }
});

test('internal destinations point at pages that actually exist', () => {
  for (const { from, to } of rules) {
    if (from.includes('*')) continue;
    const destPath = new URL(to).pathname;
    if (!to.startsWith('https://laravelcompany.com/')) continue;
    assert.ok(pageSlugs.has(destPath), `dead destination: ${from} -> ${destPath}`);
  }
});

test('GA-reported 404s are covered by an explicit rule or a splat', () => {
  const samples = ['/pricing', '/ecommerce', '/contact-us', '/about', '/blog/my-first-post',
    '/blog/setting-up-a-laravel-development-environment', '/jobs/full-stack-php-developer-cnfq1i/',
    '/prompts/linkedin-parser.py', '/sitemap-index.xml', '/docs/storage'];
  for (const path of samples) {
    const hit = rules.find((r) => r.from === path)
      || rules.find((r) => r.from.endsWith('/*') && path.startsWith(r.from.slice(0, -1)));
    assert.ok(hit, `no redirect covers ${path}`);
  }
});

test('rule count stays within the Cloudflare Pages static limit', () => {
  assert.ok(rules.length <= 2100, `${rules.length} rules exceeds the 2,100 static limit`);
});
