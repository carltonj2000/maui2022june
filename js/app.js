import "./icons/index.js";
import "./pages/index.js";
import "./pages/events.js";

//import "./sw-modal";
//import "./swReg";
const events = document.getElementById("events");
const eventsB = document.getElementById("eventsButton");
const agenda = document.getElementById("agenda");
const agendaB = document.getElementById("agendaButton");

eventsB.addEventListener("click", () => {
  events.style.display = "flex";
  agenda.style.display = "none";
  eventsB.style.opacity = "1";
  agendaB.style.opacity = "0.5";
});

agendaB.addEventListener("click", () => {
  events.style.display = "none";
  agenda.style.display = "flex";
  eventsB.style.opacity = "0.5";
  agendaB.style.opacity = "1";
});

//eventsB.click();
agendaB.click();
