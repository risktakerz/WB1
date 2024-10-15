"use strict";

window.onload = init;

function init() {
  const helloBtn = document.getElementById("helloBtn");
  helloBtn.onclick = onHelloBtnClicked;
}

function onHelloBtnClicked() {
  const messagepara = document.getElementById("messagePara");
  messagePara.textContent = "Hi!";
}


