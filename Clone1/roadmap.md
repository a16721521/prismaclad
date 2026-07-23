# Prismaclad Site — Rebrand Roadmap

Migrating a **Cedar** ESG/consulting Webflow template (static export) into the
**Prismaclad** site — industrial facade treatments (large-scale painted exterior
graphics for data centers / industrial buildings).

**SEO/AEO plan of record: `PRISMACLAD-SEO-AEO.md`** — URL map, query clusters,
schema spec, content rules, launch checklist. All new pages/posts follow it;
implementation happens in the Astro port, not the Webflow export.

**Home page of record:** `prismaclad.html` (fully rebranded). `index.html` is the
untouched Cedar home.

---

## Brand system (reference)

| Token | Value |
|---|---|
| Primary font | **Geist** (sans) |
| Highlight font | **Doto** (dot-matrix LED font, wt 700) — the numbered-process / accent motif |
| Accent orange | `#de3719` |
| Near-black text | `#111210` |
| Logo | `Branding/logo_long.png` |
| Corners | sharp / minimal |

**Nav (canonical):** `Services ▾ · Resources ▾ · About ▾` + `Get in touch` CTA; Home via logo.
- **Services ▾** (label "Our Process" → `company-pages/services.html`): Site Survey, Design, Production, Installation
- **Resources ▾** (label "Insights & Work" → `blog-pages/blog-v1.html`): Perspectives, Case Studies, Portfolio
- **About ▾** (label "Company" → `company-pages/about.html`): Our Story, Contact

Implementation: scoped `<style id="pc-nav-dd">` + `.pc-dd` markup, pure-CSS hover, no Webflow dropdown JS.

---

## Done

- ✅ `prismaclad.html` — home rebranded (video hero, copy, services, case studies, FAQ, footer)
- ✅ Blog category filtering — client-side JS on `blog-pages/blog-v1.html` (tabs filter cards; `blog-category/stakeholder-engagement.html` tabs deep-link back with `#Category`)
- ✅ 3-dropdown nav + cart removal on **3 pages**: `prismaclad.html`, `blog-pages/blog-v1.html`, `blog-category/stakeholder-engagement.html`
- ✅ Render-blank fix on the 2 blog pages + `contact-pages/contact-v1.html`
- ✅ **Webflow branding stripped site-wide (all 43 pages):** removed "created in Webflow" comment + `generator` meta; hid runtime "Made in Webflow" badge (CSS); footer credit "Made by Flowversity / Made in Webflow" → `© Prismaclad 2026`; "Buy Cedar/Template" buttons + `webflow.com/templates` links → "Get in touch" → contact; titles/OG/alt "…Cedar - Webflow …template" → "… | Prismaclad"; JSON-LD Webflow description + marketplace URL cleaned; `…webflow.io` domain → `prismaclad.com`. Kept functional bits (`webflow.js`, `w-mod`/`data-wf` attrs, CSS/JS filenames).

---

## Build system — single-source chrome ✅ DONE

Editing 26 pages by hand is over. Shared chrome now lives in one place:

- **`assets/prismaclad.css`** — all shared styling (nav dropdowns, brand orange, hide Webflow badge). **Style-only changes need NO rebuild** — edit the CSS and refresh. Linked into every page via `partials/head.html`.
- **`partials/nav.html`** · **`partials/footer.html`** · **`partials/head.html`** — shared markup (head partial is just the `<link>` to the CSS). Edit once, then run the build. Use `{{BASE}}` for the site-root-relative prefix (build fills it per page depth).
- **`build.py`** — run `python3 build.py` to inject partials into every live page, keep the render-fix script present, and regenerate `all-pages.html`.

**Which file do I edit?** Styling (colors, spacing, dropdown look) → `assets/prismaclad.css` (no build). Structure (links, labels, logo, adding a nav item) → the relevant `partials/*.html`, then `python3 build.py`.
- Idempotent (re-run = 0 changes), self-heals a malformed `</footer`, skips the 17 parked pages.
- Injection landmarks: nav = between `<div class="page-wrapper">` and `<div class="main-wrapper">`; footer = the `<footer>` element; both wrapped in `<!--PC:NAV-->`/`<!--PC:FOOTER-->` markers.

## Phase 1 — Global nav + chrome rollout ✅ DONE (via build)

