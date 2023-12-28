import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import svg from '@poppanator/sveltekit-svg'

const env = loadEnv('all', process.cwd())

export default defineConfig({
  plugins: [svelte(), svg()],
  resolve: {
    alias: {
      '@': path.resolve('src/renderer'),
    },
  },
  root: path.resolve(path.resolve(), 'src/renderer'),
  base: './',
  server: {
    port: parseInt(env.VITE_PORT || '8712'),
  },
  build: {
    outDir: '../../build/renderer',
  },
})
