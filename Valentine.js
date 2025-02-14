"use strict";

const snoopyGifs = [
  "https://media1.tenor.com/m/qPa9uJo18WcAAAAC/snoopy.gif",
  "https://media.tenor.com/Q4GWQyd3R9kAAAAi/snoopy.gif",
  "https://media1.tenor.com/m/cf-IrIoYWsUAAAAC/snoopy-cry.gif",
  "https://media.tenor.com/cNSWr-h4MQ4AAAAi/snoopy-eat.gif",
  "https://media1.tenor.com/m/WYRm5gcRSHMAAAAC/snoopy-peanuts.gif",
  "https://media1.tenor.com/m/xwNQIQtJt_4AAAAC/snoopy.gif",
  "https://media1.tenor.com/m/kOPeqD2ToT8AAAAd/snoopy-peanuts.gif",
  "https://media1.tenor.com/m/m1TvHNAFXYcAAAAC/byuntear-snoopy.gif",
  "https://media.tenor.com/IxOVfaA0RfwAAAAi/snoopy.gif",
  "https://media1.tenor.com/m/Q8PFvXYPYVsAAAAC/hoevatiic.gif",
  "https://media1.tenor.com/m/aodm2K5jukMAAAAC/snoopy-scared.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const sibtn = document.querySelector(".btn-si");
const nobtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 10;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let siButtonSize = 1;

sibtn.addEventListener("click", () => {
  title.innerHTML = "¡Yeiii! Te amooo, Deya. 💗 (Sabía que aceptarías, princesa. 🌷)";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

nobtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeSiButton();
    shrinkNoButton();
    updatenoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeSiButton() {
  siButtonSize *= 1.2;
  sibtn.style.transform = `scale(${siButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  nobtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "¿Por qué no? 😔",
    "¿Estás segura? 🥺",
    "Por favor, linda.",
    "No te arrepentirás. 😭",
    "Te haré sonreír, princesa.💔",
    "Voy a llorar. 😭💔",
    "Por faaaa. 😔",
    "Seré muy atenta.",
    "No te arrepentirás. 😭",
    "Aceptaaaa.",
    "Por fisss.",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://media1.tenor.com/m/pMTzxjdbFckAAAAC/snoopy-dance.gif"
      : snoopyGifs[image];
}

function updatenoButtonText() {
  nobtn.innerHTML = generateMessage(noCount);
}