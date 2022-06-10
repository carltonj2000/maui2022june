import { table } from "../components/agenda-table.js";

const toDo = [
  ["Item", "Details"],
  ["Book Boat", "For Molokini Crater or Lana'i Island for Fri, Th, Tu"],
  ["Zipline", "Flyin Hawaiian ZL, Jungle Zl or Kapalua Zl for Fri, Th, Tu"],
];

class ToDo extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /* html */ `<div class="todo" id="todo" style="display: none;">` +
      table(toDo, "To Do") +
      /* html */ `<div>`;
  }
}

customElements.define("to-do", ToDo);
