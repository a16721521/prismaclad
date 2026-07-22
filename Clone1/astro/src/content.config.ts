import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subtitle: z.string().default(''),
    date: z.coerce.date(),
    category: z.string(),
    readTime: z.coerce.number(),
    image: z.string(),
    imageAlt: z.string().default(''),
    dateModified: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
