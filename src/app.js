/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//JUST CODE BELOW HERE
let elianaBox = document.querySelector(".Eliana");
let button = document.querySelector("#buttonClick");

button.addEventListener("click", event => {
  event.preventDefault;
  let emojiEliana = "🌏";
  elianaBox.innerHTML = emojiEliana;
  button.addEventListener("click", event => {
    event.preventDefault();
    elianaBox.classList.toggle("auraGlow");
  });
});

window.onload = function() {};
