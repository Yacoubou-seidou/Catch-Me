// const allPics = document.querySelectorAll(".kakashi");
// const cachettes = document.querySelectorAll(".cachette");
// const counterEl = document.getElementById("score");
// const startEl = document.getElementById("start-el");
// let count = 0;

// function add() {
//   count++;
//   counterEl.textContent = count;
// }
// function displayKakashi() {
//   const i = Math.floor(Math.random() * allPics.length);
//   const kakashis = allPics[i];
//   setTimeout(function () {
//     kakashis.style.display = "block";
//     kakashis.style.transform = "translateY(-90%)";
//     kakashis.style.transition = "all ease-in-out 0.3s";
//     kakashis.style.zIndex = "1";
//   }, i * 100);
//   setTimeout(retourne(kakashis, 300));
//   kakashis.style.zIndex = "-1";
//   setInterval(displayKakashi, 1000);
// }
// function defaultCachette() {
//   const i = Math.floor(Math.random() * cachettes.length);
//   const cachette = cachettes[i];
// }

// function display(kakashi, cachettes) {}
// function retourne(m) {
//   m.style.transform = "translateY(25%)";
// }
//
//
// Method nouvelle
//

const cachettes = document.querySelectorAll(".cachette");
const scoreBoard = document.querySelector(".score");
const kakashis = document.querySelectorAll(".kakashi");
let lastcachette;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomcachette(cachettes) {
  const idx = Math.floor(Math.random() * cachettes.length);
  const cachette = cachettes[idx];
  if (cachette === lastcachette) {
    return randomcachette(cachettes);
  }
  lastcachette = cachette;
  return cachette;
}

function peep() {
  const time = randomTime(200, 1000);
  const cachette = randomcachette(cachettes);
  cachette.classList.add("up");
  setTimeout(() => {
    cachette.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return; // cheater!
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

kakashis.forEach((kakashi) => kakashi.addEventListener("click", bonk));
