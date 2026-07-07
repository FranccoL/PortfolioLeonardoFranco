import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path' // <-- Importamos o utilitário de caminhos

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // <-- Dizemos que @ significa a pasta src
    },
  },
});