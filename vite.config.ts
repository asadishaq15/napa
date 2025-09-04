import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'auth-remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Template': './src/pages/template.tsx',   
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5003,
    strictPort: true
  }
});