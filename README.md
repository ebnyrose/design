# ebonyrose.xyz

Portfolio of Ebony Rose, a designer in Melbourne (Naarm).
Live at **[ebonyrose.xyz](https://www.ebonyrose.xyz)**.

Plain HTML, CSS and JavaScript. No framework, no build step.

## Pages

| File | What it is |
|------|------------|
| `index.html` | Home: intro, image strip, experience, education, tools, contact |
| `work.html` | All work as a list or grid, with Play and Build filters. Play opens the side panel (into, watching, playlist, suggestions) |
| `project.html?p=N` | One template for every project, filled from `PROJECTS` in `script.js` |

## Files

```
script.js      projects (PROJECTS), page behaviour and the pixel dinosaur
extras.js      light mode, intro, hover previews, lightbox, contact confetti
styles.css     all styles
data.json      the "Watching" line in the Play panel (edit without touching the HTML)
img/           project images
share/         one small page per project for link previews (/rounds, /pirate-life...), plus share/og/ preview images
vercel.json    serves the clean project links from share/
favicon.svg    the blackletter E (plus PNG versions for older browsers and iOS)
```

## Editing

- **Projects:** edit `PROJECTS` near the top of `script.js` (title, discipline, client, description, link, images). The "At a glance" facts are in `GLANCE` in the project-page section of the same file.
- **Watching:** edit `data.json`.
- **Playlist and suggestion box:** the Spotify playlist and the Google Form address are in `work.html` and `script.js`.

## Fun bits

- A pixel dinosaur lives on the Home image strip. He reacts to clicks, scrolling and the live Melbourne weather (from Open-Meteo), and pops up now and then on other pages. Add `?wx=rain` (or storm, hot, sunny, cold, windy, fog, grey, snow) to preview the weather reactions, and `?day=fri` or `?date=2026-12-25` to preview his daily outfits.
- Light mode toggle in the top right.

`tools/make_share_pages.py` built the share pages for the previous version of the site and reads its old project list, so it won't regenerate them for this version. The share pages are now edited directly.
