# Prismaclad SEO / AEO / GEO Plan

The reference every page of the Astro buildout ships against. Adapted from the USIA
AEO/GEO guide (`AEO-GEO-GUIDE copy.md`) for a blue-ocean niche: **nobody else ranks
for this market, and nobody searches the category term yet.** The goal is not to
outrank competitors — there are none — it is to (a) own the adjacent problem-language
queries that already have volume, and (b) be the source AI engines cite by default
when this category's queries start arriving.

**Status (Oct 2026): the v2 reduced site is live at prismaclad.com.** Routes: `/`,
`/process/`, `/research/` + 7 posts, `/contact/`, `/legal/*`. The v1 pages this plan was
first written against (`/about/`, `/approach/*`, `/case-studies/`, `/patterns/`, the five
`/process/*` sub-pages) are archived in `astro/src/archive-v1/` and **unrouted — they return
404**. Sections below are updated to describe what ships; anything still written for v1
is marked *(v1, archived)*. Per-page head, schema, and breadcrumbs live in
`astro/src/layouts/V2Base.astro`.

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

- **Flagship:** the ordinance tracker (`/research/data-center-facade-ordinance-tracker/`)
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
  gallery of rendered pattern work. *(v1, archived — not in the v2 site. Until it
  returns, the flagship for this cluster is the murals post and
  `/research/camouflage-science-data-center-facades/`.)*
- Also maps to: the Google murals post, pipeline #8 (PSE&G substation murals),
  #9 (Meta/Microsoft/Corgan), #12 (community opposition think-piece), and future
  project/case-study pages.
- **Image SEO rules for this cluster:** descriptive filenames
  (`geometric-facade-pattern-data-center.png`, not `pattern_geo_seed42.svg`), real
  alt text, `ImageObject` in the page schema where a pattern/photo is the subject,
  and every gallery image served as crawlable `<img>` markup — not CSS backgrounds
  or JS-injected canvases.
- **Image conventions (Oct 2026 pass).** Filenames are lowercase, hyphenated, and say what
  the picture shows (`data-center-towering-over-residential-street.jpg`), never a hash,
  a camera or AI-tool default, or "copy". Web copies are JPEG, at most 2400px on the long
  edge, quality ~80 (resize only down; `sips -Z` upscales small sources, so skip it for
  anything under 2400px). Keep originals outside `public/`. Alt text describes what is
  visible, not what the page wants it to mean, and never claims the image is a Prismaclad
  project or a "completed" installation unless it is one. Renaming an image means adding a
  301 for the old URL in `public/_redirects`. When one image appears in several places,
  the alt may differ slightly by context, but must stay true to the picture.
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

**Live in v2:**

| URL | Page |
|---|---|
| `/` | Home (positioning, FAQ) |
| `/process/` | How it works — survey, design, production, installation (the service page) |
| `/research/` | Listing (was `/blog/` until Oct 2026; 301 in place) |
| `/research/<slug>/` | 7 posts, slugs permanent; `/blog/*` 301s here |
| `/contact/` | Contact form |
| `/legal/privacy-policy/`, `/legal/terms-of-service/` | Legal |
| (future) `/regulations/<county-slug>/` | Per-jurisdiction pages |

