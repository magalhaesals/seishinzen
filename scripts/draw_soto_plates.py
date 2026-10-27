#!/usr/bin/env python3
"""Anatomically correct Soto-Ude-Uke plates via SVG.

Mannequin style: torso first, then thick stroke limbs that start at shoulder
circles OUTSIDE the torso — never from the chest/lapel.
"""

from __future__ import annotations

import io
from pathlib import Path

import cairosvg
from PIL import Image

OUT_MAIN = Path("/workspace/public/illustrations/05_06_soto_ude_uke.jpg")
OUT_SEQ = Path("/workspace/public/illustrations/seq_soto_ude_uke.jpg")
ART_MAIN = Path("/opt/cursor/artifacts/05_06_soto_ude_uke_fixed.jpg")
ART_SEQ = Path("/opt/cursor/artifacts/seq_soto_ude_uke_fixed.jpg")


def svg_to_jpeg(svg: str, path: Path, size: tuple[int, int]) -> None:
    png = cairosvg.svg2png(
        bytestring=svg.encode("utf-8"),
        output_width=size[0],
        output_height=size[1],
    )
    im = Image.open(io.BytesIO(png)).convert("RGB")
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "JPEG", quality=93, optimize=True)
    print(f"wrote {path} {im.size}")


DEFS = """
<defs>
  <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
    <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
  </marker>
  <linearGradient id="giShade" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0%" stop-color="#ffffff"/>
    <stop offset="100%" stop-color="#dbe4ef"/>
  </linearGradient>
</defs>
"""


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def limb_stroke(tx, ty, x0, y0, x1, y1, width: float, s: float) -> str:
    """Thick rounded stroke from joint to joint (clear attachment)."""
    return (
        f'<line x1="{tx(x0):.2f}" y1="{ty(y0):.2f}" x2="{tx(x1):.2f}" y2="{ty(y1):.2f}" '
        f'stroke="#94a3b8" stroke-width="{width * s}" stroke-linecap="round"/>'
        f'<line x1="{tx(x0):.2f}" y1="{ty(y0):.2f}" x2="{tx(x1):.2f}" y2="{ty(y1):.2f}" '
        f'stroke="#0f172a" stroke-width="{max(1.5, width * s * 0.22)}" stroke-linecap="round" fill="none"/>'
    )


def joint(tx, ty, x, y, r: float, s: float) -> str:
    return (
        f'<circle cx="{tx(x):.2f}" cy="{ty(y):.2f}" r="{r * s}" '
        f'fill="#e2e8f0" stroke="#0f172a" stroke-width="{2.2 * s}"/>'
    )


