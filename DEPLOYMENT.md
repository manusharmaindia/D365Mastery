# GitHub Pages & Custom Domain Deployment Guide

This guide provides step-by-step instructions for deploying the **D365 Mastery** website (`d365mastery.com`) to **GitHub Pages** using **GitHub Actions**.

---

## 1. Prerequisites
- A GitHub repository (e.g. `github.com/your-username/d365mastery` or `github.com/d365mastery/d365mastery.github.io`).
- Domain management access for `d365mastery.com` (GoDaddy, Namecheap, Cloudflare, AWS Route 53, etc.).

---

## 2. GitHub Pages Repository Configuration

1. In your GitHub repository, navigate to **Settings > Pages**.
2. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (do **not** select "Deploy from a branch").
3. Once set to GitHub Actions, the included `.github/workflows/deploy.yml` workflow will automatically trigger on any push to the `main` branch.

---

## 3. Custom Domain Configuration in GitHub

1. In your GitHub repository, go to **Settings > Pages > Custom domain**.
2. Type: `d365mastery.com`.
3. Click **Save**.
   - GitHub creates or updates the `CNAME` file in the root. (Note: `public/CNAME` is already present in this project with `d365mastery.com`, so Astro will always generate it into `dist/CNAME` during builds).
4. Check **Enforce HTTPS** (this option becomes selectable after DNS records propagate, usually 10–30 minutes).

---

## 4. DNS Records Setup (Domain Registrar)

Log into your DNS provider (e.g., Cloudflare, GoDaddy, Google Domains / Squarespace, Namecheap) and configure the following DNS records:

### Apex Domain (`d365mastery.com`)
Create **4 Apex A Records** pointing to GitHub Pages IP addresses:

| Type | Name / Host | Target IP Address | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (or empty) | `185.199.108.153` | 3600 (or Auto) |
| **A** | `@` (or empty) | `185.199.109.153` | 3600 (or Auto) |
| **A** | `@` (or empty) | `185.199.110.153` | 3600 (or Auto) |
| **A** | `@` (or empty) | `185.199.111.153` | 3600 (or Auto) |

### Subdomain (`www.d365mastery.com`)
Create a **CNAME record** to redirect `www` traffic to your apex domain or your GitHub username:

| Type | Name / Host | Value / Destination | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `<your-github-username>.github.io` (or `d365mastery.com`) | 3600 (or Auto) |

---

## 5. Automated CI/CD Workflow (`.github/workflows/deploy.yml`)

The repository includes a ready-to-use GitHub Actions workflow that:
1. Triggers on every commit pushed to `main`.
2. Sets up Node.js 20.
3. Installs dependencies using `npm ci`.
4. Runs `npm run build` to generate static production assets in `./dist`.
5. Uploads the `./dist` artifact to GitHub Pages.
6. Deploys with zero downtime.

---

## 6. Verification Checklist
- [ ] Visit `https://d365mastery.com` and verify SSL padlock is active.
- [ ] Visit `https://www.d365mastery.com` and verify it redirects cleanly to `https://d365mastery.com`.
- [ ] Verify `https://d365mastery.com/robots.txt` is accessible.
- [ ] Verify `https://d365mastery.com/sitemap-index.xml` renders all URLs correctly.
- [ ] Test form submission on `/contact`.
