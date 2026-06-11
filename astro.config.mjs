// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lumax.lat',
  output: 'server',
  integrations: [react(), sitemap()],

  adapter: node({
    mode: 'standalone'
  })
});