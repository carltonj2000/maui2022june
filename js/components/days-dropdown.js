class Dropdown extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<div class="days">
      <button id="daysB">Days &#x25BC;</button>
      <div id="navItems">
        <a href="#">Top</a>
        <a href="#june08">June08</a>
        <a href="#june09">June09</a>
      </div>
    </div>`;
    const daysB = document.querySelector("#daysB");
    const navItems = document.querySelector("#navItems");
    daysB.addEventListener("click", () => {
      navItems.style.display =
        navItems.style.display === "none" ? "flex" : "none";
      const detail = navItems.style.display === "none" ? "hidden" : "shown";
    });
  }
}

customElements.define("days-dropdown", Dropdown);
