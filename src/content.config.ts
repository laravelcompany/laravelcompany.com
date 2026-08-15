import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    authorRole: z.string(),
    authorAvatar: z.string(),
    excerpt: z.string(),
    content: z.string(),
    image: z.string().nullable().optional(),
    tags: z.array(z.string()),
  }),
});

const docsCollection = defineCollection({
  type: 'content',
});

const funnyDocsCollection = defineCollection({
  type: 'content',
});

// Normalize book data from various JSON structures
// Handles: flat structure, nested product+metadata, product-only structures
function normalizeBook(raw: any) {
  // Check if this is a nested product-based structure
  const hasProduct = raw.product !== undefined && raw.product.title !== undefined;

  if (hasProduct) {
    // Nested structure: extract from product and metadata
    const metadata = raw.metadata || {};
    const product = raw.product;

    return {
      id: raw.id || metadata?.id || product?.product_id || '',
      title: product?.title || raw.title || '',
      date: metadata?.date || product?.date || raw.date || new Date().toISOString().split("T")[0],
      author: metadata?.author || raw.author,
      authorRole: metadata?.authorRole || raw.authorRole,
      authorAvatar: metadata?.authorAvatar || raw.authorAvatar,
      excerpt: raw.excerpt || product?.description || '',
      content: raw.content || product?.description || '',
      image: metadata?.image || product?.image_urls?.[0] || raw.image,
      tags: metadata?.tags || raw.tags || [],
      buyLink: raw.buyLink || product?.url,
    };
  }

  // Flat structure
  return {
    id: raw.id || '',
    title: raw.title || '',
    date: raw.date || new Date().toISOString().split("T")[0],
    author: raw.author,
    authorRole: raw.authorRole,
    authorAvatar: raw.authorAvatar,
    excerpt: raw.excerpt || '',
    content: raw.content || '',
    image: raw.image,
    tags: raw.tags || [],
    buyLink: raw.buyLink,
  };
}

// Schema that accepts all book data structures (all fields optional to accommodate varying JSON formats)
const bookCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().optional(),
    date: z.string().optional(),
    author: z.string().optional(),
    authorRole: z.string().optional(),
    authorAvatar: z.string().optional(),
    excerpt: z.string().optional(),
    content: z.string().optional(),
    image: z.string().nullable().optional(),
    tags: z.array(z.string()).optional(),
    buyLink: z.string().nullable().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  books: bookCollection,
  docs: docsCollection,
  'funny-docs': funnyDocsCollection,
};