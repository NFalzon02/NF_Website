# Sports Photography Sites — Research & Recommendations

> Reviewed for the NF Photography landing page · May 2026

A scan of working sports & editorial photography portfolios, Awwwards-recognised photo sites, and motion-design conventions in the genre — distilled into recommendations that respect the brand's "quiet, editorial, no-bounce" rules.

---

## What the genre is actually doing

### Working sports photographers (Vogan, Loff, Armstrong, Burke)
- **Lead with one large action photograph** in the hero, not a tagline-only screen. <cite index="10-3,10-4,10-5">Jeff Vogan opens with the proposition "high-speed sports action photography and 'Pro-style' media day portraits for recruitment, marketing, and social media. Fully insured and police check cleared. Get live game highlights and full galleries delivered within 24 hours."</cite> — credentialing and turnaround sit in the hero.
- **Sport-by-sport navigation** as a single horizontal strip. <cite index="10-8">Vogan's footer line reads "Baseball | Branding | Commercial | Concert | Cycling | Diving | Event | Football | Golf | Headshot | Hockey | Lacrosse | Lifestyle | Media Days | Portrait | Soccer | Swimming | Team + Individual | Tennis | Training"</cite> — one long taxonomy bar instead of a dropdown.
- **Speed and licensing as headline copy.** <cite index="10-26">Vogan claims an "industry-leading workflow powered by Photo Mechanic, I deliver polished, high-resolution galleries within 24 hours"</cite> — the turnaround number is the hero CTA's adjacent proof.
- **One-page sites with anchor-jump navigation** dominate this tier — the photographer is selling a service, not running a publishing brand. The whole conversion sits above the fold or one scroll below it.

### Editorial / photojournalism sites (Levon Biss, Don Jones, Sanz Lena, Format "Beacon" / "Editorial" templates)
- **Masonry or asymmetric grid as the homepage portfolio.** <cite index="4-7,4-8,4-9">Levon Biss's "homepage of this website is the main photography portfolio page. It showcases photos in a masonry grid. Visitors can click on each image to learn more about the photo project."</cite> The hero IS the portfolio.
- **Black backdrop with images as the focal element.** <cite index="6-22,6-23,6-24">Don Jones' portfolio uses "a minimalist menu with a contact call to action on the right. The black backdrop directs attention to work samples in a random grid layout. Primary sports include basketball and rugby, with hover animations in colour."</cite>
- **Text-on-left, scrolling gallery on right** is the canonical editorial layout. <cite index="24-1,24-2">"All the pages have the title and a small description on the left and a scrolling gallery on the right that always remains the center of attention."</cite>
- **Horizontal scroll for project pages.** Format's editorial templates ("Beacon", "Medium", "Editorial") are built around it. <cite index="21-1,21-2,21-3">"If you're going for a very Editorial feel, Beacon is probably the best choice for you. The landing page lets your user hover over the titles of your projects to reveal an image from that collection, and once they click they are taken to a horizontally scrolling page with the unique feature of dynamic spacing. This means the white space between images adjusts based on the dimensions of each picture..."</cite>
- **"Adaptive background"** that pulls the dominant colour from the current image. <cite index="21-10,21-11">Format's Editorial theme uses "infinite scrolling, which lets users scroll to the next photo set when they get to the end of one, and the adaptive background. This theme will pull colors from your image, and change the background color to best display that image."</cite>
- **Hover-on-title reveals an image preview.** Found in the Beacon template and also in Don Jones' portfolio with "hover animations in colour." <cite index="6-24">Don Jones uses "hover animations in colour" against a black backdrop</cite>; <cite index="21-2">Beacon "lets your user hover over the titles of your projects to reveal an image from that collection"</cite>.

