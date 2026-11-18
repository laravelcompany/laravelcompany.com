import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('../', import.meta.url).pathname;
const dir = join(root, 'public/prompt-search');
mkdirSync(dir, { recursive: true });
const prompts = readdirSync(join(root, 'src/content/prompts')).filter(f => f.endsWith('.json')).sort().map(file => {
  const p = JSON.parse(readFileSync(join(root, 'src/content/prompts', file), 'utf8'));
  return { act: p.act, slug: file.slice(0, -5), type: p.type || 'TEXT', forDevs: !!p.forDevs,
    contributor: p.contributor || '', excerpt: p.improvedPrompt.replace(/<[^>]*>/g, ' ').replace(/[#*>`]/g, '').replace(/\s+/g, ' ').trim().slice(0, 220),
    text: p.improvedPrompt + (p.prompt === p.improvedPrompt ? '' : '\n' + p.prompt) };
});
// Content hashes keep manifest and chunks in sync across deployments and caches.
const { createHash } = await import('node:crypto');
const chunks = [];
for (let i = 0; i < prompts.length; i += 300) {
  const json = JSON.stringify(prompts.slice(i, i + 300));
  const hash = createHash('sha256').update(json).digest('hex').slice(0, 16);
  const name = `chunk-${hash}.json`;
  writeFileSync(join(dir, name), json);
  chunks.push(`/prompt-search/${name}`);
}
writeFileSync(join(root, 'public/prompts-search.json'), JSON.stringify({ total: prompts.length, chunks }));
console.log(`Prompt search: ${prompts.length} entries in ${chunks.length} full-text chunks`);
