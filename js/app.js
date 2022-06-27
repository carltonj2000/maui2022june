import "./icons/index.js";
import "./pages/index.js";
import "./pages/events.js";
//import "./pages/to-do.js";

//import "./sw-modal";
//import "./swReg";

// calculate nav bar height for scroll padding
const navigationHeight = document.querySelector(".header").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

const events = document.getElementById("events");
const eventsB = document.getElementById("eventsB");

const days = document.getElementById("days");
const daysB = document.getElementById("daysB");

eventsB.addEventListener("click", () => {
  events.style.display = "flex";
  eventsB.style.opacity = "1";

  days.style.display = "none";
  daysB.style.opacity = "0.5";
});

daysB.addEventListener("click", () => {
  events.style.display = "none";
  eventsB.style.opacity = "0.5";

  days.style.display = "flex";
  daysB.style.opacity = "1";
});

// todo: below refactor the hard coded values above
const tabOpts = ["days", "events"];

tabGrpNBtn = tabOpts.map((t) => {
  const grp = document.getElementById(t);
  const btn = document.getElementById(`${t}B`);
  return { grp, btn };
});

// add click handler to enable only one tab
tabOpts.map((t) => {
  //
});
