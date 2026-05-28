# Prismaclad Site Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `index2.html` (improved homepage), `portfolio.html` (new portfolio page), and fix `contact.html` — all based on the approved design spec, using the existing Webflow CSS as-is.

**Architecture:** Pure static HTML. `index2.html` starts as a copy of `index.html`. New CSS for added sections (`section_stats`, `section_dazzle-teaser`, portfolio grid) lives in a single `<style>` block injected into each file's `<head>`. No existing CSS files are modified. Webflow JS/jQuery CDN dependencies are preserved.

**Tech Stack:** HTML5, inline CSS (CSS custom properties from `prismaclad.webflow.css`), existing Webflow class system, JetBrains Mono / BDO Grotesk VF fonts, Formspree for contact form

**Working directory:** `/Users/frpo/Desktop/Prismaclad Site/`

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `index2.html` | Create (copy of index.html + edits) | Improved homepage |
| `portfolio.html` | Create | New portfolio/work page |
| `contact.html` | Modify | Fix form submission |

---

## Task 1: Create index2.html base — fix head bugs

**Files:**
- Create: `index2.html`

- [ ] **Step 1: Copy index.html to index2.html**

```bash
cp "/Users/frpo/Desktop/Prismaclad Site/index.html" "/Users/frpo/Desktop/Prismaclad Site/index2.html"
```

- [ ] **Step 2: Fix the duplicate Google Analytics script**

In `index2.html`, find these two consecutive lines (near the bottom of `<head>`):
```html
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-4R7WECHFPD"></script>
  <script src="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b%2F689e5ba67671442434f3ca35%2F69e65731444b1d49596e05e6%2Fgoogle_analytics_gtag-1.0.0.js" type="text/javascript"></script>
  <script src="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b%2F689e5ba67671442434f3ca35%2F69e65731444b1d49596e05e6%2Fgoogle_analytics_gtag-1.0.0.js" type="text/javascript"></script>
```

Replace with (remove the duplicated third line):
```html
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-4R7WECHFPD"></script>
  <script src="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b%2F689e5ba67671442434f3ca35%2F69e65731444b1d49596e05e6%2Fgoogle_analytics_gtag-1.0.0.js" type="text/javascript"></script>
```

- [ ] **Step 3: Fix the OG image to use local path**

Find:
```html
  <meta content="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b/69e05c014d046b5b10939e63_OpenGraph.png" property="og:image">
```

Replace with:
```html
  <meta content="/images/OpenGraph.png" property="og:image">
```

- [ ] **Step 4: Fix broken favicon references**

