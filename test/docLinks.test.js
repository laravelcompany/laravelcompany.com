import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import remarkDocLinks, { resolveDocLink } from '../src/utils/remarkDocLinks.mjs';

const known = new Set(['queues', 'facades', 'encryption']);

test('upstream docs placeholders resolve only to existing unversioned pages', () => {
  assert.equal(resolveDocLink('/docs/{{version}}/queues', known), '/docs/queues/');
  assert.equal(resolveDocLink('/docs/%7B%7Bversion%7D%7D/facades#example', known), '/docs/facades/#example');
  assert.equal(resolveDocLink('/docs/{{version}}/encryption/?x=1#key', known), '/docs/encryption/?x=1#key');
  for (const url of ['/docs/{{version}}/missing', 'https://laravel.com/docs/{{version}}/queues',
    '/docs/12.x/queues', '/docs/queues/', '/docs/{{version}}/../queues', '#queues']) {
    assert.equal(resolveDocLink(url, known), url);
  }
});

test('Markdown transform handles inline/reference links, leaves code and text alone', () => {
  const tree = { type: 'root', children: [
    { type: 'paragraph', children: [{ type: 'link', url: '/docs/{{version}}/queues' }] },
    { type: 'definition', url: '/docs/{{version}}/facades' },
    { type: 'code', value: '/docs/{{version}}/queues' },
    { type: 'text', value: '/docs/{{version}}/queues' },
  ] };
  remarkDocLinks({ slugs: [...known] })(tree);
  assert.equal(tree.children[0].children[0].url, '/docs/queues/');
  assert.equal(tree.children[1].url, '/docs/facades/');
  assert.equal(tree.children[2].value, '/docs/{{version}}/queues');
  assert.equal(tree.children[3].value, '/docs/{{version}}/queues');
});

test('production config enables docs-link transform and real corpus slugs are read', () => {
  const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
  assert.match(config, /remarkPlugins:\s*\[remarkDocLinks[\],\s\w]*\]/);
  const tree = { type: 'root', children: [{ type: 'link', url: '/docs/{{version}}/queues' }] };
  remarkDocLinks()(tree);
  assert.equal(tree.children[0].url, '/docs/queues/');
});

test('commercial pages no longer advertise nonexistent case studies or portfolio routes', () => {
  for (const page of ['laravel-development-company', 'ai-digital-transformation']) {
    const source = readFileSync(new URL(`../src/pages/${page}.astro`, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /href="\/(portfolio|case-studies)\//);
  }
});
