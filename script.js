let homeScore = document.getElementById("home-score");
let hScore = 0;

let guestScore = document.getElementById("guest-score");
let gScore = 0;

//Functions for adding points to Home

function addOneHome() {
  hScore += 1;
  homeScore.textContent = hScore;
}
function addTwoHome() {
  hScore += 2;
  homeScore.textContent = hScore;
}
function addThreeHome() {
  hScore += 3;
  homeScore.textContent = hScore;
}

//Functions to add points to Guest

function addOneGuest() {
  gScore += 1;
  guestScore.textContent = gScore;
}
function addTwoGuest() {
  gScore += 2;
  guestScore.textContent = gScore;
}
function addThreeGuest() {
  gScore += 3;
  guestScore.textContent = gScore;
}

function reset() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
