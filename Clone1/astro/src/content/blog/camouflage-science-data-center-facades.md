---
title: "What Camouflage Science Actually Says About Data Center Facades"
description: "Five peer-reviewed studies on disruptive coloration and dazzle, what they support when the target is a concrete wall instead of a moth, and where the evidence runs out."
subtitle: "The research on how eyes find objects keeps pointing at the outline rather than the color. Here is what five studies found, how much of it carries over to a building that isn't going anywhere, and where the evidence stops."
date: 2026-09-30
category: "Design"
readTime: 8
image: "/assets/data-center-camouflage-facade-concept.jpg"
imageAlt: "Concept rendering of a large data center with a green and tan camouflage pattern, seen across a field of tall grass."
metaTitle: "Camouflage Science and Data Center Facades"
metaDescription: "Five peer-reviewed studies on disruptive coloration and dazzle, what they support when the target is a concrete wall, and where the evidence runs out."
---

<p>Most talk about camouflaging a data center starts and ends with paint color: a sage green, a sandy beige, something that is supposed to blend in. Biologists and vision scientists have spent about a century working out how animals avoid being seen, and their results suggest color is the smaller half of the problem. What gives an object away is its outline, and the patterns that work best are the ones that break the outline up.</p>

<p>This post goes through five studies from that literature, all peer-reviewed and listed with links at the bottom. For each one we cover what it found, how much of it applies to a building, and where it stops applying. Some of the claims made for patterned buildings, including by companies that sell them, go further than the evidence does, and we would rather say where that line is.</p>

<h2>Why does a blank data center stand out?</h2>

<p>A blank data center stands out because its outline is long, straight, and uninterrupted. A 400-foot wall in one color, meeting the sky along a single roofline, is close to the easiest thing in a landscape for the eye to pick out. Vision science models the early stages of seeing as edge detection: the visual system finds places where brightness or color changes, joins them into contours, and treats a closed contour as an object.</p>

<p>The naturalists who first wrote about camouflage saw the same problem. Abbott Thayer in 1909 and Hugh Cott in 1940 both argued that matching an animal's color to its background can't be enough on its own, because the body outline still forms a clear boundary against whatever is behind it, and shape is one of the main cues an observer uses to recognize an object. A building painted a single color to match its surroundings has that problem too, just in a quieter shade.</p>

<h2>What is disruptive coloration?</h2>

<p>Disruptive coloration is patterning that creates false edges inside an object so its real outline is harder to find. Instead of one boundary around the body, the eye gets many boundaries running across it, and the pieces don't obviously belong together.</p>

<p>Martin Stevens and Innes Cuthill tested the mechanism directly in <a href="https://doi.org/10.1098/rspb.2006.3556" target="_blank" rel="noopener">a 2006 study in Proceedings of the Royal Society B</a>. They ran photographs of moth-like targets through a computational model of edge detection calibrated to bird vision. Disruptive patterns worked because the model found edges inside the target's body rather than along its outline, and without a clean outline the target was harder to separate from its background.</p>

<p>Irene Espinosa and Cuthill added a second layer <a href="https://doi.org/10.1371/journal.pone.0087153" target="_blank" rel="noopener">in PLoS ONE in 2014</a>. Human participants searched for targets on a screen, and they made more errors when a target's color patches appeared to belong to different objects in the background than when patches with identical contrast appeared to belong to a single object. Targets sitting on or near several color or tone boundaries in the background were also harder to find. The eye assigns each patch of color to something, and a pattern works better when its patches get assigned to different things in the scene.</p>

<h2>Does breaking the outline work better than matching the color?</h2>

<p>In the most direct comparison we know of, it does. Jolyon Troscianko, John Skelhorn and Martin Stevens, <a href="https://doi.org/10.1186/s12862-016-0854-2" target="_blank" rel="noopener">writing in BMC Evolutionary Biology in 2017</a>, had people search for camouflaged targets and tested how well a bank of established camouflage measures predicted the results, including luminance and contrast matching and several kinds of pattern matching. The best predictor of how long a target took to find was a new measure the authors built, called GabRat, which scores the ratio of false edges to true, outline-following edges around a target. Edge disruption predicted detection better than how closely the pattern or brightness matched the background.</p>

<div class="pc-stat">
  <div class="pc-stat-num">3,840</div>
  <div class="pc-stat-label">search trials across 120 participants</div>
  <div class="pc-stat-caption">Edge disruption was the best single predictor of how long a camouflaged target took to find (Troscianko, Skelhorn &amp; Stevens, 2017)</div>
</div>

<p>For a building, that result is the one to take away. A single well-chosen color works on the weaker variable, while a pattern that carries edges across the roofline and corners, so they stop reading as one continuous line, works on the stronger one.</p>

<h2>What about dazzle, the zigzag patterns on warships?</h2>

<p>Dazzle is a different idea, designed for things that move, so most of what it promises doesn't apply to a building. In 1917 the British artist Norman Wilkinson persuaded the Admiralty to stop trying to hide merchant ships and paint them in high-contrast geometric patterns instead. The aim was confusion rather than concealment: a U-boat captain looking at a dazzle-painted ship would misjudge its course.</p>

<p>Lab work has found real effects. Nicholas Scott-Samuel and colleagues at the University of Bristol showed <a href="https://doi.org/10.1371/journal.pone.0020233" target="_blank" rel="noopener">in 2011</a> that dazzle patterns can distort perceived speed, with the largest effect at high speeds. <a href="https://academic.oup.com/biolinnean/article/140/4/485/7252242" target="_blank" rel="noopener">A 2023 review by the same group in the Biological Journal of the Linnean Society</a> was more cautious: studies with human observers show misperceptions under controlled conditions, but the effects are inconsistent in direction and size, and it hasn't been established that they carry over to the real world. The review defines dazzle by what it does, as coloration that makes a moving target harder to intercept by distorting its perceived speed, trajectory or range.</p>

