import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/dashboard/dashboard.tsx',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build:{
    target:'exnext',
    minify: false, // Disable minification for easier debugging
    cssCodeSplit: false, // Enable CSS code splitting
  }
})
