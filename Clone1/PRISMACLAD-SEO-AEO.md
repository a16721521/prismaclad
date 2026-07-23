# Prismaclad SEO / AEO / GEO Plan

The reference every page of the Astro buildout ships against. Adapted from the USIA
AEO/GEO guide (`AEO-GEO-GUIDE copy.md`) for a blue-ocean niche: **nobody else ranks
for this market, and nobody searches the category term yet.** The goal is not to
outrank competitors — there are none — it is to (a) own the adjacent problem-language
queries that already have volume, and (b) be the source AI engines cite by default
when this category's queries start arriving.

**Scope rule:** implement everything here in the **Astro port only**. Do not retrofit
any of it onto the Webflow static export — that work is discarded when the port ships.

---

## 1. Strategic frame — three query clusters

Every page must know which cluster it exists to own. If a proposed page doesn't map
to one, question why it's being built.

### Cluster A — Jurisdiction & regulation (highest intent, real volume today)
Queries like "Loudoun data center facade requirements", "principal facade treatment
ordinance", "Fairfax fenestration data center", "data center design standards
[county]". Searched by developers, land-use attorneys, zoning consultants, planners.

- **Flagship:** the ordinance tracker (`/blog/data-center-facade-ordinance-tracker/`)
  — a living document, updated quarterly, visible "Last updated" date.
- **Growth path:** per-jurisdiction pages as an Astro content collection
  (`/regulations/loudoun-county-va/`, etc.) once the tracker sections outgrow one
  page. Each must be genuinely jurisdiction-specific — ordinance text quoted, dates,
  Municode links. AI models penalize near-duplicate programmatic pages harder than
  Google does.

### Cluster B — Objection & evaluation (buyer-decision queries)
Queries like "data center screening trees cost", "Leyland cypress lifespan screening",
"data center facade cost", "landscaping vs architectural treatment". These are the
CFO/developer objections. Maps to blog pipeline #5 (lifespan), #6 (cost),
#7 (decision framework), plus `/approach/the-problem/` and `/approach/the-solution/`.

### Cluster C — Category definition (low volume now, the flag-plant)
Queries like "data center facade treatment", "data center murals", "data center
exterior graphics". Prismaclad's own content is what will create this volume. Maps to
home, `/process/`, the murals post, `/patterns/`. When the category term spreads,
the entity it resolves to must be Prismaclad.

### Cluster D — Design, pattern & art (visual discovery + press-facing)
Queries like "data center art", "data center murals", "industrial camouflage",
"building supergraphics", "warehouse exterior design", "large-scale building
graphics". Searched by architects, designers, journalists, and community members —
a different audience from clusters A–B, earlier in any funnel, and the only cluster
where **image search is a first-class channel** (Google Images / visual discovery
for "data center mural" is winnable traffic the other clusters never see).

- **Flagship:** `/patterns/` — the interactive pattern engine page (see §2) plus a
  gallery of rendered pattern work.
- Also maps to: the Google murals post, pipeline #8 (PSE&G substation murals),
  #9 (Meta/Microsoft/Corgan), #12 (community opposition think-piece), and future
  project/case-study pages.
- **Image SEO rules for this cluster:** descriptive filenames
  (`geometric-facade-pattern-data-center.png`, not `pattern_geo_seed42.svg`), real
  alt text, `ImageObject` in the page schema where a pattern/photo is the subject,
  and every gallery image served as crawlable `<img>` markup — not CSS backgrounds
  or JS-injected canvases.
- This cluster feeds §7 directly: design/art content is the shareable, press-facing
  material most likely to earn the external citations the other clusters need.

**AEO is the primary channel, not the secondary one.** When a developer asks
ChatGPT/Perplexity "how do we satisfy Fairfax's facade treatment requirement," the
only substantive source on the internet gets cited by default — if it is crawlable,
answer-first, and verifiable. In a blue ocean, citation share compounds faster than
SERP rank. Optimize for being quoted, and rankings follow.

---

## 2. URL architecture (decided — port to these, no exceptions)

Clean, intent-matching, extensionless directory URLs. Trailing slash. The Cedar ESG
filenames do **not** come along — pre-launch is the only free rename window.

