# Photos

Drop your images here. Organise by sport/use-case using the folder structure below.

## Folder structure

```
photos/
  hero/          # Full-bleed hero images (aim for 2400×1600 px landscape)
  about/         # Portrait photo for the About section (aim for 1200×1500 px portrait)
  football/      # Gallery images for work/football.html
  futsal/        # Gallery images for work/futsal.html
  motorsport/    # Gallery images for work/motorsport.html
  waterpolo/     # Gallery images for work/waterpolo.html
```

## Wiring photos into the page

### Hero (frame 4) — `index.html`

Find the `frame-4` div and replace the placeholder div:

```html
<!-- Before -->
<div class="photo-placeholder"><span>Drop hero photo · 2400×1600</span></div>

<!-- After -->
<img class="photo" src="photos/hero/hero-4.jpg" alt="">
```

You can do the same for frames 1–3 by adding an `<img class="photo">` inside each `.frame-*` div.

### About portrait — `index.html`

Find the `.about-photo` div and replace the placeholder:

```html
<!-- Before -->
<div class="photo-placeholder"><span>Drop portrait · 1200×1500</span></div>

<!-- After -->
<img src="photos/about/portrait.jpg" alt="Nicholas Falzon, sports photographer">
```

### Portfolio cards — `index.html`

Each card currently shows a CSS gradient. To use a real photo, replace the gradient div with an `<img>`:

```html
<!-- Before -->
<div class="pf-img football"></div>

<!-- After -->
<img class="pf-img" src="photos/football/cover.jpg" alt="Football match action">
```

### Gallery pages — `work/football.html` etc.

Each cell currently shows a placeholder. Replace the div with an `<img>`, keeping the span classes:

```html
<!-- Before -->
<div class="g-cell tall"><span>football-01.jpg</span></div>

<!-- After — landscape or portrait, object-fit: cover handles cropping -->
<img class="g-cell tall" src="../photos/football/football-01.jpg" alt="">
```

The `tall` class spans two grid rows, `wide` spans two columns. Use them to break up the grid visually.

## Recommended file names

| Sport      | Cover card      | Gallery cells                          |
|------------|-----------------|----------------------------------------|
| Football   | `cover.jpg`     | `football-01.jpg` … `football-12.jpg` |
| Futsal     | `cover.jpg`     | `futsal-01.jpg` … `futsal-12.jpg`     |
| Motorsport | `cover.jpg`     | `motorsport-01.jpg` … `motorsport-12.jpg` |
| Waterpolo  | `cover.jpg`     | `waterpolo-01.jpg` … `waterpolo-12.jpg` |
