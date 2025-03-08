
function playGame(){

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
        let humanChoice = prompt("Enter your choice: rock, paper or scissors");
        return humanChoice;
    }
    
    

    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice){
        const resultsDiv = document.getElementById('results');
        if(humanChoice === computerChoice){
            resultsDiv.innerHTML = `Human: ${humanScore} <br> Computer: ${computerScore} <br> It's a tie! You both chose ${humanChoice}`;
         return "It's a tie! You both chose " + humanChoice;
        } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
            humanScore++;
            resultsDiv.innerHTML = `Human: ${humanScore} <br> Computer: ${computerScore} <br> You win! Rock beats scissors`;
            return "You win! Rock beats scissors";
        } else if(humanChoice === 'paper' && computerChoice === 'rock'){
             humanScore++;
             resultsDiv.innerHTML = `Human: ${humanScore} <br> Computer: ${computerScore} <br> You win! Paper beats rock`;
             return "You win! Paper beats rock";

        } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            resultsDiv.innerHTML = `Human: ${humanScore} <br> Computer: ${computerScore} <br> You win! Scissors beats paper`;
            return "You win! Scissors beats paper";
        } else {
            computerScore++;
            resultsDiv.innerHTML = `Human: ${humanScore} <br> Computer: ${computerScore} <br> You lose!`;
            return "You lose!";
        }

    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML += `<br>${result}`;


    



}



