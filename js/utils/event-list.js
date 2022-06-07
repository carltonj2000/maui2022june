import { table } from "../components/agenda-table.js";

const agenda = [
  ["Start", "End", "Details"],
  [
    "9:00 AM",
    "1:30 PM",
    "Drive from <rrl />Vegas to <lal />Lava River Cave <lam /> with one stop.<wil />",
  ],
  [
    "1:30 PM",
    "3:00 PM",
    "3/4 mile cave. Need 2-3 light sources and jacket cave is 40 F. " +
      "<lap /> <law />",
  ],
];

class Agenda extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = table(agenda, "8th - Flying In");
  }
}

customElements.define("event-list", Agenda);
