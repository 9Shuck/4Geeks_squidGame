/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//JUST CODE BELOW HERE
window.onload = function() {};

const CLASS = document.querySelector(".Carolth7");

const BOTTON = document.querySelector("#buttonClick");

BOTTON.addEventListener("click", event => {
  event.preventDefault();
  let emotic = "🙌🏼";
  CLASS.innerHTML = emotic;
});
