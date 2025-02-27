import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        whatscbd: path.resolve(__dirname, 'whats-cbd.html'),
        testimonial: path.resolve(__dirname, 'testimonial.html'),
        quality: path.resolve(__dirname, 'quality.html'),
        help: path.resolve(__dirname, 'help.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
});


