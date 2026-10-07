---
title: "What Facade Treatment Actually Costs on a $500M Build"
description: "The pricing math behind the claim that exterior treatment is a rounding error on a data center build — four inputs, three facility sizes, and what the numbers look like against a $633M average project."
subtitle: "Exterior treatment gets called a rounding error against a data center's construction budget. Here is the actual math: four price inputs, three facility sizes, and what the numbers look like against a $633M average project."
date: 2026-07-22
dateModified: 2026-10-07
category: "Design"
readTime: 6
image: "/assets/aerial-industrial-building-faceted-gold-facade.jpg"
imageAlt: "Aerial view of a very large flat-roofed industrial building with a faceted gold facade, beside a logistics park."
metaTitle: "What Facade Treatment Costs on a $500M Build"
metaDescription: "The pricing math behind data center exterior treatment: four inputs, three facility sizes, and how the cost compares with a $633M average build."
---

<p>Exterior treatment sits much closer to a landscape budget than an architectural one, which on a $500M build makes it a rounding error. The arithmetic behind that comes down to the four inputs that determine the price, what those inputs produce at three typical facility sizes, and what the resulting numbers look like against total construction cost.</p>

<h2>What the price is built from</h2>

<p>Exterior treatment pricing has four inputs that compound against each other. The base rate runs $8–$15 per square foot depending on treatment type. Three multipliers apply on top of it: one for design complexity, one for the substrate being treated, and one for wall height.</p>

<table>
<thead><tr><th>Input</th><th>What it captures</th><th>Range</th></tr></thead>
<tbody>
<tr><td>Base rate</td><td>Treated square footage</td><td>$8–$15/sq ft</td></tr>
<tr><td>Complexity</td><td>Pattern intricacy, from simple catalog to fully bespoke</td><td>1.0&times; to 2.5&times;</td></tr>
<tr><td>Substrate</td><td>Surface preparation and adhesion difficulty</td><td>1.0&times; to 2.2&times;</td></tr>
<tr><td>Access</td><td>Wall height and scaffold requirements</td><td>1.2&times; to 2.4&times;</td></tr>
</tbody>
</table>

<div class="pc-stat">
  <div class="pc-stat-num">$8–$15</div>
  <div class="pc-stat-label">per sq ft base rate</div>
  <div class="pc-stat-caption">depending on treatment type, before complexity, substrate, and access multipliers</div>
</div>

<p>The three multipliers compound. The ceiling case&mdash;a fully bespoke design on rough split-face CMU at 120 feet&mdash;works out to 2.5 &times; 2.2 &times; 2.4 = 13.2&times; the base rate: about $105/sq ft on the $8 base, and about $198/sq ft on the $15 base. That combination exists. Most purpose-built hyperscale facilities don't look like it.</p>

<p>The common case for a purpose-built tilt-up concrete building is smooth substrate (1.0&times;), a geometric pattern of moderate intricacy (1.5&times; complexity), and walls in the 30&ndash;80 foot range (1.5&times; access). On the $8 base, that combination produces <span class="pc-quote">$18 per square foot</span>; on the $15 base, about $34. The middle column below uses the $8 figure, and the full-range column covers the rest.</p>

<h2>Three facility sizes, worked through</h2>

<p>Treatable facade area is not the same as floor area. A 200,000 sq ft single-story building at 40-foot wall height yields roughly 70,000&ndash;90,000 sq ft of treatable exterior wall, depending on how many facades face public or residential areas. The estimates below use typical figures for each class.</p>

<table>
<thead><tr><th>Facility type</th><th>Typical facade area</th><th>Treatment at $18/sq ft</th><th>Full range</th></tr></thead>
<tbody>
<tr><td>Edge / small</td><td>15,000 sq ft</td><td>$270,000</td><td>$150K&ndash;$500K</td></tr>
<tr><td>Medium colocation</td><td>42,000 sq ft</td><td>$760,000</td><td>$400K&ndash;$1.4M</td></tr>
<tr><td>Hyperscale (one building)</td><td>96,000 sq ft</td><td>$1.73M</td><td>$900K&ndash;$3.2M</td></tr>
</tbody>
</table>

<p>A campus of three to five buildings&mdash;200,000 to 400,000 sq ft of treatable wall area&mdash;runs $3.6M&ndash;$7.2M at the common-case rate.</p>

<h2>Against the total build cost</h2>

