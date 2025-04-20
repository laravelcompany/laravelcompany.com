import { defineCollection, z } from 'astro:content';

// Define enums and shared values
const softwareTypes = [
  'Miscellaneous',
  'Project Management Tools',
  'Help and Support Tools',
  'Shopping Carts',
  'Social Networking',
  'Images and Media',
  'Forms',
  'Loaders and Uploaders',
  'Calendars',
  'Database Abstractions',
  'Search',
  'Ratings and Charts',
  'Navigation',
  'Countdowns',
  'News Tickers',
  'Polls',
] as const;

const blogTypes = ['Article', 'Tutorial', 'Magazine'] as const;

// Define collections
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string().url(),
    image: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    type: z.enum(blogTypes),
  }),
});

const softwareCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string(),
    type: z.enum(softwareTypes),
  }),
});

// Export all collections
export const collections = {
  blog: blogCollection,
  software: softwareCollection,
};
