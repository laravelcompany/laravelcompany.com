import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const links = [
  { file: 'src/content/blog/difficulty-scaling-laravel-horizon-across-multiple-instances-ecs-auto-scaling.json', anchor: 'experienced Laravel development company' },
  { file: 'src/content/blog/laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-frankenphp.json', anchor: 'Laravel development company' },
  { file: 'src/content/blog/laravel-13-sanctum-fortify-api-routes-redirecting.json', anchor: 'Laravel development agency' },
  { file: 'src/content/blog/how-to-secure-an-api-generated-video-embed-link-and-prevent-user-sharing.json', anchor: 'professional Laravel development services' },
  { file: 'src/content/blog/how-to-implement-meta-offline-conversions-in-a-laravel-application.json', anchor: 'Laravel development partner' },
  { file: 'src/content/blog/4684-database-hosts-array-is-empty-after-deploying-lara.json', anchor: 'Laravel experts' },
  { file: 'src/content/blog/1817-how-to-seed-database-migrations-for-laravel-tests.json', anchor: 'Laravel development team' },
  { file: 'src/content/blog/4015-how-to-make-a-rest-api-first-web-application-in-la.json', anchor: 'experienced Laravel development agency' },
  { file: 'src/content/blog/5719-diagram-of-laravel-architecture.json', anchor: 'Laravel software development company' },
  { file: 'src/content/blog/4713-upgrade-laravel-8-to-laravel-11.json', anchor: 'Laravel agency' },
  { file: 'src/content/blog/8732-backendfrontend-separation-in-laravel.json', anchor: 'Laravel development services' },
  { file: 'src/content/blog/7711-laravel-sanctum-and-cookie-based-session-security.json', anchor: 'Laravel development company' }
];

test('selected articles link once to the canonical homepage with varied anchors', () => {
  const anchors = new Set();
  for (const link of links) {
    const article = JSON.parse(readFileSync(link.file, 'utf8'));
    const matches = [...article.content.matchAll(/<a\s+[^>]*href=["']\/["'][^>]*>(.*?)<\/a>/gi)];
    assert.equal(matches.length, 1, `${link.file} should contain one homepage link`);
    assert.equal(matches[0][1], link.anchor, `${link.file} should use its reviewed anchor`);
    anchors.add(link.anchor.toLowerCase());
  }
  assert.ok(anchors.size >= 8, 'anchor text should remain varied');
});

test('homepage states the four commercial keyword themes naturally', () => {
  const copy = ['src/pages/index.astro', 'src/components/Hero.astro', 'src/components/CTASection.astro']
    .map((file) => readFileSync(file, 'utf8')).join(' ').toLowerCase();
  for (const phrase of ['laravel development company', 'laravel development agency', 'laravel development services', 'laravel agency']) {
    assert.match(copy, new RegExp(phrase), `homepage should contain: ${phrase}`);
  }
});
