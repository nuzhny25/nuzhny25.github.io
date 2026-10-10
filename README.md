# nuzhny25.github.io

My portfolio site, built with plain HTML, CSS and JavaScript. There's no build step and there are no dependencies.

## Add a project

1. Open `content.js`.
2. Copy an entry in `PROJECTS`, paste it at the top of the list, and edit it.
3. Save and refresh the page.

Experience and education work the same way. The comment at the top of `content.js` lists every field.

If the lists disappear after an edit, there's a typo in `content.js`, usually a missing comma or quote. Open the browser console and the error will point to the line.

## Preview locally

Open `index.html` in a browser, or start a local server:

    python3 -m http.server 8000

Then visit http://localhost:8000.

## Publish

Commit and push to `main`. GitHub Pages updates https://nuzhny25.github.io within about a minute.

## Files

| File | What it's for |
| --- | --- |
| `content.js` | Projects, experience and education. **This is the one you edit.** |
| `index.html` | Name, intro, links and page structure |
| `style.css` | All styling, with the colors at the top |
| `script.js` | Turns `content.js` into the lists on the page |
| `resume.pdf` | Your résumé, linked from the header |
