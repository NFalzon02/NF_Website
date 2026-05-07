# NF Photography — Design System

> Pitchside, poolside, trackside.
> Sport, captured properly.

This is the design system for **NF Photography**, the Malta-based sports photojournalism practice of **Nicholas Falzon**. It's the living source of truth for the brand's mark, colour, type, voice, and UI components — distilled from the official NF Photography Brand Guidelines (v1.0, May 2026).

The brand has a single, deliberate posture: a **working sports photojournalist** documenting football, futsal, motorsport, and waterpolo on a journalist's timeline — not a creative agency, not a "visual storyteller," not a hobbyist with a camera. Every choice in this system reinforces that posture.

## Sources

- `uploads/NF-Photography-Brand-Guidelines.md.pdf` — the canonical brand guideline (v1.0, May 2026, owner: Nicholas Falzon)
- `uploads/brand-guidelines.txt` — extracted plain-text version for fast lookup
- Reference site (per guidelines): `nfalzon.com` · Instagram: `@nfalzon_photos`

> **Note for the next reader:** if you have access to the original asset kit (logo masters, colour CSS, typography CSS, button CSS), drop them into `assets/` and `tokens/` and they will supersede the recreations here. The guidelines reference these specific files: `nf-logo-with-frame-a-symmetric.png`, `nf-frame-brackets-overlay.svg`, `nf-color-system.css`, `nf-typography.css`, `nf-buttons.css`.

---

## The brand at a glance

| | |
|---|---|
| **Business name** | NF Photography (invoices, contracts, watermarks, decks, footers, social handles) |
| **Personal name** | Nicholas Falzon (about page, newspaper credits, athlete conversations, email signatures) |
| **Tagline** | Pitchside, poolside, trackside. |
| **Supporting line** | Sport, captured properly. |
| **Values** | Craft · Speed · Range · Trust |
| **Personality** | A sports photojournalist who takes the work seriously and knows how to get it done |
| **Primary sports** | Football · Futsal · Motorsport · Waterpolo |
| **Market** | Malta + occasional regional travel · Mid-tier professional |

The two names run in parallel on purpose: **NF Photography** carries the B2B credibility (clubs hire a business under contract); **Nicholas Falzon** carries the relationship (athletes and journalists trust a person on the sideline).

---

## CONTENT FUNDAMENTALS

The voice should sit roughly where a **sports columnist's voice** sits — confident, observational, sport-fluent, with restraint. Not hype-y like a brand promotion, not cold like a corporate spec sheet, not florid like wedding photography copy.

### Always
- **Direct.** Say what happened, not how it felt.
- **Sport-fluent.** Use the actual terminology of each sport — *"78th minute"*, *"qualifying session"*, *"lane line"*, *"third period"*. Specifics over abstractions.
- **Athlete-respectful.** The athlete is always the hero, never the photographer.
- **Confident without claiming.** The work and the press credits do the boasting.
- **Filed on deadline.** Time and turnaround language is part of the product: *"90 minutes, full gallery in 24 hours."*

### Never
- "Capturing moments that last a lifetime."
- "Passionate about my craft."
- Generic adjectives — *stunning, amazing, beautiful, magical, breathtaking.*
- Photographer-as-hero language.
- **Exclamation marks for emphasis.** Ever.

### Casing & punctuation
- **Sentence case** for headings, buttons, captions. Reserved Title Case only for proper nouns and section labels.
- **UPPERCASE** is permitted only on the **eyebrow** pattern (eyebrow is short, tracked +0.075em, 12px).
- **Em-dashes** ( — ) and periods, not colons-then-clause. Short clauses, hard stops.
- **No emoji.** Not in copy, not in UI, not in social.
- **No exclamation marks.** Quietly confident — the work talks.

### "I" vs "you"
- **You** is reserved for the client (proposals, CTAs): *"Book a shoot."* / *"See your gallery."*
- **First-person ("I")** belongs only on the **Nicholas Falzon** about page and direct correspondence, not on NF Photography surfaces.
- Most marketing copy is **third-person observational** — describing the work and the deliverable, not narrating the photographer's feelings.

### Vibe
Editorial. Newspaper-grade. Quietly confrontational — the supporting line *"Sport, captured properly"* implies the alternative (most local sports photography) is improperly done. That's the brand's market opening, and it should breathe through every piece of copy without being said out loud.

### Examples — Do / Avoid