<p><a href="https://news.constructconnect.com/february-2026-data-center-report-after-record-growth-the-outlook-for-the-year-ahead" target="_blank" rel="noopener">ConstructConnect's February 2026 data center report</a> put the average cost of a U.S. data center in 2025 at $633 million, up 70% over the prior year. Costs have kept climbing since; by <a href="https://news.constructconnect.com/october-2026-data-center-report-spending-reaches-98.5-billion-ytd-construction-costs-rise" target="_blank" rel="noopener">October 2026</a> the average had passed $1 billion, which only makes the percentages below smaller. On a $633M facility, a $1.73M treatment for a single hyperscale building is 0.27% of total construction cost.</p>

<div class="pc-stat">
  <div class="pc-stat-num">0.27%</div>
  <div class="pc-stat-label">of total build cost</div>
  <div class="pc-stat-caption">single hyperscale building treatment at common-case rate, against $633M average</div>
</div>

<p>For a three-building campus, a $4M treatment is 0.63% of that same average. Even the ceiling case&mdash;$105 to $198/sq ft across 250,000 sq ft of campus wall area&mdash;totals roughly $26M to $50M, about 4 to 8% of a $633M build. That is the worst-possible scenario stacked: most complex design, most difficult substrate, tallest practical walls, across the largest realistic scope. The actual distribution sits considerably lower.</p>

<p>Jackson Metcalf, who leads Gensler's data center practice, framed the proportionality directly in a <a href="https://www.semafor.com/article/01/07/2026/how-tech-companies-are-redesigning-data-centers-to-fight-backlash" target="_blank" rel="noopener">January 2026 Semafor piece</a>: &ldquo;Architecture is like the lowest cost of all the different disciplines of data centers.&rdquo; Exterior treatment is a fraction of architecture. The math follows from there.</p>

<h2>What the alternatives actually cost</h2>

<p>The right comparison is against the other options on the evaluation: landscaping and architectural redesign. Both have sticker prices. Neither sticker price fully represents the cost of ownership.</p>

<p>A perimeter screening buffer&mdash;Leyland cypress or similar conifers&mdash;is the cheapest option to install, but the installed price omits irrigation, replacement cycles, trimming, and inspections over the life of the project. It also omits the biology: a <a href="https://research.fs.usda.gov/treesearch/18718" target="_blank" rel="noopener">Berkeley and Oakland study of newly planted street trees</a> (Nowak, McBride &amp; Beatty, 1990) found 34% dead or removed within two years, an average annual mortality of 19%. Street trees aren&#x27;t screening conifers, but the lesson carries. Replanting cycles are part of the cost model, not an exception to it. The <a href="/research/data-centers-ugly-zoning-problem/">height problem</a> is separate: Leyland cypress <a href="https://fieldreport.caes.uga.edu/news/leyland-cypress-trees-often-planted-incorrectly/" target="_blank" rel="noopener">plateaus at 40&ndash;60 feet</a> mature, and the tallest data center buildings rise well past that. No screening budget closes that gap.</p>

<p>Architectural redesign produces better visual outcomes than either alternative, at a different cost and timeline. Design-phase changes to massing or facade character cost the most of the three options, and retrofitting an existing facility costs more still. Either path adds months to a schedule rather than weeks. It makes sense for a specific subset of sites&mdash;downtown locations, strong design review boards, corporate flagship status&mdash;and not for the bulk of the pipeline.</p>

<p>Exterior treatment sits between landscaping and redesign on cost, and ahead of both on installation timeline. A standard 40,000&ndash;80,000 sq ft project on a concrete substrate typically runs three to six weeks from design sign-off to completion.</p>

<h2>How the approval conversation tends to go</h2>

<p>At these thresholds, budget authorization tends not to be the actual constraint. A $500,000 treatment on a $200M facility is small enough to sit inside a typical project contingency. At $1.7M it likely needs capital approval, but it is still a rounding error against the $633M average build.</p>

<p>The more revealing number is the cost of the alternative. A three-month permitting delay on a $200M project, at a 6% annual cost of capital, costs $3M in carrying costs alone&mdash;before legal fees, zoning restudies, or community engagement consultants. In 2025, roughly 40% of data center projects that met local opposition <a href="https://heatmap.news/daily/260-billion-data-center-opposition" target="_blank" rel="noopener">didn&#x27;t go forward</a>, by Heatmap&#x27;s count. For a $200M project, that is a $200M outcome risk sitting behind an unresolved aesthetic objection, not a line item. <span class="pc-quote">The expected cost of doing nothing is considerably higher than any treatment scenario on this page.</span></p>

<div class="pc-stat">
  <div class="pc-stat-num">$3M</div>
  <div class="pc-stat-label">carrying cost</div>
  <div class="pc-stat-caption">of a 3-month permitting delay on a $200M project at 6% annual cost of capital</div>
</div>

<p>Most developers who run this comparison reach the same conclusion without much deliberation: against the cost of a stalled approval, treating the wall is the cheap option.</p>
