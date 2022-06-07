import { events } from "./data/events";

const icons = {
  l: "<icon-location></icon-location>",
  m: "<icon-map></icon-map>",
  p: "<icon-picture></icon-picture>",
  w: "<icon-link></icon-link>",
};

const linkBuilder = () => {
  const allLinks = Object.keys(events).reduce((a, k) => {
    const event = events[k];
    const subLink2 = Object.keys(event).reduce((b, j) => {
      if (j.length > 1) return b;
      return { ...b, [`${k}${j}`]: events[k][j] };
    }, {});
    return { ...a, ...subLink2 };
  }, {});
  return allLinks;
};

const tag = (link) => `<${link} />`;

export const enhance = (c) => {
  const links = linkBuilder();
  const foundLinks = Object.keys(links).filter((l) => c.includes(tag(l)));
  if (foundLinks.length === 0) return c;
  const result = foundLinks.reduce((d, l) => {
    const match = l.match(/([a-z]{2})([mlpwd])/);
    if (!match[2] || !match[0]) return;
    const linkedT =
      match[2] === "d"
        ? links[match[0]]
        : `<a href="${links[match[0]].replace(
            /^\.\//,
            window.location
          )}" class="icon">${icons[match[2]]}</a>`;
    return d !== "" ? d.replace(tag(l), linkedT) : c.replace(tag(l), linkedT);
  }, "");
  return result;
};
