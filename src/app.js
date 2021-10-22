/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//JUST CODE BELOW HERE
window.onload = function() {};

const BUTTON = document.querySelector("#buttonClick");
const ICON = document.querySelector(".Anigabi");

BUTTON.addEventListener("click", () => {
  ICON.innerHTML = " 👩🏽‍💻";
  ICON.classList.toggle("auraGlow");
});