Find these three lines (they reference files that don't exist):
```html
  <link href="images/favicon-dark.png" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)">
  <link href="images/webclip-180.png" rel="apple-touch-icon" sizes="180x180">
  <link href="images/webclip-192.png" rel="icon" type="image/png" sizes="192x192">
```

Replace with (point to existing files):
```html
  <link href="images/favicon.png" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)">
  <link href="images/webclip.png" rel="apple-touch-icon" sizes="180x180">
  <link href="images/webclip.png" rel="icon" type="image/png" sizes="192x192">
```

- [ ] **Step 5: Add custom styles block**

Immediately before `</head>`, add this block (this will hold all styles for new sections added in later tasks):

```html
  <style>
  /* ── Stats bar ─────────────────────────────────────────── */
  .section_stats {
    padding: 2.5rem 0;
    border-top: 1px solid var(--color-border--border-secondary);
    border-bottom: 1px solid var(--color-border--border-secondary);
  }
  .stats_component {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .stats_item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }
  .stats_value {
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.3;
    color: var(--color-text--text-primary);
    font-family: Bdogrotesk Vf, sans-serif;
  }
  .stats_label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-neutral--neutral);
    font-family: Bdogrotesk Vf, sans-serif;
  }
  .stats_divider {
    width: 1px;
    height: 2.5rem;
    background: var(--color-border--border-secondary);
    flex-shrink: 0;
  }

  /* ── Dazzle Canvas teaser ──────────────────────────────── */
  .section_dazzle-teaser {
    background-color: var(--color-background--background-alternate);
  }
  .dazzle-teaser_component {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .dazzle-teaser_body-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
  .dazzle-teaser_body-text {
    color: var(--color-text--text-alternate);
    opacity: 0.7;
    font-size: 1rem;
    line-height: 1.6;
  }
  .dazzle-teaser_cta {
    margin-top: 2rem;
  }
  .button.is-light {
    background-color: var(--color-background--background-primary);
    color: var(--color-text--text-primary);
    border-color: var(--color-background--background-primary);
  }
  .button.is-light:hover {
    background-color: transparent;
    color: var(--color-text--text-alternate);
    border-color: var(--color-border--border-alternate);
  }

  /* ── Responsive ────────────────────────────────────────── */
  @media (max-width: 768px) {
    .stats_component { flex-wrap: wrap; gap: 1.5rem 1rem; }
    .stats_divider { display: none; }
    .stats_item { flex: 0 0 calc(50% - 0.5rem); }
    .dazzle-teaser_body-row { grid-template-columns: 1fr; gap: 2rem; }
  }
  </style>
```

- [ ] **Step 6: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add index2.html && git commit -m "feat: add index2.html base with head bug fixes and custom styles"
```

---

## Task 2: Fix nav in index2.html

**Files:**
- Modify: `index2.html`

- [ ] **Step 1: Add Portfolio and Dazzle Canvas nav links**

Find in `index2.html`:
```html
                    <div class="navbar_menu">
                      <div class="navbar_divider"></div>
                      <a href="contact.html" class="navbar_link">Contact</a>
                    </div>
```

Replace with:
```html
                    <div class="navbar_menu">
                      <div class="navbar_divider"></div>
                      <a href="portfolio.html" class="navbar_link">Work</a>
                      <a href="dazzle-canvas.html" class="navbar_link">Dazzle Canvas</a>
                      <a href="contact.html" class="navbar_link">Contact</a>
                    </div>
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add index2.html && git commit -m "feat: add Work and Dazzle Canvas links to nav"
```

---

## Task 3: Fix hero and about copy in index2.html

**Files:**
- Modify: `index2.html`

- [ ] **Step 1: Fix INDUSTRIAL CAMO™ spacing**

Find:
```html
                      <div class="hero_label">INDUSTRIAL CAMO ™</div>
```

Replace with:
```html
                      <div class="hero_label">INDUSTRIAL CAMO™</div>
```

- [ ] **Step 2: Fix About heading trailing space**

Find:
```html
                      <p data-w-id="4d8afdac-9b30-95da-e539-61c1230cdc89" style="opacity:0" class="heading-style-h2">We make Industrial Buildings look like they belong </p>
```

Replace with:
```html
                      <p data-w-id="4d8afdac-9b30-95da-e539-61c1230cdc89" style="opacity:0" class="heading-style-h2">We make industrial buildings look like they belong.</p>
```

(Also fixes inconsistent capitalisation of "industrial buildings" — no reason to capitalise both words, and adds a period.)

- [ ] **Step 3: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add index2.html && git commit -m "fix: INDUSTRIAL CAMO trademark spacing, about heading copy"
```

---

## Task 4: Add stats bar to index2.html

**Files:**
- Modify: `index2.html`

- [ ] **Step 1: Insert stats bar section**

Find the closing tag of `section_subheader` (the closing `</section>` after the two-column description paragraphs in the About block):
```html
              </div>
            </div>
          </div>
        </section>
        <section class="section_cta-large">
```

Replace with (insert the stats section between them):
```html
              </div>
            </div>
          </div>
        </section>
        <section class="section_stats">
          <div class="padding-global">
            <div class="w-layout-blockcontainer container-large w-container">
              <div class="stats_component">
                <div class="stats_item">
                  <div class="stats_value">10+</div>
                  <div class="stats_label">Years Experience</div>
                </div>
                <div class="stats_divider"></div>
                <div class="stats_item">
                  <div class="stats_value">Design → Production</div>
                  <div class="stats_label">End-to-End Delivery</div>
                </div>
                <div class="stats_divider"></div>
                <div class="stats_item">
                  <div class="stats_value">Hyperscale &amp; Colo</div>
                  <div class="stats_label">Primary Market</div>
                </div>
                <div class="stats_divider"></div>
                <div class="stats_item">
                  <div class="stats_value">Site to Install</div>
                  <div class="stats_label">Single-Source Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section_cta-large">
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add index2.html && git commit -m "feat: add stats/credentials bar to about section"
```

---

## Task 5: Fix clients section capitalisation in index2.html

**Files:**
- Modify: `index2.html`

- [ ] **Step 1: Fix "CLients" tag**

Find:
```html
                          <h2 class="text-size-regular">CLients</h2>
```

Replace with:
```html
                          <h2 class="text-size-regular">Clients</h2>
```

- [ ] **Step 2: Fix "regional DEVELOPERS" heading**

Find:
```html
                              <h3>regional DEVELOPERS</h3>
```

Replace with:
```html
                              <h3>REGIONAL DEVELOPERS</h3>
```

- [ ] **Step 3: Fix "EXISTING STRUCTUREs" heading**

Find:
```html
                              <h3>EXISTING STRUCTUREs</h3>
```

Replace with:
```html
                              <h3>EXISTING STRUCTURES</h3>
```

- [ ] **Step 4: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add index2.html && git commit -m "fix: capitalisation errors in Clients section headings"
```

---

## Task 6: Add Dazzle Canvas teaser section to index2.html

**Files:**
- Modify: `index2.html`

- [ ] **Step 1: Insert teaser section before the final CTA**

Find:
```html
      <div class="cta">
        <section class="section_cta">
```

Replace with (insert the entire teaser section before the cta div):
```html
      <section class="section_dazzle-teaser">
        <div class="padding-global">
          <div class="w-layout-blockcontainer container-large w-container">
            <div class="padding-section-large">
              <div class="dazzle-teaser_component">
                <div>
                  <div class="tag">
                    <div class="tag_container">
                      <div class="tag_leading-dot"></div>
                      <div class="text-size-regular" style="color: var(--color-text--text-alternate);">Dazzle Canvas</div>
                    </div>
                  </div>
                </div>
                <div class="dazzle-teaser_body-row">
                  <div>
                    <p class="heading-style-h2" style="color: var(--color-text--text-alternate);">Design the facade.<br>Before anything is built.</p>
                  </div>
                  <div>
                    <p class="dazzle-teaser_body-text">Prismaclad's interactive pattern engine lets you generate and explore large-scale graphic treatments in real time — built for the constraints of industrial facades at data center scale. No commitment. No conversation required.</p>
                    <div class="dazzle-teaser_cta">
                      <a href="dazzle-canvas.html" class="button is-light w-inline-block">
                        <div class="button_label">
                          <div>Open Dazzle Canvas</div>
                        </div>
                        <div class="button_icon">
                          <div class="w-embed"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/></svg></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="cta">
        <section class="section_cta">
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add index2.html && git commit -m "feat: add Dazzle Canvas teaser section to homepage"
```

---

## Task 7: Fix footer in index2.html

**Files:**
- Modify: `index2.html`

- [ ] **Step 1: Fix address capitalisation**

Find:
```html
                      <div class="text-size-large text-style-allcaps">700 s. Flower St, Los Angeles, ca </div>
```

Replace with:
```html
                      <div class="text-size-large text-style-allcaps">700 S. Flower St, Los Angeles, CA</div>
```

- [ ] **Step 2: Remove "Powered by Hoist media" credit**

Find:
```html
                    <div id="w-node-_96d40d2c-00b6-0a78-ac9a-4510a6a766a3-5e014713" class="footer_sponsor">
                      <div>Powered by <a href="https://hoistmedia.co" target="_blank" class="footer_copyright-link">Hoist media</a>
                      </div>
                    </div>
```

Replace with (empty div to preserve grid layout):
```html
                    <div id="w-node-_96d40d2c-00b6-0a78-ac9a-4510a6a766a3-5e014713" class="footer_sponsor"></div>
```

- [ ] **Step 3: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add index2.html && git commit -m "fix: footer address capitalisation, remove agency credit"
```

---

## Task 8: Fix contact.html

**Files:**
- Modify: `contact.html`

**Note before starting:** The contact form uses Formspree. Before Step 2, go to [formspree.io](https://formspree.io), create a free account with `contact@prismaclad.com`, create a new form, and copy your form ID (looks like `xpwzrvkl`).

- [ ] **Step 1: Fix head bugs (same as Task 1 Steps 2–4 but for contact.html)**

In `contact.html`, fix the duplicate GA script:

Find:
```html
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-4R7WECHFPD"></script>
  <script src="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b%2F689e5ba67671442434f3ca35%2F69e65731444b1d49596e05e6%2Fgoogle_analytics_gtag-1.0.0.js" type="text/javascript"></script>
  <script src="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b%2F689e5ba67671442434f3ca35%2F69e65731444b1d49596e05e6%2Fgoogle_analytics_gtag-1.0.0.js" type="text/javascript"></script>
```

Replace with:
```html
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-4R7WECHFPD"></script>
  <script src="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b%2F689e5ba67671442434f3ca35%2F69e65731444b1d49596e05e6%2Fgoogle_analytics_gtag-1.0.0.js" type="text/javascript"></script>
```

Fix OG image:

Find:
```html
  <meta content="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b/69e05c014d046b5b10939e63_OpenGraph.png" property="og:image">
```

Replace with:
```html
  <meta content="/images/OpenGraph.png" property="og:image">
```

Fix broken favicon refs:

Find:
```html
  <link href="images/favicon-dark.png" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)">
  <link href="images/webclip-180.png" rel="apple-touch-icon" sizes="180x180">
  <link href="images/webclip-192.png" rel="icon" type="image/png" sizes="192x192">
```

Replace with:
```html
  <link href="images/favicon.png" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)">
  <link href="images/webclip.png" rel="apple-touch-icon" sizes="180x180">
  <link href="images/webclip.png" rel="icon" type="image/png" sizes="192x192">
```

- [ ] **Step 2: Wire up Formspree — replace `{YOUR_FORMSPREE_ID}` with your actual form ID**

Find:
```html
                      <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form_form" data-wf-page-id="69dd6cc4b20808a2eb8c692c" data-wf-element-id="f45e3cf3-de9d-46c7-c5a4-3977f03e9a50">
```

Replace with (substitute your Formspree ID for `{YOUR_FORMSPREE_ID}`):
```html
                      <form id="email-form" name="email-form" data-name="Email Form" method="post" action="https://formspree.io/f/{YOUR_FORMSPREE_ID}" class="form_form">
```

- [ ] **Step 3: Fix email placeholder typo**

Find:
```html
<input class="form_input w-input" maxlength="256" name="Input" data-name="Input" placeholder="You email address" type="email" id="email" required="">
```

Replace with:
```html
<input class="form_input w-input" maxlength="256" name="email" data-name="email" placeholder="Your email address" type="email" id="email" required="">
```

(Also fix `name="Input"` → `name="email"` so Formspree labels the field correctly.)

- [ ] **Step 4: Fix other form field names for Formspree labelling**

Find:
```html
<div class="form_field-container"><label for="name" class="form_field-label">Name</label><input class="form_input w-input" maxlength="256" name="Input" data-name="Input" placeholder="Your name" type="text" id="name" required=""></div>
          <div class="form_field-container"><label for="company" class="form_field-label">Company</label><input class="form_input w-input" maxlength="256" name="Input" data-name="Input" placeholder="Your company" type="text" id="company"></div>
```

Replace with:
```html
<div class="form_field-container"><label for="name" class="form_field-label">Name</label><input class="form_input w-input" maxlength="256" name="name" data-name="name" placeholder="Your name" type="text" id="name" required=""></div>
          <div class="form_field-container"><label for="company" class="form_field-label">Company</label><input class="form_input w-input" maxlength="256" name="company" data-name="company" placeholder="Your company" type="text" id="company"></div>
```

Also fix the textarea name:

Find:
```html
<textarea name="Textarea" maxlength="5000" id="message" placeholder="New build, existing structure, or early stage. Tell us." data-name="Textarea" required="" class="form_input is-text-area w-input"></textarea>
```

Replace with:
```html
<textarea name="message" maxlength="5000" id="message" placeholder="New build, existing structure, or early stage. Tell us." data-name="message" required="" class="form_input is-text-area w-input"></textarea>
```

- [ ] **Step 5: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add contact.html && git commit -m "fix: contact form Formspree wiring, field names, email placeholder typo, head bugs"
```

---

## Task 9: Create portfolio.html

**Files:**
- Create: `portfolio.html`

- [ ] **Step 1: Create portfolio.html**

Create `/Users/frpo/Desktop/Prismaclad Site/portfolio.html` with the following content. This page uses the same `<head>`, nav, and footer pattern as `index2.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Work | Prismaclad</title>
  <meta content="Prismaclad designs and installs large-scale exterior graphic treatments for data centers and industrial infrastructure." name="description">
  <meta content="Work | Prismaclad" property="og:title">
  <meta content="Prismaclad designs and installs large-scale exterior graphic treatments for data centers and industrial infrastructure." property="og:description">
  <meta content="/images/OpenGraph.png" property="og:image">
  <meta content="Work | Prismaclad" name="twitter:title">
  <meta content="Prismaclad designs and installs large-scale exterior graphic treatments for data centers and industrial infrastructure." name="twitter:description">
  <meta property="og:type" content="website">
  <meta content="summary_large_image" name="twitter:card">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/prismaclad.webflow.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({ google: { families: ["Inconsolata:400,700","JetBrains Mono:300,400,500,600,700","Poppins:300,400,500,600,700"] }});</script>
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="images/favicon.png" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: light)">
  <link href="images/favicon.png" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)">
  <link href="images/webclip.png" rel="apple-touch-icon" sizes="180x180">
  <link href="images/webclip.png" rel="icon" type="image/png" sizes="192x192">
  <link href="images/webclip.png" rel="icon" type="image/png" sizes="512x512">
  <style>
  * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

  .portfolio-hero {
    padding-top: 8rem;
    padding-bottom: 0;
  }

  .portfolio-grid_component {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background-color: var(--color-border--border-secondary);
    border-top: 1px solid var(--color-border--border-secondary);
  }

  .portfolio-grid_item {
    background-color: var(--color-background--background-primary);
    overflow: hidden;
    position: relative;
    cursor: default;
  }

  .portfolio-grid_image-wrap {
    overflow: hidden;
    aspect-ratio: 4 / 3;
    background: var(--color-background--background-secondary);
  }

  .portfolio-grid_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .portfolio-grid_item:hover .portfolio-grid_image {
    transform: scale(1.03);
  }

  .portfolio-grid_content {
    padding: 1.5rem;
    border-top: 1px solid var(--color-border--border-secondary);
  }

  .portfolio-grid_label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-neutral--neutral);
    margin-bottom: 0.4rem;
    font-family: Bdogrotesk Vf, sans-serif;
  }

  .portfolio-grid_title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text--text-primary);
    font-family: Bdogrotesk Vf, sans-serif;
    line-height: 1.4;
  }

  .portfolio-intro_text {
    max-width: 42rem;
  }

  @media (max-width: 768px) {
    .portfolio-grid_component { grid-template-columns: 1fr; }
  }
  </style>
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-4R7WECHFPD"></script>
  <script src="https://cdn.prod.website-files.com/69dd6cc4b20808a2eb8c694b%2F689e5ba67671442434f3ca35%2F69e65731444b1d49596e05e6%2Fgoogle_analytics_gtag-1.0.0.js" type="text/javascript"></script>