def figure(
    cx: float,
    cy: float,
    *,
    block_left: bool,
    progress: float,
    scale: float = 1.0,
    title: str = "",
    step_label: str = "",
    caption: str = "",
    stance: str = "",
) -> str:
    s = scale

    def tx(x: float) -> float:
        return cx + (x * s if block_left else -x * s)

    def ty(y: float) -> float:
        return cy + y * s

    # +x = character's left. Shoulders sit on torso top corners (torso ±28).
    l_sh = (38.0, -100.0)
    r_sh = (-38.0, -100.0)

    # Blocking limb keyframes — elbow/fist stay lateral (outside torso)
    kfs = [
        # t, elbow, fist
        (0.0, (88, -132), (70, -154)),
        (0.35, (98, -74), (84, -106)),
        (0.7, (94, -42), (80, -82)),
        (1.0, (92, -38), (84, -104)),
    ]
    p = max(0.0, min(1.0, progress))
    for i in range(len(kfs) - 1):
        if kfs[i][0] <= p <= kfs[i + 1][0]:
            t = (p - kfs[i][0]) / (kfs[i + 1][0] - kfs[i][0] + 1e-9)
            ex = lerp(kfs[i][1][0], kfs[i + 1][1][0], t)
            ey = lerp(kfs[i][1][1], kfs[i + 1][1][1], t)
            fx = lerp(kfs[i][2][0], kfs[i + 1][2][0], t)
            fy = lerp(kfs[i][2][1], kfs[i + 1][2][1], t)
            break
    else:
        ex, ey = kfs[-1][1]
        fx, fy = kfs[-1][2]

    hike_el = (-70.0, -32.0)
    hike_fi = (-58.0, 14.0)

    # Narrow torso — shoulders sit clearly outside top corners
    torso = (
        f'<path d="M{tx(-28)} {ty(-100)} L{tx(28)} {ty(-100)} L{tx(34)} {ty(-6)} '
        f'L{tx(22)} {ty(24)} L{tx(-22)} {ty(24)} L{tx(-34)} {ty(-6)} Z" '
        f'fill="url(#giShade)" stroke="#0f172a" stroke-width="{2.4*s}" stroke-linejoin="round"/>'
        f'<path d="M{tx(0)} {ty(-100)} L{tx(-5)} {ty(-80)} M{tx(0)} {ty(-100)} L{tx(7)} {ty(-80)}" '
        f'fill="none" stroke="#0f172a" stroke-width="{1.6*s}"/>'
    )
    belt = (
        f'<rect x="{min(tx(-26), tx(26))}" y="{ty(12)}" width="{52*s}" height="{13*s}" '
        f'rx="{2*s}" fill="#0f172a"/>'
        f'<rect x="{tx(-7)}" y="{ty(8)}" width="{14*s}" height="{18*s}" rx="{2*s}" fill="#0f172a"/>'
    )
    pants = (
        f'<path d="M{tx(-24)} {ty(22)} L{tx(24)} {ty(22)} L{tx(38)} {ty(100)} L{tx(10)} {ty(100)} '
        f'L{tx(2)} {ty(52)} L{tx(-12)} {ty(100)} L{tx(-44)} {ty(100)} Z" '
        f'fill="url(#giShade)" stroke="#0f172a" stroke-width="{2.2*s}" stroke-linejoin="round"/>'
    )
    feet = (
        f'<ellipse cx="{tx(22)}" cy="{ty(134)}" rx="{15*s}" ry="{6*s}" fill="#9ca3af" stroke="#0f172a" stroke-width="{1.5*s}"/>'
        f'<ellipse cx="{tx(-48)}" cy="{ty(134)}" rx="{15*s}" ry="{6*s}" fill="#9ca3af" stroke="#0f172a" stroke-width="{1.5*s}"/>'
    )

    # Limbs: thick strokes shoulder → elbow → fist (attachment = shoulder circle)
    hike_arm = (
        limb_stroke(tx, ty, r_sh[0], r_sh[1], hike_el[0], hike_el[1], 14, s)
        + limb_stroke(tx, ty, hike_el[0], hike_el[1], hike_fi[0], hike_fi[1], 12, s)
        + joint(tx, ty, hike_el[0], hike_el[1], 6.0, s)
        + joint(tx, ty, hike_fi[0], hike_fi[1], 8.5, s)
    )
    block_arm = (
        limb_stroke(tx, ty, l_sh[0], l_sh[1], ex, ey, 15, s)
        + limb_stroke(tx, ty, ex, ey, fx, fy, 13, s)
        + joint(tx, ty, ex, ey, 6.5, s)
        + joint(tx, ty, fx, fy, 9.0, s)
    )
    shoulders = joint(tx, ty, l_sh[0], l_sh[1], 11.0, s) + joint(
        tx, ty, r_sh[0], r_sh[1], 10.0, s
    )

    head = (
        f'<circle cx="{tx(0)}" cy="{ty(-122)}" r="{24*s}" fill="#f8fafc" stroke="#0f172a" stroke-width="{2.2*s}"/>'
        f'<path d="M{tx(-18)} {ty(-132)} Q{tx(0)} {ty(-152)} {tx(20)} {ty(-130)} '
        f'Q{tx(16)} {ty(-114)} {tx(0)} {ty(-112)} Q{tx(-16)} {ty(-114)} {tx(-18)} {ty(-132)}Z" fill="#0f172a"/>'
        f'<circle cx="{tx(9 if block_left else -9)}" cy="{ty(-124)}" r="{2.2*s}" fill="#0f172a"/>'
    )

    arrow = (
        f'<path d="M{tx(ex+30)} {ty(ey+28)} Q{tx(ex+46)} {ty(ey-8)} {tx(fx+24)} {ty(fy+6)}" '
        f'fill="none" stroke="#dc2626" stroke-width="{3.4*s}" stroke-linecap="round" '
        f'marker-end="url(#arrowHead)"/>'
    )

    texts = []
    if title:
        texts.append(
            f'<text x="{cx}" y="{cy - 175*s}" text-anchor="middle" '
            f'font-family="Arial,Helvetica,sans-serif" font-size="{12.5*s}" font-weight="800" fill="#0f172a">{title}</text>'
        )
    if step_label:
        texts.append(
            f'<text x="{cx}" y="{cy - 175*s}" text-anchor="middle" '
            f'font-family="Arial,Helvetica,sans-serif" font-size="{15*s}" font-weight="900" fill="#0f172a">{step_label}</text>'
        )
    if caption:
        texts.append(
            f'<text x="{cx}" y="{cy - 156*s}" text-anchor="middle" '
            f'font-family="Arial,Helvetica,sans-serif" font-size="{10*s}" fill="#475569">{caption}</text>'
        )
    if stance:
        texts.append(
            f'<text x="{tx(55)}" y="{ty(118)}" text-anchor="middle" '
            f'font-family="Georgia,serif" font-size="{10*s}" font-style="italic" fill="#334155">{stance}</text>'
        )

    return "\n".join(
        [
            pants,
            torso,
            belt,
            feet,
            hike_arm,
            block_arm,
            shoulders,  # on top — attachment points unmistakable
            head,
            arrow,
            *texts,
        ]
    )


