import test from 'node:test';
import assert from 'node:assert/strict';
import { preparePrompts, searchPrompts } from '../src/search/prompts.mjs';
import { readdirSync, readFileSync } from 'node:fs';
const entries = preparePrompts([
  {act:'Laravel tests',slug:'a',text:'Build APIs with PHPUnit',type:'TEXT',forDevs:true,contributor:'Jane'},
  {act:'Writing guide',slug:'b',text:'Deep content with Laravel and tests beyond the excerpt',type:'STRUCTURED',forDevs:false,contributor:'José'},
  {act:'Image tool',slug:'c',text:'Draw art',type:'IMAGE',forDevs:false,contributor:'Jane'},
]);
test('prompt ranking favors titles and searches entire content with AND terms', () => {
  assert.deepEqual(searchPrompts(entries,'laravel tests').map(x=>x.slug),['a','b']);
  assert.deepEqual(searchPrompts(entries,'beyond excerpt').map(x=>x.slug),['b']);
  assert.equal(searchPrompts(entries,'laravel missing').length,0);
});
test('prompt contributor, case and accent search; combined filters and one-character terms',()=>{
  assert.deepEqual(searchPrompts(entries,'JOSE').map(x=>x.slug),['b']);
  assert.deepEqual(searchPrompts(entries,'','IMAGE').map(x=>x.slug),['c']);
  assert.deepEqual(searchPrompts(entries,'laravel','TEXT',true).map(x=>x.slug),['a']);
  assert.equal(searchPrompts(entries,'laravel','IMAGE',true).length,0);
  assert.equal(searchPrompts(entries,'a').length,3);
});
test('search response excludes the full bodies and normalized internal fields',()=>{
  const result=searchPrompts(entries,'laravel')[0];
  for(const key of ['text','title','body','author']) assert.ok(!(key in result));
});
test('chunk manifest covers every committed prompt once, under Pages asset limits',()=>{
  const manifest=JSON.parse(readFileSync('public/prompts-search.json','utf8'));
  const all=manifest.chunks.flatMap(url=>{
    const text=readFileSync('public'+url,'utf8');
    assert.ok(Buffer.byteLength(text)<25*1024*1024);
    return JSON.parse(text);
  });
  const files=readdirSync('src/content/prompts').filter(x=>x.endsWith('.json'));
  assert.equal(all.length,files.length);
  assert.equal(manifest.total,files.length);
  assert.equal(new Set(all.map(x=>x.slug)).size,all.length);
});
