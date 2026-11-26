import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
test('shared and contact schema use the confirmed business telephone',()=>{
 for(const file of ['src/layouts/Layout.astro','src/pages/contact.astro']){
  const source=fs.readFileSync(file,'utf8');assert.ok(!source.includes('+44-1234-567890'),file);
  const phones=[...source.matchAll(/telephone["']?\s*:\s*["']([^"']+)/g)].map(m=>m[1]);
  assert.ok(phones.length>0,file);assert.ok(phones.every(phone=>phone==='+44 744 821 88 99'),file);
 }
});
