#!/usr/bin/env python3
"""
Make the link-preview ("share") pages for every project.

When someone pastes ebonyrose.xyz/pirate-life into LinkedIn, Slack or iMessage,
those apps read the page's preview tags but never run its JavaScript. So each
project gets a tiny page in share/ with its own title, description and image.
vercel.json serves it at the project's link, and the page hands real visitors
straight over to the site (/#pirate-life), which opens the project.

Run it from the repo folder whenever you add or rename a project, or change a
project's title, `why` line or first image:

    python3 tools/make_share_pages.py

It reads PROJECTS from index.html, so there's nothing else to edit. Preview
images (1200 x 630) need Pillow: `pip3 install pillow`. Without it the pages are
still written, and they use each project's thumbnail as the image instead.
"""
import html
import os
import random
import re
import sys

SITE = 'https://www.ebonyrose.xyz'
NAME = 'Ebony Rose'
TAGLINE = 'Mid Weight Digital Designer in Melbourne'
HEADLINE = 'Melbourne × Naarm. Designer who makes things for fun, not just for briefs.'
STATUS = 'Open to mid-weight digital roles'

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT = os.path.join(ROOT, 'tools', 'Epilogue-Variable.ttf')
OUT = os.path.join(ROOT, 'share')
OG = os.path.join(OUT, 'og')


# ── Read PROJECTS out of index.html ──────────────────────────────────────────
def read_projects():
    src = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
    block = re.search(r'const PROJECTS = \[(.*?)\n\];', src, re.S).group(1)
    chunks = re.split(r'\n  \{\n', block)[1:]

    def field(chunk, name):
        m = re.search(name + r":\s*(['\"`])((?:\\.|(?!\1).)*)\1", chunk, re.S)
        return re.sub(r"\\(.)", r"\1", m.group(2)) if m else ''

    projects = []
    for c in chunks:
        first = re.search(r"images:\s*\[\s*\{\s*src:\s*'([^']+)'", c)
        projects.append({
            'id': field(c, 'id'), 'title': field(c, 'title'), 'subtitle': field(c, 'subtitle'),
            'why': field(c, 'why'), 'color': field(c, 'color') or '#ffffff',
            'thumb': field(c, 'thumb'), 'image': first.group(1) if first else field(c, 'thumb'),
        })
    return [p for p in projects if p['id']]


# ── Preview images ───────────────────────────────────────────────────────────
def load_pil():
    try:
        from PIL import Image, ImageDraw, ImageFont
        return Image, ImageDraw, ImageFont
    except ImportError:
        return None


def font(ImageFont, size, weight=400):
    f = ImageFont.truetype(FONT, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


def wrap(draw, text, f, width):
    lines, line = [], ''
    for word in text.split():
        test = (line + ' ' + word).strip()
        if draw.textlength(test, font=f) <= width or not line:
            line = test
        else:
            lines.append(line); line = word
    if line:
        lines.append(line)
    return lines


def cover(Image, path, w, h):
    im = Image.open(path).convert('RGB')
    scale = max(w / im.width, h / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    x, y = (im.width - w) // 2, (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))


def project_image(pil, p):
    """Black panel on the left with the name and title, the work on the right."""
    Image, ImageDraw, ImageFont = pil
    W, H, PANEL, PAD = 1200, 630, 470, 56
    img = Image.new('RGB', (W, H), '#000000')
    img.paste(cover(Image, os.path.join(ROOT, p['image']), W - PANEL, H), (PANEL, 0))
    d = ImageDraw.Draw(img)

    d.ellipse((PAD, PAD + 9, PAD + 10, PAD + 19), fill=p['color'])
    d.text((PAD + 22, PAD), NAME, font=font(ImageFont, 26), fill='#ffffff')

    title_f = font(ImageFont, 50)
    lines = wrap(d, p['title'], title_f, PANEL - PAD * 2)[:3]
    sub_f = font(ImageFont, 24)
    subs = wrap(d, p['subtitle'], sub_f, PANEL - PAD * 2)[:2]
    y = H - PAD - len(subs) * 32 - 14 - len(lines) * 58
    for line in lines:
        d.text((PAD, y), line, font=title_f, fill='#ffffff'); y += 58
    y += 14
    for line in subs:
        d.text((PAD, y), line, font=sub_f, fill='#8a8a8a'); y += 32
    return img


def home_image(pil, projects):
    """Text only, with a scatter of dots from the intro."""
    Image, ImageDraw, ImageFont = pil
    W, H, PAD = 1200, 630, 64
    img = Image.new('RGB', (W, H), '#000000')
    d = ImageDraw.Draw(img)
    rnd = random.Random(7)
    for _ in range(140):
        x, y = rnd.randrange(W), rnd.randrange(H)
        s = 3 if rnd.random() < 0.25 else 2
        a = rnd.randint(40, 120)
        d.rectangle((x, y, x + s, y + s), fill=(a, a, a))

    d.text((PAD, PAD), NAME, font=font(ImageFont, 28), fill='#ffffff')
    sf = font(ImageFont, 22)
    sw = d.textlength(STATUS, font=sf)
    d.ellipse((W - PAD - sw - 22, PAD + 10, W - PAD - sw - 12, PAD + 20), fill='#3ddc84')
    d.text((W - PAD - sw, PAD + 3), STATUS, font=sf, fill='#9a9a9a')

    hf = font(ImageFont, 60)
    lines = wrap(d, HEADLINE, hf, W - PAD * 2)
    y = H - PAD - 40 - len(lines) * 72
    for line in lines:
        d.text((PAD, y), line, font=hf, fill='#ffffff'); y += 72
    d.text((PAD, H - PAD - 24), f'{TAGLINE} · ebonyrose.xyz', font=font(ImageFont, 22), fill='#6a6a6a')
    return img


# ── Pages ────────────────────────────────────────────────────────────────────
PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Made by tools/make_share_pages.py. Edit index.html and re-run it instead of editing this file. -->
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{name}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{image}">
<meta name="theme-color" content="#000000">
<style>html,body{{background:#000;color:#fff;font-family:Helvetica,Arial,sans-serif;margin:0}}a{{color:#fff}}p{{padding:24px}}</style>
<script>location.replace('/#{id}');</script>
</head>
<body>
<noscript><p><a href="/#{id}">{plain_title}</a></p></noscript>
</body>
</html>
"""


def main():
    projects = read_projects()
    os.makedirs(OG, exist_ok=True)
    pil = load_pil()
    if not pil:
        print('Pillow not installed, so no new preview images (pip3 install pillow). Pages still written.')

    if pil:
        home_image(pil, projects).save(os.path.join(OG, 'home.jpg'), quality=86, optimize=True, progressive=True)

    for p in projects:
        og_file = os.path.join(OG, p['id'] + '.jpg')
        if pil:
            project_image(pil, p).save(og_file, quality=86, optimize=True, progressive=True)
        image = f"{SITE}/share/og/{p['id']}.jpg" if os.path.exists(og_file) else f"{SITE}/{p['thumb']}"
        page = PAGE.format(
            id=p['id'], name=NAME, url=f"{SITE}/{p['id']}", image=image,
            title=html.escape(f"{p['title']} — {NAME}"), plain_title=html.escape(p['title']),
            desc=html.escape(p['why'] or p['subtitle']),
        )
        with open(os.path.join(OUT, p['id'] + '.html'), 'w', encoding='utf-8') as f:
            f.write(page)
        print(f"  {p['id']:<16} {SITE}/{p['id']}")

    print(f'Wrote {len(projects)} share pages to share/.')


if __name__ == '__main__':
    sys.exit(main())