</head>
<body>
  <div data-animation="over-right" class="navbar w-nav" data-easing2="ease-in-quart" data-easing="ease-out-quart" data-collapse="medium" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
    <section class="section_navbar">
      <div class="padding-global">
        <div class="container-large">
          <div class="navbar_component">
            <div class="w-layout-grid navbar_grid">
              <a href="index2.html" class="navbar_logo-container nav-logo-desktop w-inline-block">
                <img src="images/navbar_logo_dark.png" loading="lazy" alt="" class="navbar_logo">
                <div class="navbar_logo-text-dark">Prismaclad</div>
              </a>
              <div class="navbar_menu">
                <div class="navbar_divider"></div>
                <a href="portfolio.html" class="navbar_link w--current" aria-current="page">Work</a>
                <a href="dazzle-canvas.html" class="navbar_link">Dazzle Canvas</a>
                <a href="contact.html" class="navbar_link">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="page-container">
    <main class="main">

      <!-- Hero / header -->
      <section class="section_header portfolio-hero">
        <div class="padding-global">
          <div class="w-layout-blockcontainer container-large w-container">
            <div class="padding-section-medium">
              <div class="header_component">
                <div class="w-layout-grid grid-global no-gap">
                  <div class="header_container">
                    <div class="tag">
                      <div class="tag_container">
                        <div class="tag_leading-dot"></div>
                        <h2 class="text-size-regular">Work</h2>
                      </div>
                    </div>
                    <div class="header_heading">
                      <p class="heading-style-h2">Rendered concepts &amp; installations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Intro -->
      <section class="section_subheader">
        <div class="padding-global">
          <div class="w-layout-blockcontainer container-large w-container">
            <div class="padding-section-medium">
              <div class="subheader_component">
                <div class="w-layout-grid grid-global no-gap">
                  <div class="subheader_description portfolio-intro_text">
                    <p>Every project below starts from the building and its context. These are rendered concepts developed during the design phase — each one specific to a site, a scale, and a set of constraints.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio grid -->
      <div class="padding-global" style="padding-left: 0; padding-right: 0;">
        <div class="w-layout-blockcontainer container-large w-container" style="max-width: 100%; padding: 0;">
          <div class="portfolio-grid_component">

            <div class="portfolio-grid_item">
              <div class="portfolio-grid_image-wrap">
                <img src="images/903d7c81-9353-4993-9f66-2001ac0db75b.jpeg" alt="Large-scale facade treatment on industrial campus" class="portfolio-grid_image" loading="lazy">
              </div>
              <div class="portfolio-grid_content">
                <div class="portfolio-grid_label">Data Center — Hyperscale</div>
                <div class="portfolio-grid_title">Industrial Campus Facade Treatment</div>
              </div>
            </div>

            <div class="portfolio-grid_item">
              <div class="portfolio-grid_image-wrap">
                <img src="images/baed3a30207c451fb66d5971cbda6091.jpg" alt="Portfolio-scale graphic system across multiple facilities" class="portfolio-grid_image" loading="lazy">
              </div>
              <div class="portfolio-grid_content">
                <div class="portfolio-grid_label">Data Center — Hyperscale</div>
                <div class="portfolio-grid_title">Portfolio-Scale Graphic System</div>
              </div>
            </div>

            <div class="portfolio-grid_item">
              <div class="portfolio-grid_image-wrap">
                <img src="images/9bb3d3dccebe46cd955c3f4dc5867ba7.jpg" alt="Site-specific design development for data center facility" class="portfolio-grid_image" loading="lazy">
              </div>
              <div class="portfolio-grid_content">
                <div class="portfolio-grid_label">Design Development</div>
                <div class="portfolio-grid_title">Site-Specific Graphic Development</div>
              </div>
            </div>

            <div class="portfolio-grid_item">
              <div class="portfolio-grid_image-wrap">
                <img src="images/ae70c4247ee547ecb3b843c839550db6.jpg" alt="New construction integration with architectural firm" class="portfolio-grid_image" loading="lazy">
              </div>
              <div class="portfolio-grid_content">
                <div class="portfolio-grid_label">New Construction — A&amp;E Collaboration</div>
                <div class="portfolio-grid_title">Architectural Integration, New Build</div>
              </div>
            </div>

            <div class="portfolio-grid_item">
              <div class="portfolio-grid_image-wrap">
                <img src="images/1a374ffb9a414635a3d2fe5e3d70654b.jpg" alt="Retrofit treatment on existing data center structure" class="portfolio-grid_image" loading="lazy">
              </div>
              <div class="portfolio-grid_content">
                <div class="portfolio-grid_label">Existing Structure — Retrofit</div>
                <div class="portfolio-grid_title">Facade Retrofit, Occupied Site</div>
              </div>
            </div>

            <div class="portfolio-grid_item">
              <div class="portfolio-grid_image-wrap">
                <img src="images/ccda8b5457944392adfbf3448f9d8b2c.jpg" alt="Regional developer single-site treatment" class="portfolio-grid_image" loading="lazy">
              </div>
              <div class="portfolio-grid_content">
                <div class="portfolio-grid_label">Regional Developer — Single Site</div>
                <div class="portfolio-grid_title">Community-Integrated Facade Design</div>
              </div>
            </div>

            <div class="portfolio-grid_item">
              <div class="portfolio-grid_image-wrap">
                <img src="images/710f962bc2c34c988ba88aa15a5add3c.jpg" alt="Large-scale production and installation" class="portfolio-grid_image" loading="lazy">
              </div>
              <div class="portfolio-grid_content">
                <div class="portfolio-grid_label">Production</div>
                <div class="portfolio-grid_title">Large-Format Production Run</div>
              </div>
            </div>

            <div class="portfolio-grid_item">
              <div class="portfolio-grid_image-wrap">
                <img src="images/1bc55245469648c08566e6d70cecc314.jpg" alt="Site survey and assessment" class="portfolio-grid_image" loading="lazy">
              </div>
              <div class="portfolio-grid_content">
                <div class="portfolio-grid_label">Site Survey</div>
                <div class="portfolio-grid_title">Pre-Installation Assessment</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta">
        <section class="section_cta">
          <div class="padding-global">
            <div class="w-layout-blockcontainer container-large w-container">
              <div class="padding-section-large">
                <div class="cta_component">
                  <div class="w-layout-grid grid-global no-gap">
                    <article class="cta_container">
                      <div class="cta_content">
                        <div class="cta_heading">
                          <div class="heading-style-h3">Start a project</div>
                        </div>
                        <div class="cta_description">
                          <div class="cta_paragraph">
                            <p>A single building or a full development pipeline — every project starts with a conversation. Tell us what you're working on.</p>
                          </div>
                          <div class="cta_button">
                            <a href="contact.html" class="button w-inline-block">
                              <div class="button_label"><div>Contact us</div></div>
                              <div class="button_icon">
                                <div class="w-embed"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/></svg></div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>

    <footer class="footer">
      <section class="section_footer">
        <div class="padding-global">
          <div class="w-layout-blockcontainer container-large w-container">
            <div class="footer_component">
              <div class="w-layout-grid grid-global no-gap">
                <div class="footer_container">
                  <div class="footer_content is-image">
                    <div class="banner_component is-footer">
                      <div class="banner_container">
                        <div class="banner_item">Prismaclad</div>
                        <div class="banner_divider is-alternate"></div>
                        <div class="banner_item">Prismaclad</div>
                        <div class="banner_divider is-alternate"></div>
                        <div class="banner_item">Prismaclad</div>
                        <div class="banner_divider is-alternate"></div>
                      </div>
                    </div>
                    <div class="footer_image-container">
                      <img src="images/Footer.jpg" loading="eager" width="2528" alt="" class="footer_image">
                      <div class="footer_mask"></div>
                    </div>
                  </div>
                  <div class="footer_content is-grid">
                    <div class="footer_nav-contact is-address">
                      <div class="footer_address">
                        <div class="text-size-large text-style-allcaps">700 S. Flower St, Los Angeles, CA</div>
                      </div>
                    </div>
                    <div class="footer_nav-container">
                      <div class="footer_nav is-links">
                        <a href="https://www.instagram.com/prismaclad" target="_blank" class="footer_nav-link">Instagram</a>
                        <a href="https://x.com/prismaclad" target="_blank" class="footer_nav-link">Twitter / X</a>
                        <a href="https://www.linkedin.com/company/prismaclad" target="_blank" class="footer_nav-link">Linkedin</a>
                      </div>
                    </div>
                  </div>
                  <div class="footer_content is-legals">
                    <div class="footer_copyright">
                      <div class="icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m41.59-52.79a52 52 0 1 1 0-62.43a12 12 0 1 1-19.18 14.42a28 28 0 1 0 0 33.6a12 12 0 1 1 19.18 14.41"/></svg></div>
                      <div>2026 Prismaclad</div>
                    </div>
                    <div class="footer_legal-links">
                      <a href="legal/privacy-policy.html">Privacy Policy</a>
                      <div class="mobile-display-none">—</div>
                      <a href="legal/terms-conditions.html">Terms &amp; Conditions</a>
                    </div>
                    <div class="footer_sponsor"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="background">
        <div class="background-line"></div>
        <div class="background-line"></div>
        <div class="background-line"></div>
        <div class="background-line"></div>
        <div class="background-line"></div>
        <div class="background-line tablet-display-none"></div>
        <div class="background-line tablet-display-none"></div>
        <div class="background-line tablet-display-none"></div>
        <div class="background-line tablet-display-none"></div>
      </div>
    </footer>
  </div>

  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69dd6cc4b20808a2eb8c694b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git add portfolio.html && git commit -m "feat: add portfolio page with mockup grid"
