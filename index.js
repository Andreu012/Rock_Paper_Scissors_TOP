function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        humanScore += result.human;
        computerScore += result.computer;

        console.log(`Scores - You: ${humanScore} | Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (humanScore < computerScore) {
        console.log("Computer won...");
    } else {
        console.log("It's a tie...");
    }
}

function getComputerChoice() {
    let num = Math.random();
    if (num > 0.66666666) {
        return "scissors";
    } else if (num > 0.33333333) {
        return "rock";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    let userInput = prompt("Input either 'rock', 'paper', or 'scissors'.");
    return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return { human: 0, computer: 0 };
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win this round!");
        return { human: 1, computer: 0 };
    } else {
        console.log("Computer wins this round!");
        return { human: 0, computer: 1 };
    }
}

playGame();
