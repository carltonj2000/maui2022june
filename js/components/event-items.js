import { events } from "../data/events.js";
import { enhance } from "../enhance-html.js";

class EventItems extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /* html */ `
    <div class="events" id="events" style="display: none;">
      <h2>Events</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Activities</th><th>Details</th></tr>
        <thead>
        <tbody>
          ${Object.keys(events)
            .map((k, i) => {
              const a = events[k].activity || "";
              const activities = typeof a === "string" ? a : a.join(", ");
              const icons =
                `<div class="icons">` +
                Object.keys(events[k])
                  .filter((k2) => k2.length === 1 && k2.match(/[mlpw]/))
                  .map((i) => `<div><${k}${i} /></div>`)
                  .join(" ") +
                "</div>";
              return (
                /* html */ `<tr key=${i}>` +
                /* html */ `<td>${events[k].d}</td>` +
                /* html */ `<td>${activities}</td>` +
                /* html */ `<td>${enhance(icons)}</td>` +
                /* html */ `</tr>`
              );
            })
            .join("\n")}
        </tbody>
      <table>
    </div>`;
  }
}

customElements.define("event-items", EventItems);
