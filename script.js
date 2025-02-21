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
    let humanChoice = prompt("Enter your choice: rock, paper or scissors");
    return humanChoice;
}

console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie!";
    } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        return "You win! Rock beats scissors";
    } else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        return "You win! Paper beats rock";
    } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        return "You win! Scissors beats paper";
    } else {
        computerScore++;
        return "You lose!";
    }

}

function playGame(){

    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
         return "It's a tie!";
        } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
            humanScore++;
            return "You win! Rock beats scissors";
        } else if(humanChoice === 'paper' && computerChoice === 'rock'){
             humanScore++;
             return "You win! Paper beats rock";
        } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            return "You win! Scissors beats paper";
        } else {
            computerScore++;
            return "You lose!";
        }

    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

}

for(let i = 0; i < 5; i++){
    playGame();
}