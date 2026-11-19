import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const allDocs = await getCollection("docs");
  const docs = allDocs.filter((doc) => doc.id.replace(/\.md$/, "") !== "readme");

  return docs.map((doc) => ({
    params: { slug: doc.id.replace(/\.md$/, "") },
    props: { doc },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { doc } = props as { doc: { id: string; body: string } };
  const slug = doc.id.replace(/\.md$/, "");

  return new Response(doc.body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="laravel-docs-${slug}.md"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
};
