<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>¿Te gustaría ser mi San Valentín?</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="container">
      <img
        class="img"
        src="https://media.tenor.com/Jloq3y4mk8kAAAAi/amor-love.gif"
        alt="snoopy"
      />
      <p class="title">¿Te gustaría ser mi San Valentín?</p>
      <div class="buttons">
        <button type="button" class="btn btn-si">Si</button>
        <button type="button" class="btn btn-no">No</button>
      </div>
    </main>

    <script src="script.js"></script>
  </body>
</html>

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background: linear-gradient(135def, #f5e0ee, #d5aecb);
  font-family: "Poppins", serif;
  color: #4a4a4a;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  border-radius: 15px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.img {
  width: auto;
  height: 28rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-in-out;
}

.img:hover {
  transform: scale(1.03);
}

.title {
  font-size: 3.6rem;
  font-weight: 600;
  color: hotpink;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1.6rem 3rem;
  border: none;
  border-radius: 30px;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-2px);
  }
}
.btn-si {
  background-color: #26953c;
  color: white;
}

.btn-no {
  background-color: rgb(166, 37, 82);
  color: white;
  transition: background-color 0.3s, transform 0.2s;
}
.hidden {
  display: none;
}

"use strict";

const snoopyGifs = [
  "https://media1.tenor.com/m/qPa9uJo18WcAAAAC/snoopy.gif",
  "https://media.tenor.com/Q4GWQyd3R9kAAAAi/snoopy.gif",
  "https://media1.tenor.com/m/cf-IrIoYWsUAAAAC/snoopy-cry.gif",
  "https://media.tenor.com/cNSWr-h4MQ4AAAAi/snoopy-eat.gif",
  "https://media1.tenor.com/m/WYRm5gcRSHMAAAAC/snoopy-peanuts.gif",
  "https://media1.tenor.com/m/xwNQIQtJt_4AAAAC/snoopy.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const sibtn = document.querySelector(".btn-si");
const nobtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let siButtonSize = 1;

sibtn.addEventListener("click", () => { 
  title.innerHTML = "Yay! I Love You!! 💗";
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
  sibtn.style.transform = scale(${siButtonSize});
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  nobtn.style.transform = scale(${noButtonSize});
}

function generateMessage(noCount) {
  const messages = [
    "¿Por qué no? 😔",
    "¿Estás segura? 🥺",
    "Por favor, linda.",
    "NO te arrepentirás. 😭",
    "Te haré sonreír, princesa.💔",
    "Voy a llorar. 😭💔",
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
