const m = import.meta.globEager("../data/june*.js"); // vite packager specific

export const { html, names, modules } = Object.keys(m).reduce(
  (a, k) => {
    const name = k.replace(/\.\.\/data\//, "").replace(/\.js/, "");
    const html = a.html + `<agenda-day id="${name}"></agenda-day>`;
    const names = [...a.names, name];
    const modules = { ...a.modules, [name]: m[k] };
    return { html, names, modules };
  },
  { html: "", names: [], modules: {} }
);
