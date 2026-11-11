import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({ site: process.env.SITE_URL || 'https://the-unfinished-creator.pages.dev', integrations: [mdx()], output: 'static' });
