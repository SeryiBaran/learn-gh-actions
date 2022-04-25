import { defineConfig } from 'vite';
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/learn-gh-actions/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
