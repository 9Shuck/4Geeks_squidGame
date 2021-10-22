/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//JUST CODE BELOW HERE
window.onload = function() {};
const BUTTON = document.querySelector("#buttonClick");
const ICON = document.querySelector(".Catsil");

BUTTON.addEventListener("click", event => {
  ICON.innerHTML = "😺";
  BUTTON.addEventListener("click", event => {
    ICON.classList.toggle("auraGlow");
  });
});
