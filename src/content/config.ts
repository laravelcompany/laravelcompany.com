import { defineCollection, z } from 'astro:content';


// Define collections
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string().url(),
    image: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    type: z.enum( ['Article', 'Tutorial', 'Magazine']),
  }),
});

const software = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
    type: z.enum([
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
    ]),
  }),
});

const cars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    logo: z.string(),
    summary: z.string(),
  }),
});




// Export all collections
export const collections = {
  blog: blog,
  software: software,
  cars:cars
};
