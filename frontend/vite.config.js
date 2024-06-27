// vite.config.js
import { defineConfig } from 'vite';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    postcss({
      plugins: [
        tailwindcss,
        autoprefixer,
        // other postcss plugins if needed
      ],
    }),
  ],
});
