import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { demoteH1Html } from '../src/utils/demoteH1Html.mjs';
import remarkDemoteH1 from '../src/utils/remarkDemoteH1.mjs';

test('demoteH1Html turns every body h1 into h2 and leaves other tags alone', () => {
  const html = '<h1>Title</h1><p>x</p><h1 class="big">Second</h1><h2>Keep</h2>';
  const out = demoteH1Html(html);
  assert.equal(out, '<h2>Title</h2><p>x</p><h2 class="big">Second</h2><h2>Keep</h2>');
  assert.ok(!/<h1[\s>]/.test(out));
});

test('demoteH1Html preserves heading attributes and does not touch escaped code', () => {
  const out = demoteH1Html('<h1 id="a">A</h1><pre><code>&lt;h1&gt;not a tag&lt;/h1&gt;</code></pre>');
  assert.ok(out.startsWith('<h2 id="a">A</h2>'));
  assert.ok(out.includes('&lt;h1&gt;not a tag&lt;/h1&gt;'));
});

test('remarkDemoteH1 demotes depth-1 headings, keeps deeper levels', () => {
  const tree = { type: 'root', children: [
    { type: 'heading', depth: 1, children: [] },
    { type: 'paragraph', children: [{ type: 'heading', depth: 1, children: [] }] },
    { type: 'heading', depth: 2, children: [] },
  ] };
  remarkDemoteH1()(tree);
  assert.equal(tree.children[0].depth, 2);
  assert.equal(tree.children[1].children[0].depth, 2);
  assert.equal(tree.children[2].depth, 2);
});

test('blog template demotes imported body h1s after marked.parse', () => {
  const src = readFileSync('src/pages/blog/[slug].astro', 'utf8');
  assert.ok(src.includes('demoteH1Html'), 'template must call demoteH1Html');
  assert.ok(src.indexOf('marked.parse') < src.indexOf('demoteH1Html(rawContent)'));
});

test('shared markdown config registers the h1 demote plugin for docs surfaces', () => {
  const config = readFileSync('astro.config.mjs', 'utf8');
  assert.ok(config.includes('remarkDemoteH1'));
  const plugins = config.match(/remarkPlugins:\s*\[([^\]]+)\]/)[1];
  assert.ok(plugins.includes('remarkDemoteH1'));
});
