import { names } from "../data/days";

class Dropdown extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<div class="days">
      <button id="daysB">Days &#x25BC;</button>
      <dialog>
        <div id="navItems">
          <a href="#">Top</a>
          ${names.map((n) => `<a href="#${n}">${n}</a>`).join("")}
        </div>
      </dialog>
    </div>`;
    const dialog = document.querySelector("dialog");
    const daysB = document.querySelector("#daysB");
    const navItems = document.querySelector("#navItems");
    daysB.addEventListener("click", () => {
      dialog.showModal();
    });
    const daysL = [...document.querySelectorAll("#navItems > a")];
    daysL.forEach((d) =>
      d.addEventListener("click", () => {
        dialog.close();
      })
    );
  }
}

customElements.define("days-dropdown", Dropdown);
