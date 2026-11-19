import assert from 'node:assert/strict';
import test from 'node:test';
import { stripMarkdown } from '../src/utils/stripMarkdown.mjs';

test('markdown link syntax collapses to link text, leaking no URLs', () => {
  const raw = '- [Release Notes](/docs/{{version}}/releases) - [Upgrade Guide](/docs/{{version}}/upgrade)';
  const out = stripMarkdown(raw);
  assert.equal(out, 'Release Notes - Upgrade Guide');
  assert.ok(!out.includes('{{version}}'));
  assert.ok(!out.includes('/docs/'));
});

test('headings, bullets, code and emphasis become plain prose', () => {
  assert.equal(
    stripMarkdown('## Prologue\n- item one\n- item two with `code` and **bold**'),
    'Prologue item one item two with code and bold',
  );
});

test('plain text passes through, whitespace normalized', () => {
  assert.equal(stripMarkdown('  Laravel documentation\n   for everyone  '), 'Laravel documentation for everyone');
});
