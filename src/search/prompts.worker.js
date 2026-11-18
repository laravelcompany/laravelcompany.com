import { preparePrompts, searchPrompts } from './prompts.mjs';
let corpus;
async function load() {
  if (!corpus) corpus = (async () => {
    const manifestResponse = await fetch('/prompts-search.json');
    if (!manifestResponse.ok) throw new Error('Search unavailable');
    const manifest = await manifestResponse.json();
    const chunks = [];
    // Limit concurrent downloads instead of bursting a request per chunk.
    for (let i = 0; i < manifest.chunks.length; i += 4) {
      chunks.push(...await Promise.all(manifest.chunks.slice(i, i + 4).map(async url => {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Search unavailable');
        return response.json();
      })));
    }
    return preparePrompts(chunks.flat());
  })().catch(error => { corpus = null; throw error; });
  return corpus;
}
self.onmessage = async ({data}) => {
  try {
    const entries = await load();
    self.postMessage({ id: data.id, matches: searchPrompts(entries, data.query, data.type, data.devs) });
  } catch {
    self.postMessage({ id: data.id, error: true });
  }
};