### Awwwards / Site-of-the-Day photo sites (HelloThierry, Phase One, Levesque, Tennis Club Oderzo)
- **Background image slideshow** running behind the layout. <cite index="15-1,15-2,15-3">HelloThierry "works very well as a photography-folio, with poignant web design elements that are based on aesthetical neatness, minimalism, and sobriety. This website has been voted as SOTD at both CSS Winner and Awwwards. Rich in animation and transition effects, the background images in the website run like a slideshow gallery, making any visitor to the site truly focus on the images themselves."</cite>
- **Custom cursor that grows on hover.** <cite index="8-1,8-2">"A mouse cursor gets bigger once the user hovers over an image before clicking on it – a recurring theme in many recently developed websites."</cite>
- **Brand-coloured or shape-based cursor.** <cite index="8-5,8-6">Tennis Club Oderzo's site opens "with a crisp photo of a tennis player mid-serve. A mouse cursor in the shape and color of a tennis ball is a nice touch, adding the final piece of the puzzle to the said photo."</cite>
- **Sticky muted autoplay video** as a hero element. <cite index="6-17">Van Rensburg's "video page opens with a sticky, muted autoplay video followed by YouTube embeds that support slideshow viewing."</cite>
- **Scroll-triggered reveals + clip-path geometry** are the dominant 2026 motion language for award-winning sites. <cite index="11-5,11-6,11-7,11-8">Modern award-winning sites use "Scroll-Based Animations: Dynamic animations triggered by scrolling for a more engaging user experience. Clip Path Shaped Animations: Unique geometric transitions using CSS clip-paths to create visually stunning effects. 3D Hover Effects: Interactive 3D transformations that respond to user interactions for a modern feel. Video Transitions: Seamlessly integrated video elements to enhance storytelling and flow."</cite>
- **Background colour shifts as you scroll between sections.** Aligns with adaptive-background and Format's "Coral" template; gives the page rhythm without bouncy motion.

### Recurring conversion patterns
- **Press logos / publication credits** in a dedicated strip. <cite index="29-15">"Black-and-white brand logos create visual consistency and build trust"</cite> — bands of muted client logos build trust without crowding.
- **Multi-channel contact icons** in nav and footer. <cite index="29-3">"Email and Instagram icons appear in both the navigation and the footer, reducing friction for clients who prefer different communication channels."</cite>
- **Captions that name the moment.** Photojournalism wins on context. <cite index="9-10,9-11,9-12">"A short caption or description can go a long way. Mention the sport, the type of play, or why the moment was significant. It helps people connect with what they are seeing, especially if they're not familiar with the sport."</cite>

---

## Recommendations for the NF Photography landing page

Ranked by impact, all compatible with the brand's "no shadow, no bounce, quiet motion" rules.

### 1 · Lead the hero with a real photograph, not a black gradient
Every site in this genre — working pro and editorial alike — leads with imagery. The current hero is a black radial gradient with a tagline overlay; that's a brand-deck cover, not a sports site. Move the tagline to the bottom-third with the eyebrow and CTA pinned over a full-bleed match-day frame. **Replace the gradient placeholder** with a single, strong photograph; if Nicholas can supply 4–6 images we can build a quiet 6-second cross-fade slideshow behind a fixed text block (HelloThierry's pattern). **Quiet motion only** — opacity cross-fade at 1200ms, easing `cubic-bezier(.2, 0, 0, 1)`, no Ken Burns, no zoom.

### 2 · Add a portfolio strip directly below the hero
The current page has problem → solution → proof with no work shown until the bottom. Sports clients self-select on visuals. Add a 4-up sport-categorised grid (Football / Futsal / Motorsport / Waterpolo) above "The problem." Use the **eyebrow-on-image** pattern — sport name in tracked-teal caption over each frame, photographer's caption in white below.

### 3 · Horizontal-scrolling press marquee — *quiet*
Replace the static 4-column press strip with a continuously-scrolling band of publication names + brief credits. **Move at constant velocity** (no easing curve, no parallax, no pause-on-hover unless explicit) — pure linear translation, ~30s per loop. This is the one piece of motion that *is* on-brand for an editorial photojournalist (newspaper ticker / wire service feel) and avoids the bounce/spring vocabulary the brand bans.

