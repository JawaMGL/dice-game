// player turn
// 1st player 0
// 2nd player 1
var activePlayer = 0;

// players current score
var scores = [0, 0];

// players temp score
var tempScore = 0;

// dice
var dice = Math.floor(Math.random() * 6) + 1;

// Preparation to starting
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").innerHTML = 0;
document.querySelector(".dice").style.display = "none";
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
console.log(dice);
