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

const tabOpts = ["days", "events"];

const tabGrpNBtn = tabOpts.map((t) => {
  const grp = document.getElementById(t);
  const btn = document.getElementById(`${t}B`);
  return { grp, btn };
});

// add click handler to enable only one tab
tabOpts.map((_, i) => {
  const { grp, btn } = tabGrpNBtn[i];
  btn.addEventListener("click", () => {
    tabOpts.map((_, j) => {
      const { grp: grp2, btn: btn2 } = tabGrpNBtn[j];
      if (i === j) {
        grp2.style.display = "flex";
        btn2.style.opacity = "1";
      } else {
        grp2.style.display = "none";
        btn2.style.opacity = "0.5";
      }
    });
  });
});
