import { table } from "./js/components/agenda-table.js";

const toDo = [
  ["Item", "Details"],
  ["Book Boat", "For Molokini Crater or Lana'i Island"],
  ["Monday", "Black Sand Beach Booked For 7 AM To 10 AM"],
];

class ToDo extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = table(toDo, "To Do");
  }
}

customElements.define("to-b4", ToDo);