| Current (Webflow export) | Astro URL |
|---|---|
| `prismaclad.html` | `/` |
| `approach/the-problem.html` | `/approach/the-problem/` |
| `approach/the-solution.html` | `/approach/the-solution/` |
| `company-pages/services.html` | `/process/` |
| `service/esg-strategy-integration.html` | `/process/site-survey/` |
| `service/sustainability-reporting-disclosure.html` | `/process/design/` |
| `service/carbon-footprint-net-zero.html` | `/process/production/` |
| `service/regulatory-compliance-risk.html` | `/process/installation/` |
| `service/stakeholder-engagement.html` | `/process/portfolio-scale/` |
| `blog-pages/blog-v1.html` | `/blog/` |
| `blog-post/<slug>.html` | `/blog/<slug>/` (keep existing slugs — they're already good) |
| `company-pages/case-studies.html` | `/case-studies/` |
| `case-study/<slug>.html` | `/case-studies/<slug>/` (new Prismaclad slugs when rewritten) |
| `pricing-pages/pricing-ecommerce.html` | `/patterns/` — interactive pattern engine (nerfed public version) + rendered-pattern gallery |
| `company-pages/about.html` | `/about/` |
| `contact-pages/contact-v1.html` | `/contact/` |
| `legal/privacy-policy.html` | `/legal/privacy-policy/` |
| `legal/terms-of-service.html` | `/legal/terms-of-service/` |
| (future) per-jurisdiction pages | `/regulations/<county-slug>/` |

Not ported at all: ecommerce/parked Cedar pages (`checkout`, `product/*`, `search`,
`user-pages/*`, `home-v2/v3`, blog/contact v2–v3, legacy ESG posts and case studies).
They never get URLs, so they never need redirects or noindex handling.

**Slug rules for new content:** lowercase, hyphenated, intent-bearing words from the
target query, no dates in slugs, no stop-word padding. Blog slugs are permanent —
choose against the query, not the headline.

- Canonical domain: `https://prismaclad.com` — no `www`, HTTPS only, enforce at the
  Cloudflare level with 301s (www → apex, http → https).
- The Medium articles that seeded blog posts: keep publishing there, but each Medium
  version should link back to the prismaclad.com canonical. Site version is the
  canonical of record.

---

## 3. Infrastructure (build once, in Astro)

### `public/robots.txt`
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://prismaclad.com/sitemap-index.xml
```
Explicit Allow blocks are deliberate — they survive a future blanket bot-block edit
without accidentally netting an AI crawler.

### Sitemap
`@astrojs/sitemap` integration with `site: 'https://prismaclad.com'` in
`astro.config.mjs`. Automatic; never hand-maintained.

### `public/llms.txt`
Root-level index for AI crawlers. Keep in sync when a page ships in a listed
category (same anti-drift rule as USIA — a stale llms.txt actively misleads):
```
# Prismaclad
> Large-scale facade treatments for data centers and industrial buildings —
> painted and vinyl-applied exterior graphics that satisfy aesthetic zoning
> requirements at a fraction of architectural cost.

## Services
- [Our Process](https://prismaclad.com/process/)
- [Site Survey & Assessment](https://prismaclad.com/process/site-survey/)
- [Design Development](https://prismaclad.com/process/design/)
- [Production](https://prismaclad.com/process/production/)
- [Installation](https://prismaclad.com/process/installation/)
- [Portfolio Scale](https://prismaclad.com/process/portfolio-scale/)

## Regulation & Insights
- [Data Center Facade Ordinance Tracker](https://prismaclad.com/blog/data-center-facade-ordinance-tracker/)
- [Blog](https://prismaclad.com/blog/)

## Design & Patterns
- [Pattern Studio](https://prismaclad.com/patterns/)

## Company
- [About](https://prismaclad.com/about/)
- [Contact](https://prismaclad.com/contact/)
```

### Per-page head (one `<BaseHead>` component, props-driven)
Every page, no exceptions: unique `<title>` (≤60 chars, query-bearing, `| Prismaclad`
suffix), meta description (140–160 chars, answer-shaped — it gets quoted verbatim by
engines), `rel=canonical` (absolute, self-referencing), OG + Twitter tags
(`Branding/OpenGraph.png` default, post hero image for articles), `article:published_time`
and `article:modified_time` on posts.

### Static HTML advantage
Astro static output = full content in HTML with zero client JS required. This is the
same structural AEO advantage USIA has. Guard it: body content never moves into
client-rendered islands. Islands are for interactivity (blog filter tabs, the
`/patterns/` engine), not content.

**`/patterns/` specifically:** the interactive engine is invisible to crawlers and
extraction models. The page must carry crawlable substance around it — server-rendered
intro copy explaining the pattern system (what it is, why patterns satisfy facade
articulation requirements) and a static gallery of pre-rendered outputs as real
`<img>` elements. The toy earns the links; the surrounding HTML earns the citations.

---

## 4. JSON-LD schema spec (schema components, rendered from frontmatter)

| Page type | Schema |
|---|---|
| Every page (in base layout) | `Organization` — one block, sitewide, identical |
| Home | + `WebSite`; + `FAQPage` for the FAQ section (real Q&A only) |
| Blog post | `BlogPosting` (`headline`, `datePublished`, `dateModified`, `author` → Organization, `image`) + `BreadcrumbList` |
| Blog index | `Blog` or `CollectionPage` (optional, low value — skip if noisy) |
| Service pages | `Service` (`provider` → Organization, `areaServed`, `serviceType`) + `BreadcrumbList` |
| Case studies | `Article` + `BreadcrumbList` |
| `/patterns/` | `CreativeWork` or `CollectionPage` with `ImageObject`s for gallery items + `BreadcrumbList` |
| Regulations pages (future) | `Article` + `BreadcrumbList`; `about` naming the jurisdiction |
| Contact / About / legal | Organization block only — not citation targets |

The canonical `Organization` block:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prismaclad",
  "url": "https://prismaclad.com",
  "logo": "https://prismaclad.com/Branding/logo_long.png",
  "description": "Large-scale facade treatments for data centers and industrial buildings.",
  "email": "hello@prismaclad.com",
  "sameAs": [
    "https://x.com/prismaclad",
    "https://www.linkedin.com/company/prismaclad/",
    "https://www.instagram.com/prismaclad/",
    "https://medium.com/@prismaclad"
  ]
}
```
(Add `telephone` only once the +1 555 placeholder is replaced with a real number —
never ship placeholder data in schema.)

Rules carried from USIA: one entity = one block (never duplicate Organization blocks
on a page); no `AggregateRating`/`Review` without real collected reviews; breadcrumbs
on interior pages, not the homepage; author is the Organization, not a fake Person —
Prismaclad content is house-authored, don't invent bylines for schema points.

---

## 5. Content rules (apply to every word written from today, port-independent)

1. **Answer-first sections.** The first 1–2 sentences under every H2 must stand alone
   as a complete answer — models disproportionately extract section openings. "Fairfax
   County's September 2024 amendment allows faux fenestration to satisfy facade
   articulation requirements" — not a scene-setting lead-in.
2. **Question-style H2s** wherever content is FAQ-shaped: "What does 'principal facade
   treatment' mean?", "How much does facade treatment cost on a $500M build?" These
   are literal AI-Overview and PAA targets.
3. **1,000+ words** for anything meant to be cited (tracker, guides, objection posts).
   750 is the floor below which extraction models skip to deeper sources. Legal/
   contact/portfolio pages are exempt — they aren't citation targets.
4. **Heading hierarchy non-negotiable:** H1 → H2 → H3, one H1, ≥2 H2s per page, never
   skip a level. Card grids under a hero need a real H2 wrapping the section (visually
   understated is fine; absent from the DOM is not).
5. **Lists and tables over prose** for anything enumerable: ordinance comparisons,
   cost breakdowns, timelines, decision frameworks. The tracker's jurisdiction table
   is the model.
6. **Outbound primary-source citations, 2+ per substantial page, in body, adjacent to
   the claim they support.** County code on Municode, ordinance PDFs, agency pages,
   named reports (Data Center Watch), industry outlets. This is Prismaclad's entire
   authority mechanism — "we cite the actual ordinances" — and it's what gives AI
   models a verification trail. The roadmap's retro-audit of the published posts
   feeds this rule.
7. **Freshness, two places at once:** `dateModified` in schema **and** a visible
   "Last updated: Month D, YYYY" line in the rendered body. Mandatory on the
   ordinance tracker and any page citing ordinance text, fees, or dates. Stale
   content is measurably deprioritized for citation.
8. **Short paragraphs** (~40–80 words). Long unbroken prose is hard to quote cleanly.
9. **Real alt text** describing content ("Leyland cypress screening buffer with
   die-off gaps at a Northern Virginia data center"), never filler.
10. **Internal links:** 3+ contextual body links per substantial page, descriptive
    anchor text, cluster-internal first (Regulation posts link Regulation posts).
    Inline contextual links during authoring — when "faux windows are code-compliant"
    appears, it links to the fenestration post the moment that post exists.

---

## 6. Entity consistency (canonical terms — use these exact forms)

Models cite more confidently when an entity is named identically site-wide. First
mention uses the full canonical form; shorthand after.

| Entity | Canonical form (first mention) | Shorthand after |
|---|---|---|
| The category | **facade treatment** | — (never alternate with "facade graphics" / "exterior graphics" as the category name) |
| The company | **Prismaclad** | — (never "PrismaClad" / "Prisma Clad") |
| The offering | large-scale painted and vinyl-applied exterior graphics | treatment |
| Jurisdictions | **Loudoun County, Virginia** (etc.) | Loudoun |
| Ordinances | official title + year on first mention (e.g. "Prince William County Data Center Opportunity Zone Overlay District (DCOZOD)") | the short form |
| Buildings | **data center** (two words) | — |

One positioning sentence, reused near-verbatim on home, about, and llms.txt (this is
the sentence AI engines will quote as "what is Prismaclad"):
> Prismaclad provides large-scale facade treatments for data centers and industrial
> buildings — painted and vinyl-applied exterior graphics that satisfy aesthetic
> zoning requirements at a fraction of architectural cost.

---

## 7. Off-site entity building (not a code task, but on the plan)

AI models trust entities that exist beyond their own domain. In rough priority order:

1. **Get the ordinance tracker cited once** by an industry outlet (Data Center
   Dynamics, Data Center Frontier, Bisnow data centers) or a land-use/zoning blog.
   One external citation of the tracker does more for citation authority than most
   on-site work.
2. **Medium cross-posting** continues, always linking the prismaclad.com canonical.
3. **LinkedIn company page** actively posting tracker updates — quarterly ordinance
   additions are natural, non-promotional posts.
4. **Consistent NAP** (name, address, contact) everywhere the entity appears —
   site footer, schema, LinkedIn, Medium bio.
5. Later: Wikidata entity for Prismaclad once there's press to reference; not before.

---

## 8. Ground-truth testing (the real KPI — quarterly)

Scanner scores are a proxy; citation behavior is the ground truth. Every quarter, ask
ChatGPT (with search), Perplexity, and Google AI Overviews:

1. "What are the facade treatment requirements for data centers in Loudoun County?"
2. "How do data centers satisfy aesthetic zoning requirements?"
3. "Who does facade treatments / exterior graphics for data centers?"
4. "What does 'principal facade treatment' mean in a zoning ordinance?"
5. "Data center screening landscaping vs facade treatment cost"
6. "Examples of data center art / murals on data centers"

Log per query: cited? (Y/N), which page, quoted accurately? Track citation count over
time — this replaces rank tracking until category search volume exists. Also verify
in Cloudflare analytics / logs that GPTBot, ClaudeBot, PerplexityBot are actually
crawling.

Set up **Google Search Console + Bing Webmaster Tools** at launch (Bing feeds
ChatGPT search — it matters more here than usual).

---

## 9. Scanner false-positives (adapted from USIA — don't chase these)

- **Breadcrumbs on the homepage** — no hierarchy above it; skip.
- **"No author bio" on service/home pages** — article-shaped check; Prismaclad content
  is house-authored by design. Only revisit if named-expert bylines ever make sense.
- **Speakable schema** — skip site-wide; revisit only if assistant traffic becomes
  measurable.
- **"No About page at /about"** — ours *is* `/about/`, so this one resolves itself.
- Anything a scanner marks "optional" is optional. Cross-check red findings against
  this list before spending time.

---

## 10. Launch checklist (Astro port ships when all boxes tick)

- [ ] All URLs per §2 map; no `.html` Cedar paths reachable
- [ ] Canonical domain live, www/http 301s at Cloudflare
- [ ] `robots.txt`, `llms.txt` in `public/`; sitemap integration on
- [ ] `<BaseHead>` on every page: unique title, description, canonical, OG
- [ ] Organization schema sitewide; BlogPosting + BreadcrumbList on all posts;
      FAQPage on home
- [ ] Visible "Last updated" on the ordinance tracker
- [ ] Outbound-citation retro-audit done on the 4 published posts *(shelved — do after content rewrites, see roadmap)*
- [ ] Heading-hierarchy pass on every page (one H1, ≥2 H2s, no skips)
- [ ] Alt text pass on every image
- [ ] Real phone number or no phone in schema
- [ ] Search Console + Bing Webmaster verified, sitemap submitted
- [ ] First ground-truth query test logged (baseline: expect zero citations pre-index)