<figure><img loading="lazy" src="/assets/data-center-dazzle-facade-concept.jpg" alt="Concept rendering of a data center covered in a black-and-white geometric dazzle pattern at a street corner." style="width:100%;height:auto;display:block;"/></figure>

<p>A data center has no speed or trajectory to distort. The same review points out, though, that high-contrast patterns that would act as dazzle on a moving target can have a disruptive function when the target is still, and that disruption is likely most effective on stationary targets where at least one element of the pattern blends with the background. So a dazzle-style facade on a building is doing one of two jobs, breaking up the outline or making a visual statement, and both are reasonable goals as long as nobody is promising the naval effect.</p>

<h2>How does this translate to a data center facade?</h2>

<p>Read together, the studies give a short list of design rules that hold up. They are the rules our pattern work starts from.</p>

<ul>
<li>Sample colors from what is actually behind the building from its main viewpoints. Disruption works best when at least one element of the pattern matches the background, and for a data center the background changes with height: ground, vegetation and tree line low on the wall, sky near the roofline.</li>
<li>Carry pattern edges across the outline. The corners and the roofline are where the building's shape gets read, so false edges placed there do the most work.</li>
<li>Build in real contrast between patches. False edges come from adjacent colors that differ sharply, and a low-contrast wash in one family of tones leaves the outline intact.</li>
<li>Let patches read as different things. A band that reads as sky next to a band that reads as tree line does more than two shades of the same beige, which is the Espinosa and Cuthill result applied at building scale.</li>
<li>Decide the goal first. If the brief is a landmark, as it was for <a href="/research/google-data-center-murals-what-it-proved/">Google's data center murals</a>, blending isn't the point and none of the rules above apply.</li>
</ul>

<figure><img loading="lazy" src="/assets/data-center-landscape-pattern-facade-concept.jpg" alt="Concept rendering of a large data center campus with an earth-toned wave pattern and lighter blue bands across its long facade." style="width:100%;height:auto;display:block;"/></figure>

<h2>What does the research not show?</h2>

<p>It doesn't show that a patterned building becomes invisible, that it reads some percentage smaller, or any other number you may see attached to facade treatment. None of these five studies tested buildings. The targets were shapes on computer screens and photographs of moth-like targets run through a model of bird vision, at viewing distances nothing like a driver passing a 40-foot wall.</p>

<p>The goal is different as well. Neighbors aren't searching for the data center, because they already know where it is. What a pattern can realistically do is stop the building from registering at a glance as one enormous blank box, which is the complaint behind a lot of public comment at data center hearings. The perception research says outline disruption is the right mechanism for that job. It doesn't supply a percentage, and anyone who quotes one is guessing.</p>

<h2>Why does this matter for a planning board?</h2>

<p>It matters because several codes already ask for outline disruption in their own words. The Prince William County <a href="https://library.municode.com/va/prince_william_county/codes/code_of_ordinances?nodeId=CH32ZO_ARTVOVDI_PT509DACEOPZOOVDI" target="_blank" rel="noopener">Data Center Opportunity Zone Overlay District (DCOZOD)</a> requires principal building facades to avoid undifferentiated surfaces, and Fairfax County <a href="https://www.mcguirewoods.com/client-resources/alerts/2024/9/fairfax-county-board-adopts-data-center-zoning-changes/" target="_blank" rel="noopener">requires a change in the facade surface</a> at least every 150 feet. An undifferentiated surface is a wall with no internal edges, and a required change every 150 feet is a limit on how long one continuous run can be.</p>

<p>That gives an applicant something better than taste to argue from. A treatment designed around edge disruption can be explained to a board in terms of how people see large objects, with published research behind it.</p>

<h2>Sources</h2>

<ol>
<li>Stevens, M. &amp; Cuthill, I. C. (2006). Disruptive coloration, crypsis and edge detection in early visual processing. <em>Proceedings of the Royal Society B</em>, 273, 2141&ndash;2147. <a href="https://doi.org/10.1098/rspb.2006.3556" target="_blank" rel="noopener">doi.org/10.1098/rspb.2006.3556</a></li>
<li>Scott-Samuel, N. E., Baddeley, R., Palmer, C. E. &amp; Cuthill, I. C. (2011). Dazzle camouflage affects speed perception. <em>PLoS ONE</em>, 6(6), e20233. <a href="https://doi.org/10.1371/journal.pone.0020233" target="_blank" rel="noopener">doi.org/10.1371/journal.pone.0020233</a></li>
<li>Espinosa, I. &amp; Cuthill, I. C. (2014). Disruptive colouration and perceptual grouping. <em>PLoS ONE</em>, 9(1), e87153. <a href="https://doi.org/10.1371/journal.pone.0087153" target="_blank" rel="noopener">doi.org/10.1371/journal.pone.0087153</a></li>
<li>Troscianko, J., Skelhorn, J. &amp; Stevens, M. (2017). Quantifying camouflage: how to predict detectability from appearance. <em>BMC Evolutionary Biology</em>, 17, 7. <a href="https://doi.org/10.1186/s12862-016-0854-2" target="_blank" rel="noopener">doi.org/10.1186/s12862-016-0854-2</a></li>
<li>Scott-Samuel, N. E., Cuthill, I. C., Caro, T., Matchette, S. R. et al. (2023). Dazzle: surface patterns that impede interception. <em>Biological Journal of the Linnean Society</em>, 140, 485&ndash;503. <a href="https://academic.oup.com/biolinnean/article/140/4/485/7252242" target="_blank" rel="noopener">academic.oup.com/biolinnean/article/140/4/485</a></li>
</ol>
