import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('collaborative-money-management hero renders exactly one h1 with the existing headline copy', () => {
  const src = readFileSync('src/components/CollaborativeMoneyManagement.astro', 'utf8');
  const h1s = src.match(/<h1[\s>]/g) || [];
  assert.equal(h1s.length, 1, 'component must render exactly one h1');
  assert.ok(/<h1[^>]*>\s*Collaborative Money/.test(src), 'h1 keeps the existing hero headline, no new copy');
});
