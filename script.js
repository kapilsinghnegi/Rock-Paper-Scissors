'use strict';
const computerScore = document.querySelector('#computerScore');
const humanScore = document.querySelector('#humanScore');
const result = document.querySelector('#roundWinner');
const reset = document.querySelector('#playAgain');

const rock1 = document.getElementById('rock1');
const paper1 = document.getElementById('paper1');
const scissors1 = document.getElementById('scissors1');
const rock2 = document.getElementById('rock2');
const paper2 = document.getElementById('paper2');
const scissors2 = document.getElementById('scissors2');

let humanChoice, computerChoice;
let hScore = 0;
let cScore = 0;

function unselect() {
  const elements = [rock1, paper1, scissors1, rock2, paper2, scissors2];
  elements.forEach(element => element.classList.remove('selected'));
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  if (computerChoice === 'rock') {
    rock2.classList.add('selected');
  }
  if (computerChoice === 'paper') {
    paper2.classList.add('selected');
  }
  if (computerChoice === 'scissors') {
    scissors2.classList.add('selected');
  }
  return computerChoice;
}

function disableButtons() {
  const btn = [rock1, paper1, scissors1];
  btn.forEach(btn => (btn.disabled = true));
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    result.textContent = 'Tie!';
  } else if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'rock')
  ) {
    cScore++;
    computerScore.textContent = cScore;
    result.textContent = 'Computer wins!';
  } else {
    hScore++;
    humanScore.textContent = hScore;
    result.textContent = 'You win!';
  }

  if (hScore >= 5) {
    result.textContent = 'Game Over. You won this game!';
    unselect();
    disableButtons();
  } else if (cScore >= 5) {
    result.textContent = 'Game Over. Computer won this game!';
    unselect();
    disableButtons();
  }
}

function playGame() {
  const computerChoice = getComputerChoice();
  playRound(computerChoice, humanChoice);
}

function getHumanChoice() {
  rock1.addEventListener('click', function () {
    unselect();
    humanChoice = 'rock';
    rock1.classList.add('selected');
    playGame();
  });

  paper1.addEventListener('click', function () {
    unselect();
    humanChoice = 'paper';
    paper1.classList.add('selected');
    playGame();
  });

  scissors1.addEventListener('click', function () {
    unselect();
    humanChoice = 'scissors';
    scissors1.classList.add('selected');
    playGame();
  });
}

function enableButtons() {
  const btn = [rock1, paper1, scissors1];
  btn.forEach(btn => (btn.disabled = false));
}

reset.addEventListener('click', function () {
  hScore = 0;
  cScore = 0;
  humanScore.textContent = hScore;
  computerScore.textContent = cScore;
  result.textContent = 'Make a choice, start the game!';
  unselect();
  enableButtons();
});

getHumanChoice();
