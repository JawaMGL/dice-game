// player turn
// 1st player 0
// 2nd player 1
var scores;
var isGameOver;
var activePlayer;
var tempScore;
var diceDom = document.querySelector(".dice");
// players current score
initGame();
function initGame() {
  isGameOver = false;
  scores = [0, 0];
  // players temp score
  activePlayer = 0;
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  tempScore = 0;
  // Preparation to starting
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

// rollDice event
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isGameOver === false) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      tempScore = tempScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = tempScore;
    } else {
      switchToNextPlayer();
    }
  }
});

var btnHold = document.querySelector(".btn-hold");
btnHold.addEventListener("click", function() {
  if (isGameOver === false) {
    scores[activePlayer] = scores[activePlayer] + tempScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  }
});

// diceNumber not equal to 0 add number to active players current score.
function switchToNextPlayer() {
  document.getElementById("current-" + activePlayer).textContent = 0;
  tempScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", function() {
  initGame();
});
