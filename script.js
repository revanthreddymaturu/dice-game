"use strict";
const p1Card = document.querySelector(".p1");
const p2Card = document.querySelector(".p2");
const diceBall = document.querySelector(".dice");
const newGame = document.querySelector(".new-game");
const holdGame = document.querySelector(".hold");
const rollDice = document.querySelector(".roll-dice");
//
const p1TotalScore = document.querySelector(".player-1-ts");
const p2TotalScore = document.querySelector(".player-2-ts");
const p1CurrentScore = document.querySelector(".player-1-cs");
const p2CurrentScore = document.querySelector(".player-2-cs");
let p1Score, p2Score, p1CurrScore, p2CurrScore;
function switchPlayer() {
  p1Card.classList.toggle("player--active");
  p2Card.classList.toggle("player--active");
}

function init() {
  p1Score = 0;
  p2Score = 0;
  p1CurrScore = 0;
  p2CurrScore = 0;
  p1TotalScore.textContent = 0;
  p2TotalScore.textContent = 0;
  p1CurrentScore.textContent = 0;
  p2CurrentScore.textContent = 0;

  p1Card.classList.add("player--active");
  p2Card.classList.remove("player--active");
  diceBall.classList.add("hidden");
  p1Card.classList.remove("winner");
  p2Card.classList.remove("winner");
}

init();

rollDice.addEventListener("click", function () {
  const diceVal = Math.trunc(Math.random() * 6) + 1;
  diceBall.src = `img/dice-${diceVal}.png`;
  diceBall.classList.remove("hidden");

  if (p1Card.classList.contains("player--active")) {
    if (diceVal == 1) {
      p1CurrScore = 0;
      p1CurrentScore.textContent = p1CurrScore;
      switchPlayer();
      return;
    }
    p1CurrScore += diceVal;
    p1CurrentScore.textContent = p1CurrScore;
  } else if (p2Card.classList.contains("player--active")) {
    if (diceVal == 1) {
      p2CurrScore = 0;
      p2CurrentScore.textContent = p2CurrScore;
      switchPlayer();
      return;
    }
    p2CurrScore += diceVal;
    p2CurrentScore.textContent = p2CurrScore;
  }
});
holdGame.addEventListener("click", function () {
  if (p1Card.classList.contains("player--active")) {
    p1Score += p1CurrScore;
    p1CurrScore = 0;
    p1TotalScore.textContent = p1Score;
    p1CurrentScore.textContent = p1CurrScore;
    if (p1Score >= 100) {
      p1Card.classList.add("winner");
      return;
    }
  } else if (p2Card.classList.contains("player--active")) {
    p2Score += p2CurrScore;
    p2CurrScore = 0;
    p2TotalScore.textContent = p2Score;
    p2CurrentScore.textContent = p2CurrScore;
    if (p2Score >= 100) {
      p2Card.classList.add("winner");
      return;
    }
  }
  switchPlayer();
});
newGame.addEventListener("click", init);
