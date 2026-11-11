import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const essays = defineCollection({ loader: glob({ pattern: '**/*.mdx', base: './src/content/essays' }), schema: z.object({ title: z.string(), description: z.string(), date: z.coerce.date(), status: z.enum(['draft','published']).default('draft'), chapter: z.number().int().positive(), sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]) }) });
export const collections = { essays };