### 4 · Sport-name cycling in the hero headline
Instead of the static "Pitchside, poolside, trackside.", run a typed cycle through `FOOTBALL / FUTSAL / MOTORSPORT / WATERPOLO` (each held for 3s, 200ms cross-fade between) in the eyebrow line. Keeps the four sports front-and-centre — a working photographer's primary sales argument — and uses opacity-only motion. Tagline below stays static.

### 5 · Scroll-triggered reveals on section openers
Every editorial photo site uses subtle reveals. Each `eyebrow → heading → lead` triple should fade up 12px on scroll-into-view, with a small stagger (eyebrow at 0ms, heading at 80ms, lead at 160ms). Duration 280ms, easing standard. **Respects `prefers-reduced-motion`.** This is the one motion pattern that reads "modern editorial site" without breaking the brand's quiet rule.

### 6 · Adaptive section background
Three sections, three backgrounds — already partly done. Push it further: **the page should breathe between black, navy, and white** as you scroll, not just the feature section. Recommendation: `Hero (black) → Portfolio (white) → Problem (off-white #FAFAFA) → Solution (navy) → Press (black) → Proof (white) → Final CTA (black) → Footer (black)`. Each colour change is a section break that needs no headline — the colour does the work.

### 7 · Stat counters that count up on scroll
The "48h / 1 of 3 / 4×" stats are static text. **Animate them counting up from 0** when the section enters the viewport — single sweep, 1200ms, ease-out. Keeps the "speed is the product" claim tactile without crossing into bouncy territory.

### 8 · Caption-driven portfolio cards
Adopt the photojournalism convention: every portfolio card carries a sport tag, a moment caption ("Equaliser, 78th minute"), and a competition/score line ("Hibernians 1–1 Floriana"). Already in the website kit; **promote it onto the landing page** so the site reads as a working journal, not a marketing page.

### 9 · A "Latest fixture" strip near the contact form
A small "MOST RECENT · 2026/05/03 · MFA Cup Quarter-Final · 4 frames" block above the booking form. Recency proves the practice is active. Pulled from a static array now; can be wired to a feed later.

### 10 · Contact icons in nav + footer
Add Instagram and email icons (Lucide stroke icons, currentColor) to both the header right and footer columns — the multi-channel pattern is ubiquitous in the genre because B2B (clubs) and B2C (athletes) prefer different channels.

---

## Things in the genre we should NOT copy

- **Custom cursors.** Read as "consumer agency portfolio" and clash with the photojournalist register. Skip the tennis-ball cursor.
- **Hover-zoom on portfolio cards.** Common in the genre (e.g. Cordey, VanCannon) but the brand rule is no scale transforms. Use a hairline border colour shift instead.
- **Background-colour-from-image (adaptive bg from current photo).** Beautiful, but the brand has only three approved background colours — don't paint the page with arbitrary photo colours.
- **Drop shadows / glows around imagery.** Standard outside the brand; banned inside it.
- **Magazine-style overlapping text on images.** The Squarespace "ilovecreatives" template uses "Scattered images, clean text, and satisfying lines" <cite index="28-9">"Scattered images, clean text, and satisfying lines!"</cite> — visually nice but reads "fashion editorial," not "newspaper sports desk."
- **Auto-scrolling service widgets** that loop without interaction. Reads as informercial.
- **Long photographer-as-hero bios.** Most sports photographers do this; brand voice rule is "the athlete is the hero" — keep the about block as Nicholas's third-person credentialing, not a manifesto.

---

## Ship list

A v2 landing page (`Landing Page v2.html`) implements recommendations 1, 2, 3, 5, 6, 7, 8, and 10 above. Recommendations 4 and 9 are hooks ready to wire up — the four-sport rotator is in place but defaulted to static; the latest-fixture block needs Nicholas to confirm the source feed. All motion respects `prefers-reduced-motion: reduce`.
