import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        whatscbd: path.resolve(__dirname, 'whats-cbd.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})