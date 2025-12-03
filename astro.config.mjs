// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sporteveryday.github.io', // REPLACE_ME: Your GitHub Pages URL
  base: '/my-profile', // REPLACE_ME: Your repository name
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
