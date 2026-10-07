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
    // SEO-only overrides for <title> and <meta description>. The on-page H1 and
    // the blog cards keep using `title` / `description`; these exist so the
    // search snippet can be tightened (title <=60 incl. suffix, description
    // 140-160) without editing visible copy.
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    // Show a visible "Last updated" line. Required on pages that quote
    // ordinance text (PRISMACLAD-SEO-AEO.md §5 rule 7).
    showUpdated: z.boolean().default(false),
  }),
});

export const collections = { blog };
