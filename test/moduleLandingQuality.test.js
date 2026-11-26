import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const data = fs.readFileSync(new URL('../src/data/seo-landing-pages.ts', import.meta.url), 'utf8').split('  laravelCustomModuleDevelopment: {')[1];
const template = fs.readFileSync(new URL('../src/components/KeywordLandingPage.astro', import.meta.url), 'utf8');
test('module copy contains no editorial instructions or unverified experience claims', () => {
  assert.ok(data);
  for (const phrase of ['Searchers looking', 'landing page should', 'page should', 'keyword converts', 'We regularly', 'This page is built']) assert.ok(!data.includes(phrase), phrase);
  const paragraphs = [...data.matchAll(/^\s+"([^"\n]{90,})",?$/gm)].map(m=>m[1]);
  assert.equal(paragraphs.length, new Set(paragraphs).size);
  assert.ok(data.includes('href: "/services/"'));
});
test('section previews link to unique sections without repeating body paragraphs', () => {
  assert.ok(!template.includes('{section.paragraphs[0]}'));
  assert.ok(template.includes('href={`#service-section-${sections.indexOf(section) + 1}`}'));
  assert.ok(template.includes('id={`service-section-${index + 1}`}'));
});
