import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const css = await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const header = await readFile(new URL('../src/components/Header.astro', import.meta.url), 'utf8');
const cta = await readFile(new URL('../src/components/OpenSourceSection.astro', import.meta.url), 'utf8');

test('shared buttons align icons and text in a centered row', () => {
  assert.match(css, /@layer components\s*\{[\s\S]*?\.btn\s*\{\s*@apply inline-flex items-center justify-center gap-2/);
  assert.match(css, /\.btn > svg\s*\{\s*flex-shrink: 0;/);
});

test('header retains responsive visibility overrides and project CTA keeps icon spacing', () => {
  assert.match(header, /class="btn btn-primary [^"]*hidden lg:inline-flex"/);
  assert.match(cta, /class="btn btn-primary gap-3"/);
  assert.match(cta, /class="shrink-0"/);
});
