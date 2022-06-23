import "./icons/index.js";
import "./pages/index.js";
import "./pages/events.js";
//import "./pages/to-do.js";

//import "./sw-modal";
//import "./swReg";
const events = document.getElementById("events");
const eventsB = document.getElementById("eventsButton");

const agenda = document.getElementById("agenda");
const agendaB = document.getElementById("agendaButton");

//const todo = document.getElementById("todo");
//const todoB = document.getElementById("todoButton");

eventsB.addEventListener("click", () => {
  events.style.display = "flex";
  eventsB.style.opacity = "1";

  agenda.style.display = "none";
  agendaB.style.opacity = "0.5";

  //  todo.style.display = "none";
  //  todoB.style.opacity = "0.5";
});

agendaB.addEventListener("click", () => {
  events.style.display = "none";
  eventsB.style.opacity = "0.5";

  agenda.style.display = "flex";
  agendaB.style.opacity = "1";

  //  todo.style.display = "none";
  //  todoB.style.opacity = "0.5";
});

// todoB.addEventListener("click", () => {
//   events.style.display = "none";
//   eventsB.style.opacity = "0.5";

//   agenda.style.display = "none";
//   agendaB.style.opacity = "0.5";

//    todo.style.display = "flex";
//    todoB.style.opacity = "1";
// });

//eventsB.click();
agendaB.click();

// TO DO generate the above code with the map below
["agenda", "events", "todo"].map((p) => {
  // const
});

const navigationHeight = document.querySelector(".header").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
