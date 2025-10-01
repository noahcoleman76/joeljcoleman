# joeljcoleman.com — React + Vite + Tailwind

A fast, clean starter for Joel J. Coleman school & district consulting.

## Prereqs
- Node.js 18+
- Git & GitHub account

## Local Dev
```bash
npm install
npm run dev
```

Visit the printed local URL (usually http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```

## Create GitHub Repo & Push

Replace `YOUR_GH_USERNAME` with your GitHub username and run:

```bash
git init
git add -A
git commit -m "Initial commit: joeljcoleman.com starter"
git branch -M main
gh repo create YOUR_GH_USERNAME/joeljcoleman --public --source . --remote origin --push
# or, manually create a repo on GitHub named 'joeljcoleman', then:
# git remote add origin https://github.com/YOUR_GH_USERNAME/joeljcoleman.git
# git push -u origin main
```

If you don't have the GitHub CLI (`gh`), install it or create the repo via the GitHub UI.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds and deploys the static site to Pages.
After pushing to GitHub:

1. In your repository, go to **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push to `main`. The workflow will build and publish automatically.
3. Your site will be available at `https://YOUR_GH_USERNAME.github.io/joeljcoleman/`.
   - If you later use a custom domain (e.g., `joeljcoleman.com`), add your DNS `A`/`CNAME` records and set **Settings → Pages → Custom domain** accordingly.

If you publish to a subpath (like `.../joeljcoleman/`), Vite should work with the included config. If you use a **custom domain** root, no change is needed.

## Customization
- Edit content in `src/components/*`
- Brand colors live in `tailwind.config.js`
- Replace `/public/favicon.svg` and update metadata in `index.html`

## Contact form
The contact form is set with `data-netlify="true"` for quick Netlify use. For other hosts, wire it to your backend or a form service.
