let currentPlayer = 1;
let score1 = 0;
let score2 = 0;

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice').src = `https://upload.wikimedia.org/wikipedia/commons/${roll}-face-dice.svg`;

  if (currentPlayer === 1) {
    score1 += roll;
    document.getElementById('score1').textContent = score1;
    document.getElementById('turn').textContent = "Player 2's Turn";
    currentPlayer = 2;
  } else {
    score2 += roll;
    document.getElementById('score2').textContent = score2;
    document.getElementById('turn').textContent = "Player 1's Turn";
    currentPlayer = 1;
  }

  checkWinner();
}

function checkWinner() {
  if (score1 >= 20) {
    document.getElementById('winner').textContent = "🏆 Player 1 Wins!";
    disableButtons();
  } else if (score2 >= 20) {
    document.getElementById('winner').textContent = "🏆 Player 2 Wins!";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll('.controls button')[0].disabled = true;
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  currentPlayer = 1;
  document.getElementById('score1').textContent = 0;
  document.getElementById('score2').textContent = 0;
  document.getElementById('turn').textContent = "Player 1's Turn";
  document.getElementById('winner').textContent = "";
  document.getElementById('dice').src = `https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg`;
  document.querySelectorAll('.controls button')[0].disabled = false;
}
