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
  assert.equal(sectionFallbackFor('/books/old-open-library-slug/'), '/books/');
  for (const path of ['/jobs/', '/blog/', '/prompts/', '/', '/contact', '/api/search']) {
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

test('numeric versioned docs URLs redirect to the unversioned page', () => {
  assert.equal(redirectFor('/docs/8.x/mail'), '/docs/mail/');
  assert.equal(redirectFor('/docs/8.x/mail/'), '/docs/mail/');
  assert.equal(redirectFor('/docs/7.x/version-control'), '/docs/version-control/');
  assert.equal(redirectFor('/docs/8.x'), '/docs/');
  assert.equal(redirectFor('/docs/8.x/'), '/docs/');
});

test('legacy site sections fall back to the closest live section', async () => {
  const { sectionFallbackFor } = await import('../functions/_middleware.js');
  assert.equal(sectionFallbackFor('/guides/twilio-device'), '/blog/');
  assert.equal(sectionFallbackFor('/tutorials/sinch-sms'), '/blog/');
  assert.equal(sectionFallbackFor('/tech-blog/some-post'), '/blog/');
  assert.equal(sectionFallbackFor('/tag/voip'), '/blog/');
  assert.equal(sectionFallbackFor('/2021/05/old-post'), '/blog/');
  assert.equal(sectionFallbackFor('/android-development/sending-sms'), '/blog/');
  assert.equal(sectionFallbackFor('/docs/sinch-sms-api'), '/docs/');
  assert.equal(sectionFallbackFor('/services/twilio'), '/services/');
  assert.equal(sectionFallbackFor('/products/old-product'), '/products/');
  assert.equal(sectionFallbackFor('/partners/old-partner'), '/partners/');
  assert.equal(sectionFallbackFor('/guides/'), '/blog/');
  assert.equal(sectionFallbackFor('/ios-development/2018/04/16/advanced-uipickerview/'), '/blog/');
  assert.equal(sectionFallbackFor('/our-services/e-commerce-development/'), '/services/');
  assert.equal(sectionFallbackFor('/solutions/sms-gateway/'), '/solutions/');
  assert.equal(sectionFallbackFor('/magento-development/advanced-magento-cron-job-setup/'), '/magento-agency-london/');
  assert.equal(sectionFallbackFor('/jobs/expired-job-123'), '/jobs/');
  assert.equal(sectionFallbackFor('/books/removed-book'), '/books/');
});

test('no redirect loop on versioned docs output', () => {
  const once = redirectFor('/docs/8.x/mail');
  assert.ok(once);
  assert.equal(redirectFor(once), null, `${once} must not redirect again`);
});
