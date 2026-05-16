import { copyFileSync, existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const docDir = join(root, 'docs')
const index = join(docDir, 'index.html')
const notFound = join(docDir, '404.html')

if (!existsSync(index)) {
  console.error('docs/index.html missing — run vite build with GH_PAGES=1 first.')
  process.exit(1)
}

copyFileSync(index, notFound)
writeFileSync(join(docDir, '.nojekyll'), '')
console.log('Wrote docs/404.html and docs/.nojekyll (SPA + disable Jekyll on Pages).')