def build_main() -> str:
    w, h = 1280, 720
    left = figure(
        330, 405, block_left=True, progress=1.0, scale=1.55,
        title="5. SOTO-UDE-UKE (Esquerda / Hidari)",
        stance="Hidari Zenkutsu-Dachi",
    )
    right = figure(
        950, 405, block_left=False, progress=1.0, scale=1.55,
        title="6. SOTO-UDE-UKE (Direita / Migi)",
        stance="Migi Zenkutsu-Dachi",
    )
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  {DEFS}
  <line x1="{w/2}" y1="36" x2="{w/2}" y2="{h-36}" stroke="#cbd5e1" stroke-width="1.5"/>
  {left}
  {right}
</svg>
"""


def build_seq() -> str:
    w, h = 1280, 720
    steps = [
        (0.0, "STEP 1", "Chamber — fist by ear"),
        (0.35, "STEP 2", "Outside → inside swing"),
        (0.7, "STEP 3", "Crossing path"),
        (1.0, "STEP 4", "Final Soto-Ude-Uke"),
    ]
    parts = [
        figure(160 + i * 320, 415, block_left=True, progress=prog, scale=1.12, step_label=lab, caption=cap)
        for i, (prog, lab, cap) in enumerate(steps)
    ]
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  {DEFS}
  <text x="{w/2}" y="34" text-anchor="middle" font-family="Arial,Helvetica,sans-serif"
        font-size="22" font-weight="900" fill="#0f172a">SOTO-UDE-UKE</text>
  {''.join(parts)}
</svg>
"""


def main() -> None:
    main_svg = build_main()
    seq_svg = build_seq()
    svg_to_jpeg(main_svg, OUT_MAIN, (1280, 720))
    svg_to_jpeg(seq_svg, OUT_SEQ, (1280, 720))
    svg_to_jpeg(main_svg, ART_MAIN, (1280, 720))
    svg_to_jpeg(seq_svg, ART_SEQ, (1280, 720))


if __name__ == "__main__":
    main()
