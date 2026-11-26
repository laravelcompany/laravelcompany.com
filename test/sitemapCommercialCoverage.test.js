import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const source=fs.readFileSync(new URL('../src/pages/sitemap.xml.ts',import.meta.url),'utf8');
test('priority commercial routes are present in sitemap source and backed by routes',()=>{
 for(const route of ['services','laravel-development-agency','laravel-saas-development','laravel-api-development']){
  assert.ok(source.includes(`'${route}/'`));
  assert.ok(fs.existsSync(`src/pages/${route}.astro`)||fs.existsSync(`src/pages/${route}/index.astro`));
 }
});
test('sitemap deduplicates paths, escapes XML and does not mislabel build time as lastmod',()=>{
 assert.ok(source.includes('new Set('));assert.ok(source.includes('<loc>${escapeXml(url)}</loc>'));assert.ok(!source.includes('<lastmod>${new Date()'));
});
