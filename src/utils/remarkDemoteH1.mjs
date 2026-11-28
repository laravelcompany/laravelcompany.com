// Issue #40: docs and funny-docs pages render the entry title as the page h1
// (DocsArticle), so a depth-1 Markdown heading inside the body is a duplicate
// h1. Demote all depth-1 headings to depth-2 during Markdown rendering.
export default function remarkDemoteH1() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === "heading" && node.depth === 1) node.depth = 2;
      for (const child of node.children || []) walk(child);
    };
    walk(tree);
  };
}
