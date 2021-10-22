/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const EMOTICON = document.querySelector(".RubenWilly");
const BUTTON = document.querySelector("#buttonClick");

//JUST CODE BELOW HERE
window.onload = function() {};
BUTTON.addEventListener("click", () => {
  EMOTICON.innerHTML = "🕹";
  BUTTON.addEventListener("click", () => {
    EMOTICON.classList.toggle("auraGlow");
  });
});
