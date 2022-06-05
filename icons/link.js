class iconLink extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /* xml */ `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-hidden="true"
  role="img"
  class="iconify iconify--ph"
  width="24"
  height="24"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 256 256"
>
  <path
    fill="steelBlue"
    d="m212.9 122.3l-30.3 30.3a56 56 0 0 1-79.2 0a12 12 0 1 1 16.9-16.9a32.2 32.2 0 0 0 45.3 0l30.3-30.3a32 32 0 0 0-45.3-45.3l-9.6 9.7a12 12 0 0 1-17-17l9.7-9.7a56 56 0 1 1 79.2 79.2ZM115 186.2l-9.6 9.7a32 32 0 0 1-45.3-45.3l30.3-30.3a32.2 32.2 0 0 1 45.3 0a12 12 0 0 0 16.9-16.9a55.9 55.9 0 0 0-79.2 0l-30.3 30.3a56 56 0 0 0 79.2 79.2l9.7-9.7a12 12 0 0 0-17-17Z"
  ></path>
</svg>`;
  }
}

customElements.define("icon-link", iconLink);
