import "./agenda-day.js";
import june8 from "../data/june8.js";
import june9 from "../data/june9.js";
import june10 from "../data/june10.js";
import june11 from "../data/june11.js";
import june12 from "../data/june12.js";
import june13 from "../data/june13.js";
import june15 from "../data/june15.js";

class AgendaMaui extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /* html */ `
    <div class="agenda" id="agenda">
      <h2>Agenda</h2>
      <agenda-day id="june8"></agenda-day>
      <agenda-day id="june9"></agenda-day>
      <agenda-day id="june10"></agenda-day>
      <agenda-day id="june11"></agenda-day>
      <agenda-day id="june12"></agenda-day>
      <agenda-day id="june13"></agenda-day>
      <agenda-day id="june15"></agenda-day>
    </div>
    `;
  }
}

customElements.define("agenda-maui", AgendaMaui);

document.getElementById("june8").info = june8;
document.getElementById("june9").info = june9;
document.getElementById("june10").info = june10;
document.getElementById("june11").info = june11;
document.getElementById("june12").info = june12;
document.getElementById("june13").info = june13;
document.getElementById("june15").info = june15;
