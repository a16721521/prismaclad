# Prismaclad Site Update — Design Spec
**Date:** 2026-05-28  
**Output files:** `index2.html`, `portfolio.html`, `contact.html` (fix)

## Scope

Fix all bugs and copy errors in the existing Webflow export. Add two new sections to the homepage (stats bar, Dazzle Canvas teaser). Create a portfolio page. No structural redesign — build off the existing template and CSS.

## Bug Fixes (all files)

- Remove duplicate Google Analytics script tag
- Fix OG image to local path: `images/OpenGraph.png`
- Remove broken favicon refs: `favicon-dark.png`, `webclip-180.png`, `webclip-192.png`
- Remove "Powered by Hoist media" from footer

## index2.html Changes

### Nav
Add "Portfolio" (`portfolio.html`) and "Dazzle Canvas" (`dazzle-canvas.html`) links alongside existing "Contact". Same `.navbar_link` styling.

### Hero
Fix: `INDUSTRIAL CAMO ™` → `INDUSTRIAL CAMO™` (remove space before ™)

### About
Fix: trailing space in heading "We make Industrial Buildings look like they belong "

### Stats Bar (new section, after About subheader, before CTA-large)
- Horizontal row of 3–4 credential items using existing tag/label styles
- Items: `10+ Years Experience` / `Design → Production` / `Hyperscale & Colo` / `Data Center Specialist`
- Dividers between items matching existing `banner_divider` style

### Process
No structural changes. 3 steps remain: Site Survey, Design Development, Production.

### Clients
Fix capitalization:
- `CLients` → `Clients`
- `EXISTING STRUCTUREs` → `EXISTING STRUCTURES`
- `regional DEVELOPERS` → `REGIONAL DEVELOPERS`

### Dazzle Canvas Teaser (new section, before final CTA)
- Dark full-width section using existing dark surface styles
- Headline: `Design the facade. Before anything is built.`
- Body: 2 sentences explaining the interactive pattern engine
- CTA button: "Open Dazzle Canvas" → `dazzle-canvas.html`
- Uses existing `.button`, `.section_cta`, `.cta_component` class patterns

### Footer
- Fix address: `700 s. Flower St, Los Angeles, ca` → `700 S. Flower St, Los Angeles, CA`
- Remove "Powered by Hoist media" credit

## portfolio.html

- Same `<head>`, nav, and footer as index2.html
- Hero: "Work" section header matching existing `.section_header` pattern
- Intro subheader: 1–2 sentences on the work shown (rendered concepts)
- Grid: CSS grid of mockup cards using available images in `/images/`
  - Each card: image + project-type label (e.g. "Data Center Facade", "Industrial Retrofit")
  - Hover: subtle scale/overlay using existing `.expertise_mask` pattern
- CTA at bottom linking to `contact.html`

## contact.html Fixes

- Form `method` → `post`
- Form `action` → `https://formspree.io/f/{id}` (Formspree, contact@prismaclad.com)
- Fix placeholder: `"You email address"` → `"Your email address"`

## What is NOT changing

- All CSS files (no modifications to existing stylesheets)
- Webflow animation dependencies (webflow.js, jQuery CDN)
- `index.html` (untouched — index2.html is the test build)
- `dazzle-canvas.html`, `pattern-engine.html`, `legal/`, `documentation/`
- All images, videos, fonts
