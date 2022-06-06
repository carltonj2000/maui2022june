import { table } from "./agenda-table.js";

const toDo = [
  ["Item", "Details"],
  ["Book Boat", "For Molokini Crater or Lana'i Island"],
];

class ToDo extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = table(toDo, "To Do");
  }
}

customElements.define("to-b4", ToDo);
