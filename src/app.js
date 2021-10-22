/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//JUST CODE BELOW HERE

const BOX_FOLKEN = document.querySelector(".Folkenciyo");
const BUTTON = document.querySelector("#buttonClick");

let shine = () => {
  BUTTON.addEventListener("click", () => {
    BOX_FOLKEN.classList.add("auraGlow");
    BUTTON.addEventListener("click", () => {
      BOX_FOLKEN.classList.remove("auraGlow");
    });
  });
};

window.onload = function() {};
/* shine(); */
BUTTON.addEventListener("click", () => {
  BOX_FOLKEN.innerHTML = "🏍";
  BUTTON.addEventListener("click", () => {
    shine();
  });
});
