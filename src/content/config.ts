import { defineCollection, z } from 'astro:content';



const software = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
  }),
});

// Export all collections
export const collections = {
  software: software,
};

