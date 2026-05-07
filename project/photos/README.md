# Photos

Drop your match-day photography here. This folder is wired into the design system so any image you upload can be referenced from the landing page (and any future pages).

## Suggested structure

photos/
├── hero/         # full-bleed hero frames (2400×1600 or larger, landscape)
├── work/         # portfolio/gallery selects
├── press/        # frames that have appeared in print
└── raw/          # untouched exports — not for direct use on the page

## Usage on the landing page

The hero rotator on `Landing Page v4.html` currently shows three gradient frames + one photo slot (`frame-4`). To swap a real photo in:

1. Drop the image into `photos/hero/` (e.g. `photos/hero/match-01.jpg`).
2. In `Landing Page v4.html`, find the `.frame-4` block and replace the placeholder with:
   `<img class="photo" src="photos/hero/match-01.jpg" alt="">`
3. To turn the other three gradient frames (`frame-1`, `frame-2`, `frame-3`) into photos too, do the same for each one.

## File format notes

- **JPG** for photographs (smaller, faster to load).
- **PNG** only for graphics with transparency.
- Aim for ~2400px on the long edge for hero frames, ~1600px for portfolio thumbnails. Anything larger gets compressed by the browser anyway.
- Strip EXIF / orientation metadata before upload so they render consistently across browsers.
