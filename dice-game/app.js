// player turn
// 1st player 0
// 2nd player 1
var activePlayer = 0;

// players current score
var scores = [0, 0];

// players temp score
var tempScore = 0;

// dice
var diceDom = document.querySelector(".dice");

// Preparation to starting
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

diceDom.style.display = "none";

// rollDice event
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    tempScore = tempScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = tempScore;
  } else {
    switchToNextPlayer();
  }
});

var btnHold = document.querySelector(".btn-hold");
btnHold.addEventListener("click", function() {
  scores[activePlayer] = scores[activePlayer] + tempScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 10) {
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
  alert("fuku");
});
