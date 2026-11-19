import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

// Cloudflare Pages rejects a _routes.json whose include rules overlap
// (Error 8000057), e.g. "/api/search" under "/*". Guard against regressions.
const routes = JSON.parse(readFileSync(new URL('../public/_routes.json', import.meta.url), 'utf8'));

function covers(a, b) {
  if (a === b) return true;
  if (a.endsWith('*')) return b.startsWith(a.slice(0, -1));
  return false;
}

test('_routes.json include rules never overlap', () => {
  const inc = routes.include || [];
  for (let i = 0; i < inc.length; i++) {
    for (let j = i + 1; j < inc.length; j++) {
      assert.ok(
        !covers(inc[i], inc[j]) && !covers(inc[j], inc[i]),
        `overlapping include rules: ${inc[i]} and ${inc[j]}`,
      );
    }
  }
});

test('_routes.json has a version and arrays', () => {
  assert.equal(routes.version, 1);
  assert.ok(Array.isArray(routes.include));
  assert.ok(Array.isArray(routes.exclude));
});
