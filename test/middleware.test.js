import assert from 'node:assert/strict';
import test from 'node:test';
import { redirectFor } from '../functions/_middleware.js';

test('legacy /docs/{{version}} URLs redirect to the unversioned page', () => {
  assert.equal(redirectFor('/docs/{{version}}/container'), '/docs/container/');
  assert.equal(redirectFor('/docs/{{version}}/container/'), '/docs/container/');
  assert.equal(redirectFor('/docs/%7B%7Bversion%7D%7D/redis'), '/docs/redis/');
  assert.equal(redirectFor('/docs/{{VERSION}}/mocking'), '/docs/mocking/');
  assert.equal(redirectFor('/docs/{{version}}'), '/docs/');
});

test('extension-less GET paths gain a canonical trailing slash', () => {
  assert.equal(redirectFor('/contact'), '/contact/');
  assert.equal(redirectFor('/blog/586-how-to-execute-stored-procedure-from-laravel'), '/blog/586-how-to-execute-stored-procedure-from-laravel/');
  assert.equal(redirectFor('/docs/queues'), '/docs/queues/');
});

test('assets, root, api and books routes are left alone', () => {
  for (const path of ['/', '/sitemap.xml', '/robots.txt', '/favicon.png',
    '/_astro/index.C9o1Fdz_.css', '/api/search', '/api/books/search',
    '/books/beginning-laravel', '/contact/', '/prompts/linkedin-parser.py']) {
    assert.equal(redirectFor(path), null, path);
  }
});

test('no redirect loop: output of a redirect is stable', () => {
  for (const path of ['/docs/{{version}}/container', '/contact', '/pricing']) {
    const once = redirectFor(path);
    assert.ok(once, path);
    assert.equal(redirectFor(once), null, `${path} -> ${once} must not redirect again`);
  }
});
