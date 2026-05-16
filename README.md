# Aspen_personal_web

Product-manager portfolio frontend: Vite + React + TypeScript, editorial Stitch-inspired UI, CRT intro, GSAP target cursor.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run build:pages   # static site → ./docs for GitHub Pages
npm run lint
npm run preview
```

## GitHub Pages (`Aspen.github.io` repo)

This project is set up as a **[project site](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)** (repo name `Aspen.github.io`). The live URL is:

**`https://hana9901.github.io/Aspen.github.io/`**  
(GitHub may normalize casing in the path; use the URL shown under **Settings → Pages**.)

### Repo settings

1. Push the **`main`** branch to [`Hana9901/Aspen.github.io`](https://github.com/Hana9901/Aspen.github.io).
2. In the repo on GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose **`main`** and folder **`/docs`** (see [configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)).
5. After the first deployment, Pages shows the canonical site URL.

### Build output

- `npm run build:pages` runs `vite` with **`base: /Aspen.github.io/`**, writes **`docs/`**, duplicates **`docs/index.html` → `docs/404.html`** so client-side routes work on refresh, and adds **`docs/.nojekyll`** so Pages does not run Jekyll on static assets.

If assets 404 after deploy, confirm the **`base`** in [`vite.config.ts`](vite.config.ts) matches your repository name/path exactly as GitHub resolves it.

## Stack

- [Vite](https://vite.dev) + [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- [Tailwind CSS v4](https://tailwindcss.com)
- `react-router-dom`, `gsap`
