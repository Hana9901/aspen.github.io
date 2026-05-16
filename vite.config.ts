import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub project Pages: https://<user>.github.io/<repo>/
// Match your repository name (this repo: Aspen.github.io).
const ghPages = process.env.GH_PAGES === '1'
const pagesBase = '/Aspen.github.io/'

// https://vite.dev/config/
export default defineConfig({
  base: ghPages ? pagesBase : '/',
  plugins: [react(), tailwindcss()],
  build: ghPages
    ? {
        outDir: 'docs',
        emptyOutDir: true,
      }
    : undefined,
})
