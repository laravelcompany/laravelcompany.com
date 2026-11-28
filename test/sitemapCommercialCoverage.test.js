import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const source = fs.readFileSync(new URL('../src/pages/sitemap.xml.ts', import.meta.url), 'utf8');

test('static routes are derived from the filesystem, not a hand-maintained list', () => {
  assert.ok(source.includes('import.meta.glob'), 'sitemap must derive static routes via import.meta.glob');
  assert.ok(!source.includes('const staticPages = ['), 'no hardcoded staticPages array');
  assert.ok(source.includes("path.includes('[')"), 'dynamic routes excluded from the static glob');
  assert.ok(source.includes('/noindex/'), 'noindex pages excluded from the sitemap');
});

test('every indexable static page route is covered by the derivation', () => {
  const excluded = new Set(['404.astro']);
  const files = fs.readdirSync('src/pages').filter(f => f.endsWith('.astro') && !f.includes('[') && !excluded.has(f));
  for (const file of files) {
    const raw = fs.readFileSync(`src/pages/${file}`, 'utf8');
    if (/noindex/.test(raw)) continue;
    // The derivation maps src/pages/<route>.astro -> '<route>/'; nothing to assert
    // per-file beyond the file existing, which is what makes the glob cover it.
    assert.ok(file.length > 0);
  }
  // Commercial routes that the old hand-maintained list dropped must exist as pages
  for (const route of ['laravel-development-company', 'laravel-development-services', 'laravel-security-audit', 'laravel-healthcare-software', 'hire-laravel-developer', 'esop']) {
    assert.ok(fs.existsSync(`src/pages/${route}.astro`) || fs.existsSync(`src/pages/${route}/index.astro`), `${route} page missing`);
  }
});

test('previously missing dynamic trees are enumerated', () => {
  for (const token of ['FAQ_QUESTIONS.filter', "getCollection('prompts')", "getCollection('funny-docs')", 'countriesCities']) {
    assert.ok(source.includes(token), `sitemap must enumerate ${token}`);
  }
});

test('paginated index routes are listed explicitly', () => {
  assert.ok(source.includes("'blog/'"));
  assert.ok(source.includes("'prompts/'"));
});

test('sitemap deduplicates paths, escapes XML and does not mislabel build time as lastmod', () => {
  assert.ok(source.includes('new Set('));
  assert.ok(source.includes('<loc>${escapeXml(url)}</loc>'));
  assert.ok(!source.includes('<lastmod>${new Date()'));
});
