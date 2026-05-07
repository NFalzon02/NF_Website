---
name: nf-photography-design
description: Use this skill to generate well-branded interfaces and assets for NF Photography — the Malta-based sports photojournalism practice of Nicholas Falzon — covering football, futsal, motorsport, and waterpolo. Use for production code, prototypes, mocks, decks, social tiles, proposals, watermarks, or any artifact that needs to look like the brand. Contains essential design guidelines, colors, type, fonts, assets, and a website UI kit.
user-invocable: true
---

# NF Photography — design skill

Read the **README.md** file alongside this skill, and explore the other available files. The README is the canonical source of truth for the brand's voice, colour, type, motion, components, and content rules.

## What's here

- `README.md` — full brand guidelines: positioning, content fundamentals (voice / casing / examples), visual foundations (colour, type, motion, hover, borders), iconography, file index.
- `colors_and_type.css` — every CSS variable: colour ramps + semantic tokens, type scale, spacing scale, radii, motion. Light by default, `data-theme="dark"` for inverted contexts. **Import this first** in any HTML artifact.
- `assets/` — `nf-logo.svg`, `nf-logo-icon.svg`, `nf-frame-brackets.svg`. The brackets-overlay frame is the brand's only proprietary graphic motif.
- `preview/` — small HTML cards demonstrating each token / component (used by the Design System tab).
- `ui_kits/website/` — full click-thru recreation of the marketing site: Header, Hero, PortfolioGrid, EditorialBlock, FeatureBlock, PressStrip, BookingForm, Footer, plus the Buttons primitive. Open `index.html` to see it composed.
- `uploads/NF-Photography-Brand-Guidelines.md.pdf` — original brand-guideline PDF (v1.0, May 2026).
- `uploads/brand-guidelines.txt` — extracted plain-text version for fast lookup.

## How to design with this brand

1. **Import `colors_and_type.css` first.** Everything below it should reference its tokens.
2. **Open every section with the eyebrow pattern.** `EYEBROW · CATEGORY` (12px, tracked +0.075em, uppercase, teal `#0F766E`) → heading → lead. This is the single most distinctive editorial move in the system.
3. **Pick a usage pattern per section.**
   - **Default** — black on white with occasional teal accents.
   - **Editorial** — navy heading on white, neutral body, teal eyebrow.
   - **Feature** — navy section background, white text, light-teal accent.
4. **Buttons are black, neutral, or invisible.** Primary = `#0A0A0A` fill / white text. Secondary = transparent / `#D4D4D4` border. Ghost = transparent / no border. **Never** teal or navy CTAs.
5. **Voice: sport-fluent, direct, observational.** Use real terminology (*"78th minute"*, *"qualifying session"*, *"third period"*). No exclamation marks. No emoji. No "stunning / amazing / passionate / capturing moments." The athlete is always the hero.
6. **Quiet motion only.** Opacity and background-colour transitions; 120–280ms; one easing curve. No shadow, no scale, no bounce.
7. **Photography is the texture.** Default backgrounds are solid; the brackets-overlay frame is the only repeating decorative motif.

## When working on artifacts

If creating **visual artifacts** (slides, mocks, throwaway prototypes, social tiles, proposals, etc), copy assets out of `assets/` and create static HTML files for the user to view. Reference `colors_and_type.css` directly. Reuse components from `ui_kits/website/` where they fit — don't reinvent the button or the card.

If working on **production code**, copy assets and read the rules in `README.md` to become an expert in designing with this brand. Treat `colors_and_type.css` as the canonical token source.

If the user invokes this skill **without specific guidance**, ask them what they want to build or design, ask some clarifying questions (audience, surface, sport, urgency, format), and then act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

## Hard rules (the brand's "no" list)

- **No emoji, no exclamation marks, no generic adjectives** ("stunning", "amazing", "beautiful", "passionate").
- **No drop shadows, glows, scale-on-hover, or bounce easing** anywhere.
- **No teal or navy CTA buttons.** Brand colours are for brand moments, not for asking the user to click.
- **No serif body type. No condensed sport display fonts.** No third accent colour beyond teal and navy.
- **No gradients as decoration** in backgrounds or accents (gradients are permitted only as image-darkening overlays for legibility on photography).
- **The athlete is the hero. The photographer is never the story.**
