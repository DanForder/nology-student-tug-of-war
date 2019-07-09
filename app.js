let currentScore = 0;

let overallP1Score = 0;
let overallP2Score = 0;

let player1Key;
let player2Key;

const resetKeysDelay = 3000;

reset();
setInterval(getPlayerKeys, resetKeysDelay);

document.addEventListener("keyup", function(event) {
  if (!event.keyCode === player1Key || !event.keyCode === player2Key) {
    return;
  }

  if (event.keyCode === player1Key) {
    playerScore(1);
  } else if (event.keyCode === player2Key) {
    playerScore(2);
  }
});

function reset() {
  currentScore = 0;
  overallP1Score = 0;
  overallP2Score = 0;

  //   document.getElementById("tug-score").innerHTML = currentScore;
  document.getElementById("player-1-score").innerHTML = overallP1Score;
  document.getElementById("player-2-score").innerHTML = overallP2Score;
}

function getPlayerKeys() {
  player1Key = Math.floor(Math.random() * (90 - 65 + 1) + 65);
  //   console.log(player1Key);
  do {
    player2Key = Math.floor(Math.random() * (90 - 65 + 1) + 65);
  } while (player2Key === player1Key);
  //   console.log(player2Key);

  updatePlayerKeys(player1Key, player2Key);
}

function updatePlayerKeys(player1Key, player2Key) {
  document.getElementById("player-1-key").innerHTML = String.fromCharCode(
    player1Key
  );
  document.getElementById("player-2-key").innerHTML = String.fromCharCode(
    player2Key
  );
}

function playerScore(player) {
  //   console.log("Player" + player + "scored!");
  if (player === 1) {
    currentScore--;
  } else {
    currentScore++;
  }
  console.log(currentScore);
  updateScore();

  if (currentScore >= 25) {
    playerWin("Player 2");
  } else if (currentScore <= -25) {
    playerWin("Player 1");
  }
}

function updateScore() {
  //   document.getElementById("tug-score").innerHTML = currentScore;
  document.getElementById("line").style.WebkitTransform = `translate(${currentScore}vw)`; }

function playerWin(winner) {
  console.log(winner + " wins!");
  if (winner === "Player 1") {
    overallP1Score++;
  } else {
    overallP2Score++;
  }
  document.getElementById("player-1-score").innerHTML = overallP1Score;
  document.getElementById("player-2-score").innerHTML = overallP2Score;
  newRound();
}

function newRound() {
  currentScore = 0;
  updateScore();
}
