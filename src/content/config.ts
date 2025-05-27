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


//todo implement this 
const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const products = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    brand: z.string().optional(),
    price: z.number().optional(),
    currency: z.string().optional(),
    availability: z.string().optional(),
    category: z.string().optional(),
    sku: z.string().optional(),
    mpn: z.string().optional(),
    gtin: z.string().optional(),
    manufacturer: z.string().optional(),
    rating: z.object({
      value: z.number(),
      reviewCount: z.number(),
      bestRating: z.number().optional(),
      worstRating: z.number().optional()
    }).optional(),
    publishedDate: z.string().optional(),
    modifiedDate: z.string().optional()
  })
});

// Export all collections
export const collections = {
  blog: blog,
  software: software,
  cars:cars,
  docs: docs,
  products: products,
};

