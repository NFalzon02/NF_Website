#!/usr/bin/env python3
"""
Drop any logo PNG/JPG/WEBP into assets/logos/ then run:
    python3 process_logos.py

- Removes solid white/coloured backgrounds using corner flood-fill
- Preserves internal logo detail and original colours
- Saves as transparent PNG, max 320px on longest side
CSS handles the white/bright treatment for dark backgrounds.
"""
from pathlib import Path
from collections import deque
from PIL import Image
import numpy as np

LOGOS_DIR = Path(__file__).parent / "assets" / "logos"
MAX_SIZE  = 320
TOLERANCE = 40

def corner_is_opaque(data):
    """Return True if image corners are solid (not transparent) — meaning it has a BG to remove."""
    h, w = data.shape[:2]
    sz = max(4, min(12, w // 8, h // 8))
    corners = [
        data[:sz, :sz, 3],
        data[:sz, w-sz:, 3],
        data[h-sz:, :sz, 3],
        data[h-sz:, w-sz:, 3],
    ]
    # If any corner is mostly opaque, assume solid background
    return any(c.mean() > 180 for c in corners)

def flood_remove_bg(data, tolerance):
    """BFS flood-fill from all four corners to remove background."""
    h, w = data.shape[:2]
    bg_rgb = np.mean([
        data[0, 0, :3], data[0, w-1, :3],
        data[h-1, 0, :3], data[h-1, w-1, :3]
    ], axis=0)

    visited = np.zeros((h, w), dtype=bool)
    mask    = np.zeros((h, w), dtype=bool)
    queue   = deque()

    for y, x in [(0, 0), (0, w-1), (h-1, 0), (h-1, w-1)]:
        visited[y, x] = True
        queue.append((y, x))

    while queue:
        y, x = queue.popleft()
        dist = np.sqrt(np.sum((data[y, x, :3].astype(float) - bg_rgb) ** 2))
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
    img  = Image.open(src).convert("RGBA")
    data = np.array(img)

    if corner_is_opaque(data):
        data = flood_remove_bg(data, TOLERANCE)
        tag = "bg removed"
    else:
        tag = "transparent, kept as-is"

    result = Image.fromarray(data, "RGBA")

    # Resize so longest side ≤ MAX_SIZE
    w, h = result.size
    if max(w, h) > MAX_SIZE:
        scale  = MAX_SIZE / max(w, h)
        result = result.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

    out = src.with_suffix(".png")
    result.save(out, "PNG", optimize=True)
    print(f"  ✓ {out.name}  {result.size[0]}×{result.size[1]}  [{tag}]")

if __name__ == "__main__":
    exts  = {".png", ".jpg", ".jpeg", ".webp"}
    files = [f for f in LOGOS_DIR.iterdir() if f.suffix.lower() in exts]
    if not files:
        print("No images found in assets/logos/")
    else:
        print(f"Processing {len(files)} logo(s)…")
        for f in sorted(files):
            process(f)
        print("Done.")