Ran across all 26 live pages:
- [x] 3-dropdown nav (Services/Resources/About + "Get in touch")
- [x] Webflow cart widget removed (empty `nav_right`)
- [x] Prismaclad logo `Branding/logo_long.png`
- [x] Render fallback script (force `w-mod-ix3`) — previously-blank pages (about, services, etc.) now render
- [x] Footer single-sourced (© Prismaclad 2026, Portfolio/Clients labels)
- [x] Per-directory `../` depth handled via `{{BASE}}`

## Phase 2 — Page content rebrand (per-page copy)

- [ ] **Core pages:** `company-pages/about.html`, `services.html`, `case-studies.html` — rewrite Cedar ESG copy → facade-treatment
- [ ] **Service sub-pages (5)** — retitle from ESG names → Prismaclad process. NOTE filename↔label mismatch (kept for stable links):
  - `service/esg-strategy-integration.html` → **Site Survey & Assessment**
  - `service/sustainability-reporting-disclosure.html` → **Design Development**
  - `service/carbon-footprint-net-zero.html` → **Production**
  - `service/regulatory-compliance-risk.html` → **Installation**
  - `service/stakeholder-engagement.html` → **Portfolio Scale**
- [ ] **Case-study sub-pages (5)** — rewrite ESG case studies → facade / data-center projects
- [ ] **Contact pages** — rebrand `contact-v1/v2/v3` + wire form (see open decisions)
- [ ] **Blog** — `blog-v2.html`, `blog-v3.html`, and 6 `blog-post/*` articles (Cedar ESG copy). First real Prismaclad article published: `blog-post/data-centers-ugly-zoning-problem.html` (from Medium), listed on `blog-v1.html` under a new **Regulation** category. Remaining blog listing categories + hero copy still Cedar ESG.
- [ ] Decide fate of `home-v2.html`, `home-v3.html`, `index.html`

## Blog internal-linking / template roadmap

