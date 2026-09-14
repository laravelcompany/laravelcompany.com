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

const promptCollection = defineCollection({
  type: 'data',
  schema: z.object({
    act: z.string(),
    prompt: z.string(),
    improvedPrompt: z.string(),
    forDevs: z.boolean().nullable().optional(),
    type: z.string().nullable().optional(),
    contributor: z.string().nullable().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  docs: docsCollection,
  'funny-docs': funnyDocsCollection,
  prompts: promptCollection,
};