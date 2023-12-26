import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': path.resolve('src/renderer'),
    },
  },
  root: path.resolve(path.resolve(), 'src/renderer'),
  base: './',
  server: {
    port: 8712,
  }
})
