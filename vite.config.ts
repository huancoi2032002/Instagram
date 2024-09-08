import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Thay vì require, hãy dùng import
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss, // Sử dụng Tailwind CSS plugin đúng cách
      ],
    },
  },
});
