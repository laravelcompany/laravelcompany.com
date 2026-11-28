import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

test('empty news sitemap route is removed and no longer advertised', () => {
  assert.ok(!existsSync('src/pages/news-sitemap.xml.ts'), 'news-sitemap route must be removed');
  const robots = readFileSync('public/robots.txt', 'utf8');
  assert.ok(!robots.includes('news-sitemap'), 'robots.txt must not advertise the news sitemap');
  assert.ok(robots.includes('Sitemap: https://laravelcompany.com/sitemap.xml'), 'normal sitemap stays advertised');
});
