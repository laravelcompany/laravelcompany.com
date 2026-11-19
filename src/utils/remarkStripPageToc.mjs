// Imported Laravel docs open with an H1 title and a hand-written table of
// contents: one top-level list whose links all point at in-page anchors
// (#section). The doc pages render the title in the hero and their own "On
// this page" sidebar from the real headings, so both are redundant. Remove
// the leading H1, and the leading list only when every link in it is a
// same-page anchor. Docs content files only.

function isPageAnchorList(node) {
  if (!node || node.type !== 'list') return false;
  let links = 0;
  let anchorLinks = 0;
  function visit(n) {
    if (n.type === 'link' && typeof n.url === 'string') {
      links += 1;
      if (n.url.startsWith('#')) anchorLinks += 1;
    }
    if (Array.isArray(n.children)) n.children.forEach(visit);
  }
  visit(node);
  return links > 0 && links === anchorLinks;
}

export function stripLeadingPageToc(tree) {
  if (!tree || !Array.isArray(tree.children)) return false;
  let changed = false;
  const first = tree.children[0];
  if (first && first.type === 'heading' && first.depth === 1) {
    tree.children.shift();
    changed = true;
  }
  if (isPageAnchorList(tree.children[0])) {
    tree.children.shift();
    changed = true;
  }
  return changed;
}

export default function remarkStripPageToc() {
  return function transform(tree, file) {
    const path = (file && file.path ? file.path : '').replace(/\\/g, '/');
    if (!/\/src\/content\/(docs|funny-docs)\//.test(path)) return;
    stripLeadingPageToc(tree);
  };
}
