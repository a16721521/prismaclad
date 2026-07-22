# Prismaclad Site — Build Reference

> **⚠️ MIGRATION IN PROGRESS → `astro/`**
> The site is being migrated to Astro (in `Clone1/astro/`). All 20 live pages + the blog
> (4 real posts as a content collection) are ported and verified. New work should target
> `astro/src/` — the flat HTML pages below are the legacy source, kept until cutover.
> Build: `cd astro && npm run build` (telemetry disabled in scripts). Preview: launch config
> "Astro" serves `astro/dist` on :4322 (the pane can't spawn node — rebuild before previewing).
> Routes are clean URLs (`/process/site-survey/` etc.) — see `astro/src/pages/`. Blog posts =
> `astro/src/content/blog/*.md`. Contact form posts to `/api/contact` (Cloudflare Worker, TBD).
>
> **SEO/AEO:** all Astro buildout work follows **`PRISMACLAD-SEO-AEO.md`** — URL map,
> query clusters, schema spec, content rules, llms.txt/robots.txt, launch checklist.
> New pages and posts must map to a query cluster and pass its content rules (§5).


## What This Site Is

**Prismaclad** sells large-scale facade treatments for data centers and industrial buildings — painted or vinyl-applied exterior graphics that satisfy aesthetic zoning requirements at a cost closer to landscaping than architecture. The site is a static HTML export of the **Cedar** Webflow consulting template, rebranded and extended for Prismaclad's market.

**Live site home:** `prismaclad.html` (fully rebranded). `index.html` is the untouched Cedar original — do not edit it.

---

## Brand Tokens

| Token | Value |
|---|---|
| Primary typeface | **Geist** (sans) |
| Accent typeface | **Doto** (dot-matrix LED, weight 700) — numbered process steps / accent motif |
| Accent orange | `#de3719` |
| Near-black text | `#111210` |
| Logo (navbar + footer) | `Branding/logo_long.png` — `height:17px; width:auto` |
| Corner style | Sharp / minimal |
| Tone | Direct, technical, no marketing fluff |

---

## Build System

**Always run after editing any partial:**

```
python3 build.py
```

### How it works

- **`partials/nav.html`** — full nav bar markup
- **`partials/footer.html`** — full footer markup
- **`partials/head.html`** — one `<link>` tag pointing to `assets/prismaclad.css`
- **`assets/prismaclad.css`** — all shared styles (brand orange, nav dropdowns, badge hide, blog card heights). **Style-only edits need NO rebuild — just refresh.**
- **`build.py`** — injects all three partials into every live page, keeps the render-fix script, and regenerates `all-pages.html`. Idempotent: re-run = 0 changes.

### Before running `build.py`

**Always confirm with the user before running `build.py`.** It propagates partial changes to all 31 live pages at once. The correct workflow is:

1. Make the change in **one page only** (e.g. `prismaclad.html`) to test it.
2. Show the user and wait for confirmation.
3. Only then edit the relevant partial (`partials/nav.html`, `partials/footer.html`, etc.) and run `build.py`.

Do not skip step 1–2 even when the change is "obviously" a partial edit.

### `{{BASE}}` token

Use `{{BASE}}` in partials for root-relative paths. Build fills in `../` per directory depth automatically.

### Injection landmarks (do not remove from any live page)

- Nav injects between `<div class="page-wrapper">` and `<div class="main-wrapper">`
- Footer replaces the `<footer>` element
- Both wrapped in `<!--PC:NAV-->` / `<!--PC:FOOTER-->` markers after build

### Pending pages (build skips these — not yet wired into the core site)

Pages that exist but aren't linked from prismaclad.html. Build skips them until they're explicitly wired in and moved out of `PENDING` in `build.py`:
- Legacy Cedar ESG blog posts (6 posts + tracker)
- `blog-category/stakeholder-engagement.html`
- `case-study/*.html` (5 Cedar ESG case study sub-pages)

When a pending page gets wired in, remove it from `PENDING` in `build.py`.

### Parked pages (build skips these — do not inject chrome)

Cedar template pages kept for reference but not part of the live site:
`index.html`, `home-v2.html`, `home-v3.html`, `blog-pages/blog-v2.html`, `blog-pages/blog-v3.html`, `contact-pages/contact-v2.html`, `contact-pages/contact-v3.html`, `checkout.html`, `paypal-checkout.html`, `order-confirmation.html`, `product/essential.html`, `product/growth.html`, `product/partner.html`, `category/retainer-plans.html`, `search.html`, `user-pages/sign-in.html`, `user-pages/sign-up.html`

---

## Site Structure

```
prismaclad.html              ← HOME (live, fully rebranded)
approach/
  the-problem.html
  the-solution.html
company-pages/
  about.html
  services.html
  case-studies.html
service/                     ← 5 process step sub-pages (Cedar ESG filenames — legacy only; Astro uses clean slugs per PRISMACLAD-SEO-AEO.md §2)
  esg-strategy-integration.html        → "Site Survey & Assessment"
  sustainability-reporting-disclosure.html → "Design Development"
  carbon-footprint-net-zero.html       → "Production"
  regulatory-compliance-risk.html      → "Installation"
  stakeholder-engagement.html          → "Portfolio Scale"
case-study/                  ← 5 case study pages (Cedar ESG content — needs rewrite)
blog-pages/
  blog-v1.html               ← THE live blog listing (only this one is live)
blog-post/                   ← Individual post pages
  data-centers-ugly-zoning-problem.html    (Apr 27, 2026) ← TEMPLATE for new posts
  google-data-center-murals-what-it-proved.html (May 7, 2026)
  [5 legacy Cedar ESG posts — to be replaced]
blog-category/
  stakeholder-engagement.html
contact-pages/
  contact-v1.html            ← live contact page (v2, v3 parked)
pricing-pages/
  pricing-ecommerce.html     ← currently linked as "Portfolio" in nav
legal/
  privacy-policy.html
  terms-of-service.html
partials/                    ← SOURCE OF TRUTH for chrome
assets/                      ← CSS, JS, fonts, images
Branding/                    ← logo files
all-pages.html               ← internal dev directory, regenerated by build.py
```

---

## Nav Structure (live, source: `partials/nav.html`)

```
[Logo] → prismaclad.html

Approach ▾
  label: "The Approach"
  The Problem     → approach/the-problem.html
  The Solution    → approach/the-solution.html
  Our Process     → company-pages/services.html

Resources ▾
  label: "Insights & Work"
  Blog            → blog-pages/blog-v1.html
  Case Studies    → company-pages/case-studies.html
  Portfolio       → pricing-pages/pricing-ecommerce.html

About ▾
  label: "Company"
  Our Story       → company-pages/about.html
  Contact         → contact-pages/contact-v1.html

[Get in touch]  → contact-pages/contact-v1.html  (orange button)
```

Nav dropdowns are pure-CSS (`.pc-dd` / `.pc-dd-panel` / `.pc-dd-chev` classes in `assets/prismaclad.css`). No Webflow dropdown JS.

---

## Blog System

### Listing page: `blog-pages/blog-v1.html`

Two distinct sections:
1. **Featured hero card** — `data-wf--blog-card--variant="featured"`, sits above the grid. Editorial slot — currently points to the *Beyond Compliance* post (Cedar ESG placeholder). Should be updated to the newest real Prismaclad post once more are published.
2. **3-column grid** — `class="grid _3cols w-dyn-items"`, 8 cards, sorted newest-first by date.

Cards use `data-category="Regulation"` (or other category) for the client-side JS filter tabs.

Card meta format: `Category • Date • N min read`

### Blog post template: `blog-post/data-centers-ugly-zoning-problem.html`

**Always clone this file** when adding a new post. Key elements to update:
- `<title>`, meta description, OG/Twitter tags, `article:published_time` (ISO date)
- Breadcrumb category (`<a class="breadcrumb-link">`)
- Read time (`.blog_read-time > .body-sm`)
- Author byline date format: `Month D, YYYY` (e.g. `May 7, 2026`)
- `<h1>` title and subtitle `<p class="text-color-subtle">`
- Hero image `<img>` in `.blog_image-wrapper`
- Body content in `<div class="text-rich-text w-richtext">` — supports `<h2>`, `<p>`, `<blockquote>`, `<figure>/<img>/<figcaption>`
- CTA section `<h2>` and `<p>` text in `.cta_wrapper`

After creating the post file, add a matching card to the grid in `blog-pages/blog-v1.html` (copy an existing card block, update href, image, category, date, read time, title, excerpt). Keep the grid sorted newest-first.

### Published post dates

| Slug | Date |
|---|---|
| google-data-center-murals-what-it-proved | May 7, 2026 |
| data-centers-ugly-zoning-problem | Apr 27, 2026 |
| building-stakeholder-trust-transparent-esg-communication | Apr 15, 2026 |
| hidden-cost-greenwashing-reputational-financial-risks | Apr 3, 2026 |
| beyond-compliance-sustainability-reporting-competitive-advantage | Mar 20, 2026 |
| board-climate-risk-credible-response-guide | Mar 6, 2026 |
| mid-market-esg-gap-sustainability-strategy | Feb 20, 2026 |
| csrd-preparation-checklist-mid-market-companies | Feb 6, 2026 |

---

## CSS Architecture

**`assets/prismaclad.css`** — edit directly, no rebuild needed.

Sections:
- Brand orange CSS vars (`--primary--orange`, `--button-orange--orange-background`)
- Nav dropdown styles (`.pc-dd*`) — pure CSS hover, mobile collapse
- Webflow badge hide (`.w-webflow-badge`)
- Blog card uniform image height: `.blog_img-wrapper:not([class*="w-variant"]) { height:300px }` — scoped to avoid breaking the featured card variant
- Blog post inline figures: `.text-rich-text figure { max-width:100% }`
- Blog post floating TOC (`.pc-toc`) — visible ≥1100px, JS-controlled fade

**Webflow CSS** lives in `assets/cedar-consulting-template.webflow.shared.*.css` — do not edit.

---

## Technical Gotchas

### Blank-render bug (critical)
Webflow's `webflow.js` often fails to add `w-mod-ix3` on the static export. Without it, the CSS rule `html.w-mod-js:not(.w-mod-ix3) :is([animate="item"],…){visibility:hidden}` hides all page content. **Every live page must have the render-fix script** immediately before `</body>`:

```html
<script id="pc-render-fix">(function(){var h=document.documentElement;function r(){if(!h.classList.contains("w-mod-ix3"))h.classList.add("w-mod-ix3");}window.addEventListener("load",function(){setTimeout(r,800);});setTimeout(r,2000);})();</script>
```

`build.py` injects this automatically. If adding a page manually, include it.

### Relative paths
All pages use `../` relative paths (not root-relative `/`). Depth is computed by `build.py` via `{{BASE}}`. A page at `blog-post/foo.html` uses `../assets/`, `../Branding/`, etc.

### Local testing
The browser hard-caches `file://`. Serve locally with:
```
python3 -m http.server 8080
```
Then bust cache with `?v=N` query params. (Requires sandbox off to bind localhost.)

### Webflow attrs to keep
Keep `data-wf-*` attrs, `w-mod` classes, and all `webflow.js` / `webflow.achunk.*.js` script references — these run the animations and form logic. Do not strip them.

---

## Page Content Status

| Page | Content | Title |
|---|---|---|
| `prismaclad.html` | ✅ Rebranded | ✅ |
| `approach/the-problem.html` | ✅ Rebranded | ✅ |
| `approach/the-solution.html` | ✅ Rebranded | ✅ |
| `blog-pages/blog-v1.html` | ✅ Live (grid rebranded) | ✅ |
| `blog-post/data-centers-ugly-zoning-problem.html` | ✅ Prismaclad content | ✅ |
| `blog-post/google-data-center-murals-what-it-proved.html` | ✅ Prismaclad content | ✅ |
| `contact-pages/contact-v1.html` | ✅ Wired (Formspree) | needs update |
| `company-pages/about.html` | ⬜ Cedar ESG copy | needs update |
| `company-pages/services.html` | ⬜ Cedar ESG copy | needs update |
| `company-pages/case-studies.html` | ⬜ Cedar ESG copy | needs update |
| `service/esg-strategy-integration.html` | ⬜ Cedar — rebrand to Site Survey | needs update |
| `service/sustainability-reporting-disclosure.html` | ⬜ Cedar — rebrand to Design Development | needs update |
| `service/carbon-footprint-net-zero.html` | ⬜ Cedar — rebrand to Production | needs update |
| `service/regulatory-compliance-risk.html` | ⬜ Cedar — rebrand to Installation | needs update |
| `service/stakeholder-engagement.html` | ⬜ Cedar — rebrand to Portfolio Scale | needs update |
| `case-study/*` (5 pages) | ⬜ Cedar ESG — rewrite to facade/data-center projects | needs update |
| `blog-post/*` (5 legacy ESG posts) | ⬜ Cedar placeholder — replace or remove | needs update |
| `pricing-pages/pricing-ecommerce.html` | ⬜ Ecommerce template — repurpose as Portfolio | needs update |
| `legal/*` | ⬜ Cedar | needs update |

---

## Open Decisions

1. **Canonical home** — `prismaclad.html` is the live home, but clean root routing would want `index.html`. Decide before final deploy.
2. **Ecommerce pages** — `checkout.html`, `paypal-checkout.html`, `order-confirmation.html`, `product/*`, `category/retainer-plans.html`, `search.html`, `user-pages/*` are all parked Cedar pages. Delete outright or keep any for repurposing?
3. **Featured blog hero card** — currently points to a Cedar ESG post. Swap to newest Prismaclad post when updating `blog-v1.html`.
4. **Blog categories** — only `Regulation` exists as a real category. Medium article tags include Data Center / Architecture / Urban Planning — none yet exist as filter tabs.

---

## Assets

**Prismaclad images** (prefixed `pc-` — the real site assets):
- `assets/pc-datacenter-exterior-hero.avif` — aerial data center campus
- `assets/pc-datacenter-screening-trees.jpeg` — Leyland cypress screening failure (Photo: Greg Kahn)
- `assets/pc-google-mural-datacenter.jpeg` — Google mural program (Photo: Google)
- `assets/pc-geometric-facade-treatment.png` — geometric facade treatment
- `assets/pc-problem-installation.jpg` — installation photo

**Brand files** (`Branding/`):
- `logo_long.png` — horizontal lockup used in nav + footer
- `Logo_black.png`, `Logo_white.png` — icon-only variants
- `Branding/OpenGraph.png` — OG image

All other `assets/6a*` images are Cedar template stock — use only if they fit; eventually replace.

---

## Social Links

- X: https://x.com/prismaclad
- LinkedIn: https://www.linkedin.com/company/prismaclad/
- Instagram: https://www.instagram.com/prismaclad/
- Medium: https://medium.com/@prismaclad

## Contact / Company Info

- Email: hello@prismaclad.com
- Phone: +1 (555) 900-2400 ← placeholder, update before launch
