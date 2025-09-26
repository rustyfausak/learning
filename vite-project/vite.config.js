import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/learning/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        part1: resolve(__dirname, 'part1.html'),
        part2: resolve(__dirname, 'part2.html'),
        part3: resolve(__dirname, 'part3.html'),
        part4: resolve(__dirname, 'part4.html'),
        part5: resolve(__dirname, 'part5-tenzies.html'),
        part6: resolve(__dirname, 'part6-pipes.html'),
      },
    },
  },
});
