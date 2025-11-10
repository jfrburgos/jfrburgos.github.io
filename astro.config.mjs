// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jfrburgos.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
    shikiConfig: {
      theme: 'catppuccin-macchiato',
    },
  },
});
