import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: fileURLToPath(new URL('./index.js', import.meta.url))
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./index.js', import.meta.url))
    }
  }
})
