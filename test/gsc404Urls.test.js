import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { redirectFor, sectionFallbackFor } from '../functions/_middleware.js';

// Every URL from the Google Search Console "Not found (404)" report for
// laravelcompany.com (exported 2026-11-26, validation failed 2026-11-24)
// must be covered by an explicit _redirects rule or a middleware redirect.
const lines = readFileSync(new URL('../public/_redirects', import.meta.url), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));
const rules = new Set(lines.map((l) => l.split(/\s+/)[0]));

const urls = readFileSync(new URL('./fixtures-gsc-404-urls.txt', import.meta.url), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l.startsWith('/'));

test('every GSC 404 URL is covered by a rule, a redirect or a section fallback', () => {
  const misses = [];
  for (const path of urls) {
    const withSlash = path.endsWith('/') ? path : `${path}/`;
    const covered = rules.has(path) || rules.has(withSlash)
      || redirectFor(path) || sectionFallbackFor(path) || sectionFallbackFor(withSlash);
    if (!covered) misses.push(path);
  }
  assert.deepEqual(misses, [], `uncovered GSC 404 URLs: ${misses.slice(0, 10).join(', ')}`);
});