Goal: increase internal linking to distribute authority across posts and build
topic clusters (Regulation, Landscaping vs Architecture, Precedent, Timing).
Referenced pattern: [usialaw.com/articles/eb2-india-unavailable](https://usialaw.com/articles/eb2-india-unavailable) — related-content module + persistent sidebar CTA.

- [ ] **Tier 1 — Inline "Related reading" module** at the end of every blog post, before the CTA section. Two or three curated cards, topic-matched (Regulation → other Regulation, etc.). Reason to do first: Google reads body-content internal links more strongly than persistent sidebars; no visual disruption to the current 650px centered column. ~20 min build. **Skipped while post count is low (3);** revisit once ≥5 published so cards don't repeat.
- [ ] **Tier 2 — Sticky right-rail module,** mirroring the existing left-gutter `.pc-toc`. Only build once ≥6 posts justify it. Design cue: two symmetric gutters (TOC left, related/resources right) with the article between — an editorial layout, not an ad-hoc sidebar. Would house: related posts (2–3) + optionally an evergreen resource card (e.g. "Which counties require facade treatment" quick-reference).
- [ ] **Inline contextual links** in article body: when a phrase like "faux windows are code-compliant" appears, link it to the future dedicated post (#3 on the pipeline). This is the highest-value internal-link pattern for SEO. **Add during authoring of each new post**, and retro-add to the tracker and murals posts once #3/#5/#6/#8 exist.
- [ ] **Outbound citation links** ⏸ *shelved — revisit after content rewrites are complete* — every regulation, ordinance, quoted source, statistic, or named study cited in a post needs to link to its primary source (county code Municode page, ordinance PDF, agency page, industry outlet article, etc.). Reasons: (a) reader trust — the reader can verify without leaving guessing, (b) SEO — Google reads outbound-authoritative-source signals as quality indicators, (c) legal defensibility for anything paraphrased. Retro-audit needed on the four published posts: tracker (Loudoun 2023 rewrite, PWC DCOZOD, Fairfax Sep 2024 amendment, Henrico June 2025, DeKalb 2025 ordinance, Phoenix July 2025 ordinance), murals (Google mural project site + coverage), zoning-problem (Ralph Buona quote source, Mary Hart HKS quote source, Lex Coors Digital Realty quote source, urban forestry mortality research), $64B stalled projects post (Data Center Watch report, Warrenton referendum, Utah source, Hanover VA denial, Tract AZ). **Also add to authoring checklist** for all future posts.

**Explicitly skipped** (would clutter without earning value): author card (always Prismaclad, redundant), persistent sidebar CTA (nav "Get in touch" + section-end CTA already do this — a third instance reads salesy).

## Blog content pipeline (idea backlog)

New posts clone `blog-post/data-centers-ugly-zoning-problem.html`, then add a card to the
`blog-v1.html` grid (newest-first) — see `CLAUDE.md` › Blog System. **Every new post must
follow the content rules in `PRISMACLAD-SEO-AEO.md` §5** (answer-first sections, question
H2s, 1,000+ words for citation targets, 2+ primary-source outbound links, entity naming
per §6) and map to a query cluster (§1). Published so far:
`data-centers-ugly-zoning-problem` (Apr 27) · `google-data-center-murals-what-it-proved` (May 7) ·
`data-center-facade-ordinance-tracker` (Jul 21, currently the featured hero card).

**Priority order (recommended next):** #5 → #6 (kill the two biggest buyer
objections: durability + cost) → #8 (proof point, half-written already).

### Regulation & entitlement
- [x] **#1 — The Data Center Facade Ordinance Tracker** — *published Jul 21, 2026* at `blog-post/data-center-facade-ordinance-tracker.html`, featured on `blog-v1.html`. Covers Loudoun, Prince William, Fairfax, Henrico, DeKalb (GA), Phoenix (AZ). **Living document:** revisit quarterly to add new ordinances as counties adopt language — good candidates to watch: Fauquier / Culpeper / Stafford (VA), Berlin Charter Township (MI), and remaining GA counties tracked by GPB/NW Georgia News. Update the intro line ("we'll keep it current") whenever a new jurisdiction is added.
- [ ] **#2 — What "Principal Facade Treatment" Means When the County Won't Define It.** Deep-dive on the operative 2026 phrase.
- [ ] **#3 — Faux Windows Are Now Code-Compliant: Reading Fairfax's Fenestration Language.** Narrow, ownable, direct green light for surface-applied treatment.
- [x] **#4 — Why $64B in Data Center Projects Stalled — and What the Killed Ones Had in Common** — *published Jul 22, 2026* at `blog-post/why-64-billion-data-center-projects-stalled.html`, top of `blog-v1.html` grid. Sourced to the Data Center Watch report ($18B canceled / $46B delayed, 142 groups / 24 states, 55/45 R/D). Case studies: Warrenton VA referendum, Utah senate-president primary loss ("cost me the election"), Hanover VA denied 4-3 despite 40% open space, Tract AZ killed then relaunched near Buckeye airport. Thesis: killed projects shared incompatible siting + finished-plan + late engagement, not high cost. 7 outbound citations. Hero: `pc-problem-installation.jpg` (blank concrete panel wall). **Note:** hero image is a stock concrete wall — a purpose-shot community-opposition image (hearing, yard signs) would be stronger; swap when available.

### The landscaping-vs-architecture gap (core wedge)
- [ ] **#5 — The Real Lifespan of a Screening Buffer: Why Leyland Cypress Fails the Math.** Data-backed tree-mortality argument as its own post.
- [ ] **#6 — What Facade Treatment Actually Costs on a $500M Build.** Cost-as-rounding-error, made concrete; answers the CFO objection.
- [ ] **#7 — Landscaping, Redesign, or Treatment: A Decision Framework for Data Center Exteriors.** Comparison-table post for buyers in evaluation mode.

### Precedent & proof
- [ ] **#8 — PSE&G's Substation Murals: Regulatory Aesthetic Compliance at Utility Scale.** Own case study for the proof-as-code-condition point (already referenced in the zoning post).
- [ ] **#9 — How Meta, Microsoft, and Corgan Solve the Blank-Box Problem — and Why It Doesn't Scale.** The architecture exceptions and why they stay exceptions.

### Timing & process (positions as strategic partner, not vendor)
- [ ] **#10 — Treat the Building Before the Planning Board Forms an Opinion.** Entitlement-stage vs. retrofit timing argument.
- [ ] **#11 — The Planning Board Can Tell When You're Doing the Minimum.** How sophisticated boards now read applications.

### Community & market context (top-of-funnel)
- [ ] **#12 — Why Data Center Opposition Got Organized — and What Actually Changes Minds.** Shareable think-piece.
- [ ] **#13 — The Hyperscaler Build Rate Problem: Why Bespoke Doesn't Work Anymore.** Ties repeatable-methodology positioning to construction pace.

## Phase 3 — Ecommerce / template pages (decide: remove or repurpose)

Prismaclad is not ecommerce. These Cedar template pages likely get **deleted** (or repurposed):
`checkout.html`, `paypal-checkout.html`, `order-confirmation.html`, `product/*` (3),
`category/retainer-plans.html`, `search.html`, `user-pages/sign-in.html`, `sign-up.html`.
`pricing-pages/pricing-ecommerce.html` is currently linked as **Portfolio** — repurpose or replace.

## Phase 4 — SEO / AEO / meta / polish

**Superseded by `PRISMACLAD-SEO-AEO.md`** — the full plan (query clusters, URL map,
schema spec, content rules, robots/llms.txt, launch checklist). Implement in the
**Astro port only** — do not retrofit SEO onto the Webflow export. §10 of that file
is the launch gate.

- [x] Remove residual "Made in Webflow" badge / Webflow generator hints — done site-wide
- [ ] Everything else: see `PRISMACLAD-SEO-AEO.md` §10 launch checklist

---

## Open decisions (need input)

1. **Contact form endpoint** — Formspree ID? `mailto:`? something else? (form is currently `method="get"` with no `action`; old `contact.html` only had a placeholder ID)
2. ~~**Canonical home**~~ — resolved by `PRISMACLAD-SEO-AEO.md` §2: Astro serves `/` at root; the `prismaclad.html`-vs-`index.html` question dies with the Webflow export.
3. ~~**Ecommerce pages**~~ — resolved by `PRISMACLAD-SEO-AEO.md` §2: parked Cedar pages are simply not ported (no URLs, no redirects needed).

---

## Technical gotchas

- **Blank-render bug:** Webflow's `webflow.js` often fails to add `w-mod-ix3` on the static export, so `html.w-mod-js:not(.w-mod-ix3) :is(…[animate="item"]…){visibility:hidden}` hides all content. Fix = fallback script before `</body>` that force-adds `w-mod-ix3` after load. CMS pages also need `data-wf-collection`/`data-wf-item-slug` stripped from `<html>`.
- **Testing:** the in-app browser caches `file://` hard. Serve via `python3 -m http.server` (needs sandbox off to bind localhost) and hit with a `?v=N` cache-buster.

---

## Page status matrix

`nav`: NEW = 3-dropdown / old = Cedar mega-menu · `cart`: Webflow cart present · `title`: CEDAR = still Cedar · `render`: NEEDS = missing blank-render fallback

| Page | nav | cart | title | render |
|---|---|---|---|---|
| prismaclad.html | NEW | — | ok | verify |
| blog-pages/blog-v1.html | NEW | — | ok | ok |
| blog-category/stakeholder-engagement.html | NEW | — | ok | ok |
| contact-pages/contact-v1.html | old | Y | CEDAR | ok |
| index.html | old | Y | CEDAR | NEEDS |
| home-v2.html | old | Y | ok | NEEDS |
| home-v3.html | old | Y | ok | NEEDS |
| company-pages/about.html | old | Y | CEDAR | NEEDS |
| company-pages/services.html | old | Y | CEDAR | NEEDS |
| company-pages/case-studies.html | old | Y | CEDAR | NEEDS |
| service/* (5) | old | Y | CEDAR | NEEDS |
| case-study/* (5) | old | Y | CEDAR | NEEDS |
| blog-pages/blog-v2.html, blog-v3.html | old | Y | CEDAR | NEEDS |
| blog-post/* (6) | old | Y | CEDAR | NEEDS |
| contact-pages/contact-v2.html, contact-v3.html | old | Y | CEDAR | NEEDS |
| pricing-pages/pricing-ecommerce.html | old | Y | CEDAR | NEEDS |
| legal/privacy-policy.html, terms-of-service.html | old | Y | CEDAR | NEEDS |
| product/* (3), category/retainer-plans.html | old | Y | CEDAR | NEEDS |
| checkout.html, paypal-checkout.html, order-confirmation.html | old | Y | CEDAR | NEEDS |
| search.html, user-pages/sign-in.html, sign-up.html | old | Y | CEDAR | NEEDS |

**Totals:** 42 pages · 3 migrated · 39 on old nav.
