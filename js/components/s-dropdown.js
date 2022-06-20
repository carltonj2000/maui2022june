class SDropdown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    //this.innerHTML = /* html */ `<div>
    this.shadowRoot.innerHTML = /* html */ `<div>
      <button>hi</button>
      <slot></slot>
    </div>`;
  }
}

customElements.define("s-dropdown", SDropdown);
