import "./agenda-day.js";
import { html, names, modules } from "../data/days.js";

class AgendaDays extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /* html */ `
      <div class="days" id="days"><h2>Agenda</h2>${html}</div>`;
    names.map((n) => (document.getElementById(n).info = modules[n].default));
  }
}

customElements.define("agenda-days", AgendaDays);
