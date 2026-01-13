// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-seccion-10-y-18-devtalles.gusadriarg.workers.dev',

  // adapter: node({
  //   mode: 'standalone',
  // }),
  integrations: [mdx(), sitemap()],

  adapter: cloudflare(),
});