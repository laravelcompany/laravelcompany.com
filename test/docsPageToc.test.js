import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import remarkStripPageToc, { stripLeadingPageToc } from '../src/utils/remarkStripPageToc.mjs';
import { docTitle } from '../src/utils/docTitle.mjs';
import { transformAlert } from '../src/utils/remarkDocsAlerts.mjs';

const anchorTocTree = () => ({
  type: 'root',
  children: [
    { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Installation' }] },
    {
      type: 'list',
      children: [
        { type: 'listItem', children: [{ type: 'paragraph', children: [{ type: 'link', url: '#meet-laravel', children: [] }] }] },
        { type: 'listItem', children: [{ type: 'paragraph', children: [
          { type: 'link', url: '#creating', children: [] },
          { type: 'list', children: [{ type: 'listItem', children: [{ type: 'paragraph', children: [{ type: 'link', url: '#installing-php', children: [] }] }] }] },
        ] }] },
      ],
    },
    { type: 'heading', depth: 2, children: [{ type: 'text', value: 'Meet Laravel' }] },
    { type: 'paragraph', children: [{ type: 'text', value: 'Laravel is...' }] },
  ],
});

test('leading H1 and same-page anchor list are stripped, rest is kept', () => {
  const tree = anchorTocTree();
  assert.equal(stripLeadingPageToc(tree), true);
  assert.equal(tree.children.length, 2);
  assert.equal(tree.children[0].depth, 2);
  assert.equal(tree.children[1].type, 'paragraph');
});

test('lists with any external or page link are never stripped', () => {
  for (const url of ['/docs/queues/', 'https://laravel.com/docs', '']) {
    const tree = anchorTocTree();
    tree.children[1].children[0].children[0].children[0].url = url;
    stripLeadingPageToc(tree);
    // The H1 still goes (the hero renders the title); the list stays.
    assert.equal(tree.children.length, 3);
    assert.equal(tree.children[0].type, 'list');
  }
});

test('only the first top-level list counts, and only before real content', () => {
  const tree = anchorTocTree();
  // TOC-like list after a paragraph is body content, not a page TOC.
  tree.children = [tree.children[0], tree.children[3], tree.children[1], tree.children[2]];
  stripLeadingPageToc(tree);
  assert.equal(tree.children.length, 3);
  assert.equal(tree.children[1].type, 'list');
});

test('plugin only touches docs and funny-docs content files', () => {
  const docsTree = anchorTocTree();
  remarkStripPageToc()(docsTree, { path: '/repo/src/content/docs/installation.md' });
  assert.equal(docsTree.children.length, 2);

  const funnyTree = anchorTocTree();
  remarkStripPageToc()(funnyTree, { path: '/repo/src/content/funny-docs/installation.md' });
  assert.equal(funnyTree.children.length, 2);

  const blogTree = anchorTocTree();
  remarkStripPageToc()(blogTree, { path: '/repo/src/content/blog/post.md' });
  assert.equal(blogTree.children.length, 4);

  const windowsTree = anchorTocTree();
  remarkStripPageToc()(windowsTree, { path: 'C:\\repo\\src\\content\\docs\\installation.md' });
  assert.equal(windowsTree.children.length, 2);
});

test('production config registers the page-TOC strip after the link rewrites', () => {
  const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
  // Ordering is the contract: the TOC strip must run after the link rewrites.
  // Later plugins (e.g. remarkDemoteH1) may follow without breaking it.
  assert.match(config, /remarkPlugins:\s*\[remarkDocLinks,\s*remarkStripPageToc,\s*remarkDocsAlerts[\],\s\w]*\]/);
});

test('docTitle prefers the first H1 and humanizes the slug otherwise', () => {
  assert.equal(docTitle('# Installation\n\ntext', 'installation'), 'Installation');
  assert.equal(docTitle('- ## Prologue\n    - [x](/docs/{{version}}/releases)', 'documentation'), 'Documentation');
  assert.equal(docTitle('no heading at all', 'eloquent-relationships'), 'Eloquent Relationships');
});

test('alert blockquotes become labelled callouts, label title-cased, jokes kept', () => {
  const bq = (marker, inline) => ({
    type: 'blockquote',
    children: [{ type: 'paragraph', children: [{ type: 'text', value: inline ? `[!${marker}] Watch out.` : `[!${marker}]` }] }],
  });

  const note = bq('NOTE');
  assert.equal(transformAlert(note), true);
  assert.equal(note.data.hProperties['data-alert'], 'note');
  assert.equal(note.children[0].data.hProperties.class[0], 'docs-alert-label');
  assert.equal(note.children[0].children[0].children[0].value, 'Note');

  assert.equal(bq('WARNING') && transformAlert(bq('WARNING')), true);
  const danger = bq('CAUTION');
  transformAlert(danger);
  assert.equal(danger.data.hProperties['data-alert'], 'danger');

  const joke = bq('YARRRR');
  transformAlert(joke);
  assert.equal(joke.data.hProperties['data-alert'], 'note');
  assert.equal(joke.children[0].children[0].children[0].value, 'Yarrrr');

  const inline = bq('WARNING', true);
  transformAlert(inline);
  assert.equal(inline.children[1].children[0].value, 'Watch out.');

  const plain = { type: 'blockquote', children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Just a quote.' }] }] };
  assert.equal(transformAlert(plain), false);
});

test('typography plugin is installed for the prose classes used by the docs layout', () => {
  const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  const all = { ...pkg.dependencies, ...pkg.devDependencies };
  assert.ok(all['@tailwindcss/typography'], '@tailwindcss/typography missing from package.json');
  const tailwindConfig = readFileSync(new URL('../tailwind.config.mjs', import.meta.url), 'utf8');
  assert.match(tailwindConfig, /plugins:\s*\[typography\]/);
});

test('every docs page exposes a Markdown download endpoint wired to the page', () => {
  for (const section of ['docs', 'funny-docs']) {
    const endpoint = readFileSync(new URL(`../src/pages/${section}/[slug].md.ts`, import.meta.url), 'utf8');
    assert.match(endpoint, /Content-Type": "text\/markdown; charset=utf-8"/);
    assert.match(endpoint, /Content-Disposition.*attachment; filename=/);
    assert.match(endpoint, /getStaticPaths/);
    const page = readFileSync(new URL(`../src/pages/${section}/[slug].astro`, import.meta.url), 'utf8');
    assert.ok(
      page.includes('downloadHref={`/' + section + '/${currentSlug}.md`}'),
      `${section} page does not pass downloadHref to DocsArticle`,
    );
  }
  const component = readFileSync(new URL('../src/components/DocsArticle.astro', import.meta.url), 'utf8');
  assert.match(component, /ph:download-duotone/);
  assert.match(component, /href=\{downloadHref\}/);
});

test('both docs sections render through the shared DocsArticle component', () => {
  for (const page of ['../src/pages/docs/[slug].astro', '../src/pages/funny-docs/[slug].astro']) {
    const source = readFileSync(new URL(page, import.meta.url), 'utf8');
    assert.match(source, /import DocsArticle from "\.\.\/\.\.\/components\/DocsArticle\.astro"/);
    assert.match(source, /<DocsArticle/);
  }
});
