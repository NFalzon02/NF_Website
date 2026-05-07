#!/usr/bin/env python3
"""
Drop any logo PNG/JPG into assets/logos/ then run:
    python3 process_logos.py

Each image is:
  1. Background-removed (white/light pixels made transparent)
  2. Recoloured pure white (so logos show on the dark marquee band)
  3. Saved as a transparent PNG, max 320px wide
"""
from pathlib import Path
from PIL import Image
import numpy as np

LOGOS_DIR = Path(__file__).parent / "assets" / "logos"
MAX_W = 320

def process(src: Path):
    img = Image.open(src).convert("RGBA")
    data = np.array(img, dtype=np.float32)

    r, g, b, a = data[..., 0], data[..., 1], data[..., 2], data[..., 3]

    # Pixels that are already transparent stay transparent
    # Pixels that are very light (background-ish) become transparent
    lightness = (r + g + b) / 3
    is_bg = (lightness > 230) & (a > 10)

    # Everything else becomes white
    data[..., 0] = 255
    data[..., 1] = 255
    data[..., 2] = 255

    # Set alpha: transparent for background, opaque for logo pixels
    new_alpha = np.where(is_bg, 0, a)
    # Also fully transparent for already-transparent pixels
    new_alpha = np.where(a < 10, 0, new_alpha)
    data[..., 3] = np.clip(new_alpha, 0, 255)

    result = Image.fromarray(data.astype(np.uint8), "RGBA")

    # Resize to max width while keeping aspect ratio
    w, h = result.size
    if w > MAX_W:
        result = result.resize((MAX_W, int(h * MAX_W / w)), Image.LANCZOS)

    out = src.with_suffix(".png")
    result.save(out, "PNG", optimize=True)
    print(f"  ✓ {out.name}  ({result.size[0]}×{result.size[1]})")

if __name__ == "__main__":
    exts = {".png", ".jpg", ".jpeg", ".webp"}
    files = [f for f in LOGOS_DIR.iterdir() if f.suffix.lower() in exts]
    if not files:
        print("No images found in assets/logos/ — drop some in and re-run.")
    else:
        print(f"Processing {len(files)} logo(s)…")
        for f in sorted(files):
            process(f)
        print("Done.")
