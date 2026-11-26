import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
test('shared and contact schema never publish the known placeholder telephone',()=>{
 for(const file of ['src/layouts/Layout.astro','src/pages/contact.astro']){
  const source=fs.readFileSync(file,'utf8');assert.ok(!source.includes('+44-1234-567890'),file);
 }
});
