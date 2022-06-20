import "./agenda-day.js";
import { html, names, modules } from "../data/days.js";

class AgendaMaui extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /* html */ `
      <div class="agenda" id="agenda"><h2>Agenda</h2>${html}</div>`;
    names.map((n) => (document.getElementById(n).info = modules[n].default));
  }
}

customElements.define("agenda-maui", AgendaMaui);
