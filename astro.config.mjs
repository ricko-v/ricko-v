// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rickoveriyanto.my.id',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
