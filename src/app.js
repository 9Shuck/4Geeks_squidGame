/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

//JUST CODE BELOW HERE
window.onload = function() {};

const BUTTON = document.querySelector("#buttonClick");
const BOX = document.querySelector(".JSotormayrLemons");

BUTTON.addEventListener("click", event => {
  event.preventDefault();
  let emojii = "📺";
  BOX.innerHTML = emojii;
  BUTTON.addEventListener("click", event => {
    event.preventDefault();
    BOX.classList.add("auraGlow");
  });
});