```

---

## Task 10: Verify and push

- [ ] **Step 1: Open index2.html in browser and verify**

```bash
open "/Users/frpo/Desktop/Prismaclad Site/index2.html"
```

Check:
- Nav shows Work, Dazzle Canvas, Contact links
- Hero label reads `INDUSTRIAL CAMO™` (no space before ™)
- Stats bar appears between the About description and the "EVERY PROJECT STARTS SOMEWHERE" CTA
- Clients section: all headings are consistent all-caps or title case (no mixed case)
- Dark Dazzle Canvas teaser section appears before the final "Get in Touch" CTA
- Footer shows `700 S. Flower St, Los Angeles, CA` and no Hoist media credit

- [ ] **Step 2: Open portfolio.html in browser and verify**

```bash
open "/Users/frpo/Desktop/Prismaclad Site/portfolio.html"
```

Check:
- Nav matches index2.html (Work is highlighted as current)
- All 8 grid items render with images and labels
- Images crop correctly in the 4:3 aspect ratio containers
- Hover causes subtle image scale
- CTA at bottom links to contact.html

- [ ] **Step 3: Open contact.html in browser and verify**

```bash
open "/Users/frpo/Desktop/Prismaclad Site/contact.html"
```

Check:
- Email placeholder reads "Your email address"
- Form action points to Formspree URL (check in DevTools → Network on submit)

- [ ] **Step 4: Push all changes to GitHub**

```bash
cd "/Users/frpo/Desktop/Prismaclad Site" && git push origin main
```

---

## Self-Review

**Spec coverage check:**
- ✅ Nav: Portfolio + Dazzle Canvas links (Task 2)
- ✅ `INDUSTRIAL CAMO™` fix (Task 3)
- ✅ About heading trailing space + capitalisation (Task 3)
- ✅ Stats bar (Task 4)
- ✅ Process section: unchanged (no task needed)
- ✅ CLients / EXISTING STRUCTUREs / regional DEVELOPERS fixes (Task 5)
- ✅ Dazzle Canvas teaser (Task 6)
- ✅ Footer address + Hoist media removal (Task 7)
- ✅ contact.html form method, action, placeholder, field names (Task 8)
- ✅ portfolio.html with mockup grid (Task 9)
- ✅ Duplicate GA, OG image, broken favicons (Tasks 1 + 8)

**Placeholder scan:** No TBDs. Task 8 Step 2 contains `{YOUR_FORMSPREE_ID}` — this is a required manual substitution (the ID comes from the user's Formspree account), not an implementation placeholder.

**Type consistency:** No shared types across tasks (static HTML, no JS logic added).
