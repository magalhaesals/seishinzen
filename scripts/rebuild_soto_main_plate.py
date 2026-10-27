#!/usr/bin/env python3
"""Rebuild 05_06_soto_ude_uke.jpg from realistic left/right panel sources."""
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(__file__).resolve().parent / "illustration-sources"
OUT = ROOT / "public" / "illustrations" / "05_06_soto_ude_uke.jpg"


def trim_white(im: Image.Image, thresh: int = 248, pad: int = 20) -> Image.Image:
    a = np.asarray(im.convert("RGB"))
    mask = ~((a[:, :, 0] > thresh) & (a[:, :, 1] > thresh) & (a[:, :, 2] > thresh))
    ys, xs = np.where(mask)
    if len(xs) == 0:
        return im
    top, bottom = max(0, ys.min() - pad), min(im.height, ys.max() + pad)
    left, right = max(0, xs.min() - pad), min(im.width, xs.max() + pad)
    return im.crop((left, top, right, bottom))


def fit(im: Image.Image, tw: int, th: int) -> Image.Image:
    r = min(tw / im.width, th / im.height)
    return im.resize(
        (max(1, int(im.width * r)), max(1, int(im.height * r))),
        Image.Resampling.LANCZOS,
    )


def main() -> None:
    w, h = 1280, 720
    p5 = trim_white(Image.open(SRC / "soto_panel5.jpg").convert("RGB"))
    p6 = trim_white(Image.open(SRC / "soto_panel6.jpg").convert("RGB"))
    half, margin = w // 2, 24
    box_w, box_h = half - 2 * margin, h - 2 * margin
    f5, f6 = fit(p5, box_w, box_h), fit(p6, box_w, box_h)
    out = Image.new("RGB", (w, h), "white")
    out.paste(f5, (margin + (box_w - f5.width) // 2, margin + (box_h - f5.height) // 2))
    out.paste(
        f6,
        (half + margin + (box_w - f6.width) // 2, margin + (box_h - f6.height) // 2),
    )
    ImageDraw.Draw(out).line([(half, 48), (half, h - 48)], fill=(203, 213, 225), width=2)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    out.save(OUT, "JPEG", quality=95, optimize=True, subsampling=0)
    print(f"wrote {OUT} {out.size}")


if __name__ == "__main__":
    main()
