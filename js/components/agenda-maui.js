import "./agenda-day.js";
import june8 from "../data/june8.js";

class AgendaMaui extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /* html */ `
    <div class="agenda" id="agenda">
      <h2>Agenda</h2>
      <agenda-day id="june8"></agenda-june8>
    </div>
    `;
  }
}

customElements.define("agenda-maui", AgendaMaui);

document.getElementById("june8").info = june8;
