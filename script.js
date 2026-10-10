// Fills the page with the lists from content.js.

function renderList(sectionId, items) {
  if (!items.length) return; // an empty list keeps its section hidden

  const section = document.getElementById(sectionId);
  const template = document.getElementById("entry-template");

  for (const item of items) {
    const entry = template.content.cloneNode(true);
    const links = Object.entries(item.links ?? {});

    // The title links to the first link, if there is one.
    const name = entry.querySelector(".entry-name");
    if (links.length) name.append(createLink(links[0][1], item.title));
    else name.textContent = item.title;

    fill(entry, ".entry-org", item.org);
    fill(entry, ".entry-date", item.date);
    fill(entry, ".entry-description", item.description);
    // Non-breaking spaces keep each tag, and the dot after it, on one line.
    fill(entry, ".entry-tags", item.tags?.map((tag) => tag.replaceAll(" ", " ")).join(" · "));

    const linkList = entry.querySelector(".entry-links");
    for (const [label, url] of links) linkList.append(createLink(url, label));
    if (!links.length) linkList.remove();

    const meta = entry.querySelector(".entry-meta");
    if (!meta.children.length) meta.remove();

    section.querySelector(".entries").append(entry);
  }

  section.hidden = false;
}

// Sets an element's text, or removes the element when there's nothing to show.
function fill(root, selector, text) {
  const el = root.querySelector(selector);
  if (text) el.textContent = text;
  else el.remove();
}

function createLink(url, text) {
  const a = document.createElement("a");
  a.href = url;
  a.textContent = text;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

document.getElementById("year").textContent = new Date().getFullYear();

renderList("projects", PROJECTS);
renderList("experience", EXPERIENCE);
renderList("education", EDUCATION);
