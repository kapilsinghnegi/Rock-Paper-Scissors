alert('This is a game of rock, paper, scissors. You will play against the computer. Rock beats scissors, scissors beats paper, and paper beats rock. The first to win 5 rounds wins the game.')
alert('Let the game begin!');

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice(){
    let humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    return humanChoice;
}

var humanScore = 0;
var computerScore = 0;

function playGame(){
    function playRound(computerChoice, humanChoice){
        humanChoice = humanChoice.toLowerCase();
        if(computerChoice === humanChoice){
            return alert('It is a tie!');
        }
        if(computerChoice === 'rock' && humanChoice === 'scissors'){
            computerScore++;
            return alert('Computer wins!');
        }
        if(computerChoice === 'rock' && humanChoice === 'paper'){
            humanScore++;
            return alert('Human wins!');
        }
        if(computerChoice === 'scissors' && humanChoice === 'rock'){
            humanScore++;
            return alert('Human wins!');
        }
        if(computerChoice === 'scissors' && humanChoice === 'paper'){
            computerScore++;
            return alert('Computer wins!');
        }
        if(computerChoice === 'paper' && humanChoice === 'rock'){
            computerScore++;
            return alert('Computer wins!');
        }
        if(computerChoice === 'paper' && humanChoice === 'scissors'){
            humanScore++;
            return alert('Human wins!');
        }
    }
        
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

for(let i = 0; i < 5; i++){
    playGame();
};

alert('Computer score: ' + computerScore);
alert('Human score: ' + humanScore);
alert('Game over!');

if(computerScore > humanScore){
    alert('Computer wins the game!');
} else if(computerScore < humanScore){
    alert('Human wins the game!');
} else {
    alert('Game Tied!');
}