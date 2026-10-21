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
vercel.json  sends project links (/rounds, /pirate-life…) to index.html
images/      project thumbnails and case study images
```

- **Type:** Epilogue, from Google Fonts.
- **Motion:** a canvas particle field for the intro and mode switches.
- **Project links:** every project has its own link that opens straight on the project and skips the intro. On the live site it's a clean path, e.g. `ebonyrose.xyz/pirate-life`; locally and in previews it's a hash, e.g. `localhost:8000/#pirate-life`. Old `#` links still work. Browser back/forward works, and the tab title changes to the project's name.
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