| ✅ Do | ❌ Avoid |
|---|---|
| Equaliser, 78th minute. Hibernians 1–1 Floriana. | Capturing the raw emotion of a beautiful moment in Maltese football! |
| Pitchside coverage, 90 minutes, full gallery in 24 hours. | Passionate sports photography that captures every moment that matters! |
| Featured in the Times of Malta press archive. | Award-winning, internationally recognised photojournalism. |
| Three sports. Four federations. One season. | Bringing your sports memories to life through the magic of photography. |

### Eyebrow pattern (the highest-leverage editorial move)

Use this on every major page section — about, services, portfolio category headers, press features:

```
PRESS · WATERPOLO         ← eyebrow (caption size, uppercase, tracked, teal)
Behind the lane line.     ← heading (h1 or h2)
A season covering…        ← lead paragraph
```

---

## VISUAL FOUNDATIONS

### Aesthetic in one line
**Documentary-modern. Editorial-grade.** Built for the back page of a paper, not for a wedding album.

### Colour
A three-anchor system. Black is the foundation; teal is the accent (energy, freshness); navy is the depth (authority, editorial weight). The pairing is what gives the brand a layered voice that single-accent systems can't reach.

| | Hex | Token | Use |
|---|---|---|---|
| Foundation Black | `#0A0A0A` | `neutral-950` | Logo background, primary surfaces in inverted contexts, default action button. (Reserved over pure `#000` because it's slightly softer on screen.) |
| Brand Teal | `#14B8A6` | `teal-500` | The accent. Hero displays, dark sections, eyebrows, decorative accents. On light backgrounds step to `teal-700` `#0F766E` for text and `teal-600` `#0D9488` for fills — the brand teal itself fails AA contrast on white. |
| Brand Navy | `#1E3A8A` | `navy-900` | The depth. Editorial heading colour, feature section backgrounds, secondary identity expression. In dark mode use `navy-700` `#1D4ED8` for feature surfaces. |

#### Three usage patterns (most pages mix them)

1. **Default** — black on white with occasional teal accents. Portfolio, services, blog posts, contact forms.
2. **Editorial** — navy heading on white, neutral body, teal inline accent. About pages, manifestos, mission sections.
3. **Feature** — navy section with white text and light teal accent. Press blocks, sponsorship sections, hero callouts, season-stat moments.

> **Strict rule:** No teal or navy CTA buttons. Brand colours are for brand moments, not for asking the user to click. Hierarchy is built on contrast against the page, not colour.

#### Status colours (UI feedback only — never brand expression)

| Status | Default fill | Light text | Dark text |
|---|---|---|---|
| Success | `#16A34A` | `#15803D` | `#4ADE80` |
| Warning | `#F59E0B` | `#B45309` | `#FCD34D` |
| Error | `#EF4444` | `#DC2626` | `#F87171` |

### Type
Two fonts, both free on Google Fonts, both loaded as **variable fonts** (one file each, full 400–700 range).

| Role | Font | Weights | Used for |
|---|---|---|---|
| Headings | **Space Grotesk** | 400–700 | h1–h6, display, eyebrows |
| Body | **Inter** | 400–700 | body, lead, small, caption, buttons |

Type scale is **1.25 modular (minor third)**, anchored on 16px body — tight enough to feel refined and editorial, wide enough to give clear hierarchy. Default heading weight is **600 (semibold)**, not 700 — Space Grotesk at 600 already carries plenty of presence; bold is reserved for display/hero moments.

Underlying tracking principle: **as text gets bigger, tracking gets tighter and line height gets shorter.**

See `colors_and_type.css` for the full token list.

### Spacing & layout
- **4px base unit.** Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.
- **Eyebrow → heading → lead** is the canonical section opener. Use it on every major page section.
- **Generous whitespace.** Editorial layouts breathe; this is not a dense marketing page. Section padding is typically 64–96px on desktop.
- **Max content width** for long-form reading: ~70ch. Hero/full-bleed sections span the viewport.

### Backgrounds
- **Mostly solid.** White (`#FFFFFF`) for default; `#0A0A0A` for inverted; `#1E3A8A` for **feature** sections.
- **No gradients.** Not in backgrounds, not as accents. Brand is editorial, not promotional.
- **Photography is the texture.** The most common "background" pattern is a full-bleed sport image — not graphic decoration.
- **No repeating patterns, no hand-drawn illustrations, no SVG textures.** The brackets-overlay frame is the *only* recurring graphic motif.

### Imagery — colour vibe
- **Newspaper-grade colour.** Not Instagram-warm, not cinema-graded. Honest light, accurate skin, unembellished.
- **Crisp, not crunchy.** Subtle micro-contrast; no heavy grain, no film emulation overlays, no LUT-driven teal-and-orange.
- **Documentary cool-neutral** is the default mood — slightly cool whites, deep but not crushed shadows. Warmth comes from the scene, not the grade.
- **Black-and-white** is permitted for editorial / feature / press blocks but is not the default — it's a deliberate accent, not a brand-wide treatment.

### Animation
**Quiet motion only. Photojournalist brands don't bounce.**
- Durations: `120ms` (fast) / `180ms` (base) / `280ms` (slow).
- Easing: a single standard curve — `cubic-bezier(.2, 0, 0, 1)`.
- **No** spring/bounce/elastic easing. **No** scale-on-hover transforms. **No** upward translate on cards. **No** confetti, no flourishes.
- Allowed: opacity fades, background-colour transitions, simple cross-fades on image swaps, subtle reveal-on-scroll fades (≤ 12px translate, ≤ 280ms).

### Hover & press states
- **Hover:** background-colour shift only.
  - Primary buttons → darken (`#0A0A0A` → `#262626`).
  - Secondary → fill subtly (transparent → `--neutral-100`).
  - Ghost → fill subtly (transparent → `--neutral-50`).
  - Cards / links → underline appears, or text colour deepens. **No transform.**
- **Active / press:** brief return toward default colour (primary) or deeper fill (secondary, ghost). No scale.
- **Focus:** **2px outline ring, 2px offset.** This is the canonical focus treatment across all interactive elements.
- **Disabled:** `opacity: 0.4`, `cursor: not-allowed`.

### Borders, shadow & elevation
- **Borders are real.** 1px hairline (`--neutral-200`) is the default; 1px stronger (`--neutral-300`) for emphasis. Borders carry the "editorial print" feel.
- **No drop shadows.** Anywhere. Cards, modals, dropdowns — all use borders + background contrast for separation, never shadow.
- **No glows, no inner shadows, no neon.**
- **Elevation is communicated by border + background**, not z-axis lift.

### Corner radii
- **Buttons:** `6px`
- **Cards:** `8px`
- **Inputs / chips / tags:** `6px`
- **Avatars:** circular (`999px`) only when the source is a portrait photo; otherwise `8px`.
- **No fully-rounded "pill" buttons** — they read consumer-app, not editorial.

### Cards
A card is: 1px border, 8px radius, white surface (or `--neutral-900` in dark), 24px internal padding, optional 4:3 or 16:9 image header, no shadow. That's it. The frame is the structure; the image and the eyebrow do the work.

### Transparency & blur
- **Used sparingly.**
- Acceptable: low-opacity white watermark over photography (NF icon-only, 2–4% of image width, bottom-right).
- Acceptable: a sticky header that gains a subtle `backdrop-filter: blur(12px)` + 92% white background once scrolled — to keep editorial type legible over photography.
- **Not acceptable:** glassmorphism, frosted-glass cards, blurred decorative orbs, semi-transparent gradient overlays as decoration.

### Layout rules — fixed elements
- **One sticky header.** White / 92% with hairline bottom border on scroll.
- **No floating chat bubbles, no cookie consent slabs as design feature, no exit-intent modals.** Quiet UI.
- **Footer** is dark (`#0A0A0A`) with white text, never decorated.

### Logo & watermark
- Always preserve clear space equal to the height of the "N" on all sides.
- **White-on-dark** is primary; **black-on-light** for documents.
- **Vector** wherever possible (PDF, SVG); raster (PNG) only for screens.
- **Never** recolour outside black/white/single-tone teal/navy.
- **Never** add shadow, glow, outline, stretch, skew, or rotation.
- **Watermark:** icon-only (NF + brackets), bottom-right, 2–4% of image width, low-opacity white.

### What's deliberately absent (constraints make a brand)

- ❌ Blue or purple in the palette (teal + navy already cover the cool spectrum)
- ❌ A third accent colour beyond teal and navy
- ❌ Serif body type
- ❌ Condensed sport display fonts (Bebas Neue etc.)
- ❌ Teal or navy CTA buttons
- ❌ Drop shadows, glows, scale transforms, bounce easing

---

## ICONOGRAPHY

The brand guidelines do **not** prescribe an icon system — iconography is a quiet supporting role, not a brand-expression layer. This is what we've adopted to stay consistent with the editorial posture:

### Approach
- **Stroke icons, not filled.** Editorial weight — thin, precise lines that read as supporting information, not as decoration.
- **1.5px stroke weight, rounded line caps and joins, 24px viewbox.** Stroke colour is `currentColor` so an icon inherits the surrounding text colour (default `--color-text`, accent contexts get `--color-text-accent`).
- **No emoji. No unicode glyphs as icons.** Both read as casual / consumer-app and clash with the photojournalist register.
- **No multi-colour or duotone icons.** Single-tone only.
- **No animated icons** (no morphing menu→close, no spinning loaders with personality). A spinner is a 2-frame opacity pulse on a hairline ring.

### Library
We use **[Lucide](https://lucide.dev)** as the standard icon set — it matches the stroke weight, line cap, and grid we want, ships as React + SVG, has comprehensive coverage, and is MIT-licensed.

> **Substitution flag:** the brand guidelines do not specify a library. Lucide is our recommendation as the closest match to the documentary-modern stroke aesthetic. If the original site uses a different set (e.g. Phosphor "regular", Heroicons "outline"), swap in its CDN — both have the same weight & feel — and update this section.

Loaded by CDN where available:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

Common icons in use: `camera`, `arrow-right`, `arrow-up-right`, `download`, `play`, `pause`, `calendar`, `mail`, `instagram`, `chevron-down`, `menu`, `x`, `check`, `external-link`, `image`, `clock`, `map-pin`.

### Logo as an iconographic motif
The **four-corner viewfinder/crop-mark brackets** from the logo are the brand's *only* truly proprietary graphic motif. They can be reused as:
- A framing device around hero imagery
- A decorative bracket around press quotes
- The icon-only watermark on photography

See `assets/nf-frame-brackets.svg` for a standalone bracket overlay.

### Asset inventory in `assets/`

| File | Use |
|---|---|
| `nf-logo.svg` | Master logo with NF monogram + frame brackets + PHOTOGRAPHY wordmark |
| `nf-logo-icon.svg` | Icon-only NF + brackets (favicons, watermarks, profile avatars) |
| `nf-frame-brackets.svg` | Brackets-only overlay (drop on top of hero imagery / press quotes) |

> **⚠ Substitution flag — logos:** the original asset kit references `nf-logo-with-frame-a-symmetric.png` (520×520 raster) and `nf-frame-brackets-overlay.svg`. Those source files were not delivered with this brief, so we built faithful SVG recreations from the spec. **Please supply the master files and we'll replace these.**

> **Fonts bundled locally.** Variable-font files for Space Grotesk and Inter ship in `fonts/` and are wired up via `@font-face` in `colors_and_type.css`. No CDN dependency — the brand fonts work offline.

---

## INDEX — what's in this folder

```
NF Photography Design System/
├── README.md                    ← you are here
├── SKILL.md                     ← cross-compatible Agent Skill instructions
├── colors_and_type.css          ← all CSS vars: colour, type, spacing, radii, motion
│
├── assets/
│   ├── nf-logo.svg              ← master logo (recreation, see flag above)
│   ├── nf-logo-icon.svg         ← icon-only watermark / favicon
│   └── nf-frame-brackets.svg    ← brackets-only overlay
│
├── preview/                     ← cards rendered in the Design System tab
│   ├── colors-brand.html
│   ├── colors-neutrals.html
│   ├── colors-status.html
│   ├── colors-semantic.html
│   ├── colors-patterns.html
│   ├── type-scale.html
│   ├── type-display.html
│   ├── type-eyebrow.html
│   ├── type-tracking.html
│   ├── spacing-scale.html
│   ├── radii-borders.html
│   ├── motion-tokens.html
│   ├── components-buttons.html
│   ├── components-button-states.html
│   ├── components-inputs.html
│   ├── components-card.html
│   ├── components-badge.html
│   ├── brand-logos.html
│   ├── brand-watermark.html
│   └── brand-do-dont.html
│
├── ui_kits/
│   └── website/                 ← NF Photography marketing site
│       ├── README.md
│       ├── index.html           ← interactive click-thru
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── PortfolioGrid.jsx
│       ├── EditorialBlock.jsx
│       ├── FeatureBlock.jsx
│       ├── PressStrip.jsx
│       ├── BookingForm.jsx
│       ├── Footer.jsx
│       └── Buttons.jsx
│
└── uploads/
    ├── NF-Photography-Brand-Guidelines.md.pdf  ← original guideline PDF
    └── brand-guidelines.txt                    ← extracted plain-text
```

---

## How to use this system

1. **Reach for `colors_and_type.css` first.** Import it once at the top of any document — every token below downstream is a CSS var.
2. **Build sections with the eyebrow pattern.** It's the most distinctive editorial move in the system; use it.
3. **Pick a usage pattern per page.** Default / Editorial / Feature. Most pages mix them, but each *section* should commit to one.
4. **Buttons are black, neutral, or invisible.** Never teal, never navy — and one primary per section.
5. **No shadow, no bounce, no emoji, no exclamation marks.** Editorial restraint is the brand.
6. **Photography does the talking.** The system's job is to get out of the way of the work.
