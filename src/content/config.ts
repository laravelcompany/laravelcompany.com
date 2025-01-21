import { defineCollection, z } from 'astro:content';
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    image: z.string(),
    summary: z.string(),
    type: z.enum(['Article', 'Tutorial']),
  }),
});
const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    summary: z.string(),
    type: z.enum(['Product', 'Tutorial']),
  }),
});

export const collections = {
  blog: blogCollection,
  products: productsCollection,
};