# D365 Mastery — Enterprise Dynamics 365 F&O Consulting Website

[![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg)](https://tailwindcss.com)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-22C55E.svg)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**D365 Mastery** (`d365mastery.com`) is a modern enterprise consulting and thought leadership website built for a Microsoft Dynamics 365 Finance & Operations consulting startup. It generates high-value consulting leads, establishes industry authority, and showcases deep architectural and engineering expertise.

---

## 🌟 Key Highlights

- **Framework**: [Astro](https://astro.build) (Static Site Generation, zero runtime JS payload, lightning-fast TTFB).
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with Microsoft enterprise color palette (`#0078D4`, `#0F172A`, `#22C55E`).
- **Hosting**: GitHub Pages with automated CI/CD via GitHub Actions (`.github/workflows/deploy.yml`).
- **Domain**: `d365mastery.com` (with `CNAME` and apex DNS support).
- **SEO & Schema**: Comprehensive JSON-LD structured data (`Organization`, `ProfessionalService`, `BlogPosting`, `BreadcrumbList`), OpenGraph tags, Twitter Cards, `sitemap.xml`, and `robots.txt`.
- **Content Engine**: Astro Content Collections (`src/content/blog/`) with markdown, type safety, reading times, and category filtering.
- **Zero Cost & No Backend**: 100% static hosting on GitHub Pages with zero paid third-party dependencies.

---

## 📁 Project Architecture

```
d365-mastery/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages deployment workflow
├── public/
│   ├── CNAME                     # Custom domain: d365mastery.com
│   ├── favicon.svg               # SVG brand favicon
│   └── robots.txt                # Search crawler rules & sitemap reference
├── src/
│   ├── components/
│   │   ├── BlogCard.astro        # Post teaser card with tags and reading time
│   │   ├── ContactForm.astro     # Client-side validated consultation request form
│   │   ├── Footer.astro          # Enterprise footer with services & links
│   │   ├── Header.astro          # Sticky responsive header with mobile drawer
│   │   ├── IndustryCard.astro    # Industry-specific playbook card
│   │   ├── LeadCaptureCTA.astro  # Reusable conversion CTA banner
│   │   ├── SEO.astro             # Complete SEO meta tags & Schema.org JSON-LD
│   │   └── ServiceCard.astro     # 12 detailed D365 service cards
│   ├── content/
│   │   ├── blog/                 # 8 comprehensive sample technical articles
│   │   └── config.ts             # Content collection schema with Zod
│   ├── layouts/
│   │   └── BaseLayout.astro      # Main HTML page shell
│   ├── pages/
│   │   ├── index.astro           # Enterprise Home page
│   │   ├── services.astro        # 12 specialized D365 service offerings
│   │   ├── industries.astro      # 6 industry solutions (Manufacturing, Retail, etc.)
│   │   ├── blog/
│   │   │   ├── index.astro       # Blog listing with category filters
│   │   │   └── [...slug].astro   # Dynamic article page with related posts
│   │   ├── about.astro           # Principal Architect profile & global reach
│   │   ├── contact.astro         # Consultation booking & direct channels
│   │   └── 404.astro             # Friendly 404 error page
│   └── styles/
│       └── global.css            # Typography, custom utilities, and scrollbar
├── astro.config.mjs              # Astro configuration with Tailwind and Sitemap
├── tailwind.config.mjs           # Tailwind theme configuration
├── tsconfig.json                 # TypeScript strict configuration
├── package.json                  # Scripts and dependencies
├── DEPLOYMENT.md                 # Step-by-step GitHub Pages deployment guide
└── ROADMAP.md                    # Strategic product roadmap for future additions
```

---

## 🚀 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

3. **Build Static Production Bundle**:
   ```bash
   npm run build
   ```
   The production-ready static files will be compiled into the `dist/` directory.

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📄 Pages Included

1. **Home (`/`)**: Enterprise hero with clear 5-second value proposition, trust signals, core services preview, industry alignment, featured technical articles, and conversion CTAs.
2. **Services (`/services`)**: All 12 specialized D365 F&O practice areas (Implementation, Architecture, X++, DMF, Integrations, Optimization, Analytics, Upgrades, Support, Managed Services, Health Check, Advisory).
3. **Industries (`/industries`)**: 6 vertical domains: Manufacturing, Retail & Commerce, Distribution & Logistics, Supply Chain, Wholesale Trade, and Professional Services.
4. **Blog (`/blog`)**: Complete technical knowledge hub with category filters and 8 in-depth articles.
5. **About (`/about`)**: Authoritative Principal Consultant profile, engineering pillars, delivery methodology, and global footprint (India hub serving US, EMEA, APAC).
6. **Contact (`/contact`)**: Client-side validated consultation request form, direct email, LinkedIn links, and consultation FAQ.

---

## 🛠️ GitHub Pages Deployment

For custom domain configuration, DNS records, and GitHub Actions details, refer to [DEPLOYMENT.md](DEPLOYMENT.md).

For planned architectural expansions (Case Studies, ERP Assessment Tools, Templates), refer to [ROADMAP.md](ROADMAP.md).
