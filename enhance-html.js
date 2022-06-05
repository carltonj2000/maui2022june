/*
 *  <event><type>
 *  <type> m=map l=location p=picture w=website d=description
 *  <event> two chars describing the event ex ap=air port
 */

const icons = {
  l: "<icon-location></icon-location>",
  m: "<icon-map></icon-map>",
  p: "<icon-picture></icon-picture>",
  w: "<icon-link></icon-link>",
};

const events = {
  rr: {
    d: "rail road pass",
    l: "https://goo.gl/maps/BDgX9e9Zc38S49Na6",
  },
  la: {
    d: "Lava River Cave",
    l: "https://goo.gl/maps/kMvpxGEtZCYrX4356",
    p: "./lavaRiverCavePic.png",
    m: "./lavaRiverCave.png",
    w: "https://www.flagstaff.com/lava-tubes",
  },
  wi: {
    d: "wilson",
    l: "https://goo.gl/maps/Bov8ZrUxddbEgepH6",
  },
};

const linkBuilder = () => {
  const allLinks = Object.keys(events).reduce((a, k) => {
    const event = events[k];
    const subLink2 = Object.keys(event).reduce((b, j) => {
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
