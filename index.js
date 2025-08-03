let humanScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.visibility = "visible";
  humanScore = 0;
  computerScore = 0;
  document.getElementById('score').textContent = `Scores - You: 0 | Computer: 0`;

  const options = document.querySelectorAll('.option');

  options.forEach(option => {
    if (option.id.includes('player')) {
      option.addEventListener('click', () => {
        playRound(option.id.substring(option.id.indexOf('-')+1),getComputerChoice());
      });
    }
  });
});

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

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice,computerChoice);
  let humanIMG = document.getElementById('player-' + humanChoice);
  humanIMG.style.opacity = '1';
  let computerIMG = document.getElementById('computer-' + computerChoice);
  computerIMG.style.opacity = '1';
  let resultText = "";

  if (humanChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText = "You win this round!";
    humanScore += 1;
  } else {
    resultText = "Computer wins this round!";
    computerScore += 1;
  }
  setTimeout(() => {
    document.getElementById('outcome').innerHTML =
      `You chose ${humanChoice}, computer chose ${computerChoice}!<br>${resultText}`;

    document.getElementById('score').textContent =
      `Scores - You: ${humanScore} | Computer: ${computerScore}`;
      ;
  }, 300);
  setTimeout(() => {
    humanIMG.style.opacity = '.5';
    computerIMG.style.opacity = '.5'
  },1000);
}

