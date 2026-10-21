# ebonyrose.xyz

Portfolio of Ebony Rose, a designer in Melbourne (Naarm).
Live at **[ebonyrose.xyz](https://www.ebonyrose.xyz)**.

One HTML file. No framework, no build step.

## What's on the site

The site has three modes, each with its own accent colour:

| Mode  | What's in it                                     | Accent |
|-------|--------------------------------------------------|--------|
| Work  | Client and studio work, plus CV                  | white  |
| Play  | Personal and self-initiated projects, what I'm into right now | purple |
| Build | Things I've designed *and* built, e.g. Rounds    | lime   |

## How it's put together

```
index.html   the whole site: markup, styles and script
data.json    the "Watching" line in Play (edit without touching the HTML)
vercel.json  serves project links (/rounds, /pirate-life…) from share/
share/       one small page per project for link previews, plus share/og/ preview images
tools/       make_share_pages.py, which builds share/ from PROJECTS (and the font it uses)
images/      project thumbnails and case study images
```

- **Type:** Epilogue, from Google Fonts.
- **Motion:** a canvas particle field for the intro and mode switches.
- **Project links:** every project has its own link that opens straight on the project and skips the intro. On the live site it's a clean path, e.g. `ebonyrose.xyz/pirate-life`; locally it's a hash, e.g. `localhost:8000/#pirate-life`. Old `#` links still work. Browser back/forward works, and the tab title changes to the project's name.
- **Link previews:** pasting a project link into LinkedIn, Slack or iMessage shows that project's title, line and a 1200×630 image. These come from `share/`, which you regenerate with one command (below).
- **Project colour:** each project has a `color`. Hovering its tile tints the cursor and accent, opening it keeps the tint, and the particles that fly from the tile to the first image use it too.
- **Grid / Index:** the switch above the projects flips to a text index (year, project, client, discipline, role). It remembers the choice per visitor.
- **Copy my details:** under Links. Copies a five-line summary for recruiters. Edit `DETAILS` in `index.html`.
- **Live bits:** a Spotify embed, plus a suggestion box that posts to a Google Form.

### Keyboard

Every project can be opened without a mouse:

- **Tab** moves between controls and project tiles.
- **Enter** or **Space** opens a project.
- **Esc** closes it and returns focus to the tile you opened.
- Arrow keys scroll the images once that column has focus.

Focus outlines use the current mode's accent colour. They only appear for keyboard users, never on mouse clicks.

## Editing content

All content lives in a few arrays near the bottom of `index.html`.

**Add or edit a project** in `PROJECTS`:

```js
{
  id: 'my-project',                 // also the #hash in the URL
  mode: 'work',                     // 'work' | 'play' | 'build'
  title: 'Project name',
  subtitle: 'Client · type',        // shown under the title on the project page
  label: 'web design',              // shown under the grid thumbnail
  color: '#4f86ff',                 // tints the site while hovering or viewing it
  year: '2025', client: 'Client name', discipline: 'Web design',   // index view
  why: 'One line on why this project matters.',                    // link previews
  thumb: 'images/my-project-thumb.jpg',
  aspect: 'land',                   // thumbnail shape: 'land' | 'port' | 'sq' | a % like '125%'
  meta: { Role: 'Designer', Scope: '…', Outcome: '…' },  // facts above the case study; any labels you like
  desc: `<p>Case study copy.</p>`,
  link: 'https://…', linkLabel: 'site.com ↗',
  images: [
    { src: 'images/my-project-01.jpg', aspect: '75%', span: 'full' },
    { src: 'images/my-project-02.jpg', aspect: '125%', span: 'half' },
  ]
}
```

Projects appear in the grid in array order.

Add `alsoIn: ['work']` to show a project in a second mode's grid (Rounds uses this).

**Other content:**
- **Placeholder tiles** (dashed, in Work): edit `PLACEHOLDERS`. Remove one once the real project is in.
- **Build sidebar list:** edit `BUILDING`.
- **Spotify playlist and suggestion box:** edit `CONFIG`. Leave a value blank to hide that feature.
- **"Watching":** edit `data.json`.

## After adding or changing a project

Rebuild the link previews:

```sh
python3 tools/make_share_pages.py
```

It reads `PROJECTS` from `index.html` and writes `share/<id>.html` and `share/og/<id>.jpg`. The images need Pillow (`pip3 install pillow`); without it the pages still update and use the thumbnail instead. Commit the `share/` folder along with your change.

## Images

Export images at **2400px on the long edge or less**, as JPG or WebP, aiming for **under ~400KB** each. The Rounds images are the reference.

Name files in kebab-case: `project-01.jpg`, `project-thumb.jpg`.

## Run locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

The site is hosted on Vercel at ebonyrose.xyz.

---

© Ebony Rose. Project work shown remains the property of Ebony Rose and the respective clients.
