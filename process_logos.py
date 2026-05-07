#!/usr/bin/env python3
"""
Drop any logo PNG/JPG/WEBP into assets/logos/ then run:
    python3 process_logos.py

Each image is:
  1. Background removed by sampling corner colours (works on white, dark, or coloured backgrounds)
  2. Original logo colours preserved (internal detail kept intact)
  3. Saved as transparent PNG, max 320px on longest side
"""
from pathlib import Path
from collections import deque
from PIL import Image
import numpy as np

LOGOS_DIR = Path(__file__).parent / "assets" / "logos"
MAX_SIZE  = 320
TOLERANCE = 38   # colour-distance threshold for background matching

def corner_bg_color(data):
    """Return the average colour of the four image corners."""
    h, w = data.shape[:2]
    samples = [data[0, 0, :3], data[0, w-1, :3], data[h-1, 0, :3], data[h-1, w-1, :3]]
    return np.mean(samples, axis=0)

def flood_remove(data, bg_rgb, tolerance):
    """BFS flood-fill from all four corners, marking background pixels transparent."""
    h, w = data.shape[:2]
    visited = np.zeros((h, w), dtype=bool)
    mask    = np.zeros((h, w), dtype=bool)

    queue = deque()
    for y, x in [(0, 0), (0, w-1), (h-1, 0), (h-1, w-1)]:
        if not visited[y, x]:
            visited[y, x] = True
            queue.append((y, x))

    while queue:
        y, x = queue.popleft()
        pixel = data[y, x, :3].astype(float)
        dist  = np.sqrt(np.sum((pixel - bg_rgb) ** 2))
        if dist <= tolerance:
            mask[y, x] = True
            for dy, dx in [(-1,0),(1,0),(0,-1),(0,1)]:
                ny, nx = y+dy, x+dx
                if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                    visited[ny, nx] = True
                    queue.append((ny, nx))

    result = data.copy()
    result[mask, 3] = 0
    return result

def process(src: Path):
    img  = src if isinstance(src, Image.Image) else Image.open(src)
    img  = img.convert("RGBA")
    data = np.array(img)

    # Only flood-remove background if image doesn't already have real transparency
    alpha = data[:, :, 3]
    has_transparency = (alpha < 200).sum() > (alpha.size * 0.05)

    if not has_transparency:
        bg = corner_bg_color(data)
        data = flood_remove(data, bg, TOLERANCE)

    result = Image.fromarray(data, "RGBA")

    # Resize so longest side ≤ MAX_SIZE
    w, h = result.size
    if max(w, h) > MAX_SIZE:
        scale  = MAX_SIZE / max(w, h)
        result = result.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

    out = src.with_suffix(".png")
    result.save(out, "PNG", optimize=True)
    print(f"  ✓ {out.name}  ({result.size[0]}×{result.size[1]})")

if __name__ == "__main__":
    exts  = {".png", ".jpg", ".jpeg", ".webp"}
    files = [f for f in LOGOS_DIR.iterdir() if f.suffix.lower() in exts]
    if not files:
        print("No images found in assets/logos/ — drop some in and re-run.")
    else:
        print(f"Processing {len(files)} logo(s)…")
        for f in sorted(files):
            process(f)
        print("Done.")
