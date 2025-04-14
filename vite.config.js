// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fastapi2/', // <-- very important for GitHub Pages
  plugins: [react()],
});