**Archived with v1, unrouted (404):** `/about/`, `/approach/the-problem/`,
`/approach/the-solution/`, `/case-studies/`, `/patterns/`, `/process/site-survey/`,
`/process/design/`, `/process/production/`, `/process/installation/`,
`/process/portfolio-scale/`. Source is in `astro/src/archive-v1/pages/`. If any returns,
it takes the URL above and the SEO rules below, and gets added to `llms.txt` and the
schema table in §4. No redirects exist for them. `public/_redirects` covers only the
older template site. **Open item:** once Search Console is verified, check Pages →
"Not found (404)" for URLs the previous prismaclad.com site had indexed, and add
`_redirects` rules for any that have inbound links or impressions.

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

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://prismaclad.com/sitemap-index.xml
```
Explicit Allow blocks are deliberate — they survive a future blanket bot-block edit
without accidentally netting an AI crawler. The second group (`*-User`, `Claude-SearchBot`)
is the on-demand and search-index path: these are the agents that fetch a page when a
person asks an assistant a question, so they are the citation path. The file in
`astro/public/robots.txt` is the source of truth; this block mirrors it.

### Sitemap
`@astrojs/sitemap` integration with `site: 'https://prismaclad.com'` in
`astro.config.mjs`. Automatic; never hand-maintained. Blog URLs carry `<lastmod>` taken
from the post's `dateModified` (else its `date`); other URLs deliberately carry none,
because a build-date `lastmod` on every URL teaches engines to ignore the field.

### `public/llms.txt`
Root-level index for AI crawlers, at `astro/public/llms.txt` (source of truth — this doc
no longer duplicates the contents). Keep it in sync when a page ships in a listed
category (same anti-drift rule as USIA — a stale llms.txt actively misleads). It must
list every post in `src/content/blog/`; check the count whenever a post is added.

### Per-page head (`V2Base.astro`, props-driven)
Every page, no exceptions: unique `<title>` (≤60 chars including the `| Prismaclad`
suffix, query-bearing), meta description (140–160 chars, answer-shaped — it gets quoted
verbatim by engines), `rel=canonical` (absolute, self-referencing), OG + Twitter tags
(`Branding/OpenGraph.png` default, post hero image for articles), `article:published_time`
and `article:modified_time` on posts, `og:site_name`, and
`robots: index, follow, max-image-preview:large`. A page that must stay out of the index
(the 404) passes `noindex`, which drops the canonical and `og:url`.

For blog posts the search snippet is set by the optional front-matter fields `metaTitle`
(without the suffix) and `metaDescription`, so it can be tuned without touching the
on-page H1 or the card text. They fall back to `title` / `description`. Check lengths
when adding a post — most drafts overshoot.

### Static HTML advantage
Astro static output = full content in HTML with zero client JS required. This is the
same structural AEO advantage USIA has. Guard it: body content never moves into
client-rendered islands. Islands are for interactivity (blog filter tabs, the
`/patterns/` engine), not content.

**`/patterns/` specifically *(v1, archived — applies if the page returns)*:** the interactive engine is invisible to crawlers and
extraction models. The page must carry crawlable substance around it — server-rendered
intro copy explaining the pattern system (what it is, why patterns satisfy facade
articulation requirements) and a static gallery of pre-rendered outputs as real
`<img>` elements. The toy earns the links; the surrounding HTML earns the citations.

---

## 4. JSON-LD schema spec (schema components, rendered from frontmatter)

| Page type | Schema | Shipped in v2 |
|---|---|---|
| Every page (in base layout) | `Organization` — one block, sitewide, identical, `@id` = `https://prismaclad.com/#organization` so other schema references it | yes |
| Home | + `WebSite` (`@id` `#website`, publisher → Organization); + `FAQPage` for the FAQ section (real Q&A only) | yes |
| Blog post | `BlogPosting` (`headline`, `datePublished`, `dateModified`, `articleSection`, `mainEntityOfPage`, `author`/`publisher` → Organization, `image`) + `BreadcrumbList` (Home › Blog › post) | yes |
| Blog index | `BreadcrumbList` only. `Blog`/`CollectionPage` is optional and low value — skipped | yes |
| `/process/` (the service page) | `Service` (`provider` → Organization, `serviceType`) + `HowTo` + `FAQPage` + `BreadcrumbList`. `areaServed` is omitted until the service territory is confirmed | yes |
| Case studies *(v1, archived)* | `Article` + `BreadcrumbList` | n/a |
| `/patterns/` *(v1, archived)* | `CreativeWork` or `CollectionPage` with `ImageObject`s for gallery items + `BreadcrumbList` | n/a |
| Regulations pages (future) | `Article` + `BreadcrumbList`; `about` naming the jurisdiction | n/a |
| Contact / legal / 404 | Organization block only — not citation targets. 404 is `noindex` | yes |

Breadcrumbs are generated by the layout: a page passes `breadcrumbs={[{ name, path }]}`
(Home is added automatically), so no page hand-writes a `BreadcrumbList`.

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

Last audited Oct 7, 2026 against the built `dist/` and the live domain.

- [x] All URLs per §2 map. Archived v1 routes 404 (checked `/about/`)
- [ ] `.html` Cedar paths unreachable: **not met.** `dazzle-canvas.html` and
      `pattern-engine.html` in `astro/public/` are live (200, indexable, not in the sitemap).
      See §10a
- [x] www → apex 301 verified live. **http → https not verified** (the check was
      ambiguous; confirm in Cloudflare → SSL/TLS → Edge Certificates → Always Use HTTPS)
- [x] `robots.txt`, `llms.txt` in `public/` and serving 200; sitemap integration on, with
      true `lastmod` on posts
- [x] `V2Base.astro` on every page: unique title (≤60), description (140–160 on all
      citation-target pages; legal pages are shorter by design), canonical, OG
- [x] Organization schema sitewide; BlogPosting + BreadcrumbList on all 7 posts;
      FAQPage + WebSite on home; Service + FAQPage + BreadcrumbList on `/process/`
- [x] Visible "Last updated" on the ordinance tracker. **It currently reads July 21, 2026
      because the content hasn't been revised since publication; the quarterly review
      (§1 Cluster A) is due.** Setting `dateModified` without a real review would be a
      false freshness signal
- [ ] Outbound-citation retro-audit done on the published posts *(shelved — do after content rewrites, see roadmap)*
- [x] Heading-hierarchy pass: one H1 per page, no skipped levels. `/contact/` has one H2
      (not a citation target; exempt)
- [x] Alt text pass: every content image has alt text. The three icons on `/process/`
      are decorative and correctly `alt=""`
- [x] No phone in schema. (The v2 footer shows no phone number either)
- [ ] Search Console + Bing Webmaster verified, sitemap submitted *(not checkable from
      the repo — confirm)*
- [ ] First ground-truth query test logged (baseline: expect zero citations pre-index)

### 10a. Known gaps (Oct 2026)

- **Stray engine pages are public.** `public/dazzle-canvas.html` (34 KB, readable
  generation code) and `public/pattern-engine.html` (a shell iframing the GitHub Pages
  engine) are served at `/dazzle-canvas` and `/pattern-engine`. They are thin, unlinked,
  and unlisted, but crawlable. Decide whether they should be public at all; if so, add
  `X-Robots-Tag: noindex` via `public/_headers`.
- **No dates visible on posts** except the tracker. Rule 7 asks for a visible date on
  anything citable; v2's byline dropped the publish date that v1 showed.
- **No RSS feed** for the blog (`@astrojs/rss`); useful for syndication and for
  feed-based discovery.
- **"8–20 weeks" timeline** appears in the home FAQ, `/process/` FAQ, and both FAQ
  schema blocks. `process.astro` notes it still needs client confirmation; it is now a
  quotable claim.
- **Blog copy was not audited** against §5 (answer-first openings, question-style H2s,
  2+ outbound citations per post). This pass covered metadata, schema, and structure only.
