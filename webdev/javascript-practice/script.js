let playerScore = 0
let computerScore = 0
const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.round(Math.random() * 2)];
}

function getHumanChoice() {
    let choice = "";
    while(!choices.includes(choice)) {
        choice = prompt("rock, paper, or scissors?");
    }
    return choice;
}

function playRound() {
    let computerChoice = getComputerChoice()
    let playerChoice = getHumanChoice()

    console.log("player choice: " + playerChoice)
    console.log("computer choice: " + computerChoice)

    if(playerChoice=="rock" && computerChoice=="rock") {
        playerScore += 0
        computerScore += 0
    }
    else if(playerChoice=="rock" && computerChoice=="paper") {
        playerScore += 0
        computerScore += 1
    }
    else if(playerChoice=="rock" && computerChoice=="scissors") {
        playerScore += 1
        computerScore += 0
    }
    else if(playerChoice=="paper" && computerChoice=="rock") {
        playerScore += 1
        computerScore += 0
    }
    else if(playerChoice=="paper" && computerChoice=="paper") {
        playerScore += 0
        computerScore += 0
    }
    else if(playerChoice=="paper" && computerChoice=="scissors") {
        playerScore += 0
        computerScore += 1
    }
    else if(playerChoice=="scissors" && computerChoice=="rock") {
        playerScore += 0
        computerScore += 1
    }
    else if(playerChoice=="scissors" && computerChoice=="paper") {
        playerScore += 1
        computerScore += 0
    }
    else if(playerChoice=="scissors" && computerChoice=="scissors") {
        playerScore += 0
        computerScore += 0
    }

    console.log("current score:")
    console.log("player: " + playerScore)
    console.log("computer: " + computerScore)
}

playRound()
playRound()
playRound()
playRound()
playRound()