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

test('section fallback targets expired jobs, removed prompts and dropped blog slugs only', async () => {
  const { sectionFallbackFor, onRequest } = await import('../functions/_middleware.js');
  assert.equal(sectionFallbackFor('/jobs/expired-job-123'), '/jobs/');
  assert.equal(sectionFallbackFor('/jobs/expired-job-123/'), '/jobs/');
  assert.equal(sectionFallbackFor('/prompts/old-file.py'), '/prompts/');
  assert.equal(sectionFallbackFor('/blog/dropped-slug/'), '/blog/');
  for (const path of ['/jobs/', '/blog/', '/prompts/', '/', '/contact', '/api/search', '/books/x']) {
    assert.equal(sectionFallbackFor(path), null, path);
  }
});

test('onRequest redirects only on a real 404, never on live pages', async () => {
  const { onRequest } = await import('../functions/_middleware.js');
  const ctx404 = { request: new Request('https://laravelcompany.com/jobs/expired-job-123/'), next: async () => new Response('nope', { status: 404 }) };
  const r404 = await onRequest(ctx404);
  assert.equal(r404.status, 301);
  assert.equal(new URL(r404.headers.get('location')).pathname, '/jobs/');
  const live = new Response('ok', { status: 200 });
  const ctx200 = { request: new Request('https://laravelcompany.com/blog/real-post/'), next: async () => live };
  assert.equal(await onRequest(ctx200), live);
  const ctx404plain = { request: new Request('https://laravelcompany.com/totally-unknown/'), next: async () => new Response('nope', { status: 404 }) };
  assert.equal((await onRequest(ctx404plain)).status, 404);
});
