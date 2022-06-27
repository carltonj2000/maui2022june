import { table } from "./agenda-table.js";

class Day extends HTMLElement {
  constructor() {
    super();
    this._info = null;
    this.render();
  }

  get info() {
    return this._info;
  }

  set info(value) {
    this._info = value;
    this.render();
  }

  render() {
    this.innerHTML = !this._info
      ? "coming soon"
      : table(this._info.agenda, this._info.title);
  }
}

customElements.define("agenda-day", Day);
