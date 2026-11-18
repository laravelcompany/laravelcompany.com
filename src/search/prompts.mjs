export const normalize = value => String(value || '').normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase();
export function preparePrompts(entries) {
  return entries.map(p => ({ ...p, title: normalize(p.act), body: normalize(p.text), author: normalize(p.contributor) }));
}
export function searchPrompts(entries, query, type = '', devs = false) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  return entries.filter(p => (!type || p.type === type) && (!devs || p.forDevs)).map(p => {
    let score = 0;
    for (const term of terms) {
      if (p.title.includes(term)) score += p.title === term ? 100 : p.title.startsWith(term) ? 30 : 15;
      else if (p.author.includes(term)) score += 5;
      else if (p.body.includes(term)) score += 1;
      else return null;
    }
    return { p, score };
  }).filter(Boolean).sort((a, b) => b.score - a.score || a.p.act.localeCompare(b.p.act)).map(({p}) => {
    const {text, title, body, author, ...display} = p;
    return display;
  });
}
