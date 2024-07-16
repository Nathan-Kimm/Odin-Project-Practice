let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = new Array("rock", "paper", "scissors");
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("What choice would you like to make? (Rock, Paper, Or Scissors)");
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === computerChoice){
        console.log(`You draw!`);
        humanScore++;
        computerScore++;``
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore){
        console.log(`Congratulations you win! Human: ${humanScore} Computer: ${computerScore}`);
    } else if(humanScore < computerScore){
        console.log(`Unfortunately you lost. Human: ${humanScore} Computer: ${computerScore}`);
    } else {
        console.log(`You Draw! Human: ${humanScore} Computer: ${computerScore}`);
    }
}

playGame();