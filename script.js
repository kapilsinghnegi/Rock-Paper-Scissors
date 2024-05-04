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
console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    return humanChoice;
}
console.log(getHumanChoice());
