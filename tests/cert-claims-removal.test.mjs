import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const sovereign = readFileSync('src/pages/eu-sovereign-cloud-provider.astro', 'utf8');
const healthcare = readFileSync('src/pages/laravel-healthcare-software.astro', 'utf8');

test('eu-sovereign page no longer asserts EUCC certification', () => {
  assert.ok(!sovereign.includes('EUCC Certified'), 'badge removed');
  assert.ok(!sovereign.includes('EUCC certified development'), 'list item removed');
  assert.ok(!sovereign.includes('"name": "EUCC"'), 'JSON-LD Certification entry removed');
});

test('eu-sovereign page no longer asserts ISO 27001 certification', () => {
  assert.ok(!sovereign.includes('ISO 27001:2022 certified'), 'list item removed');
});

test('eu-sovereign meta and JSON-LD descriptions drop the unsupported "certified solutions" claim', () => {
  assert.ok(!sovereign.includes('certified solutions'));
  assert.ok(sovereign.includes('aligned with SecNumCloud, C5, and EUCS requirements'));
});

test('healthcare page drops the "ISO 27001 aligned" security-management claim', () => {
  assert.ok(!healthcare.includes('ISO 27001 aligned'));
});

test('no replacement claims invented: removed copy was deleted, not swapped for new badges', () => {
  assert.ok(!/EUCC (Ready|Compliant)/.test(sovereign));
  assert.ok(!/ISO 27001 (certified|aligned|compliant)/i.test(sovereign), 'no ISO 27001 claim of any form on eu-sovereign');
  assert.ok(!/ISO 27001 (certified|aligned|compliant)/i.test(healthcare.match(/Enterprise Compliance[\s\S]*?<\/ul>/)?.[0] || ''), 'no ISO 27001 claim in the healthcare compliance list');
});
