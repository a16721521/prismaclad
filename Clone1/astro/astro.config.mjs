import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// <lastmod> only for URLs where it is true: blog posts, from the post's
// dateModified (or its publish date). Search engines discount lastmod when it
// is the same build date on every URL, so the other pages stay without one.
const lastmodBySlug = new Map();
for (const file of readdirSync('./src/content/blog')) {
  if (!file.endsWith('.md')) continue;
  const fm = readFileSync(`./src/content/blog/${file}`, 'utf8').split('\n---\n')[0];
  const date = (key) => fm.match(new RegExp(`^${key}:\\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})`, 'm'))?.[1];
  lastmodBySlug.set(file.replace(/\.md$/, ''), date('dateModified') ?? date('date'));
}

export default defineConfig({
  site: 'https://prismaclad.com',
  integrations: [
    sitemap({
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)\/$/)?.[1];
        const lastmod = slug && lastmodBySlug.get(slug);
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        return item;
      },
    }),
  ],
});
