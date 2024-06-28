let playerScore = 0;
let computerScore = 0;
let playerInput = "";

const match = document.getElementById("match-result");
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");
const winner = document.getElementById("winner");
const buttons = document.querySelectorAll(".choice");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    playerInput = button.id;
    playRound(getPlayerChoice(), getComputerChoice());
  });
});

function getPlayerChoice() {
  if (playerInput == "rock") {
    return 1;
  } else if (playerInput == "paper") {
    return 2;
  } else if (playerInput == "scissors") {
    return 3;
  } else {
    return 1;
  }
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
  let choice = getRandomNumber(1, 3);

  if (choice == 1) {
    return 1;
  } else if (choice == 2) {
    return 2;
  } else {
    return 3;
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    match.innerHTML = "It's a tie!";
  } else if (playerChoice == 1 && computerChoice == 2) {
    computerScore++;
    cScore.innerHTML = computerScore;
    match.innerHTML = "You lose! Paper beats rock.";
  } else if (playerChoice == 1 && computerChoice == 3) {
    playerScore++;
    pScore.innerHTML = playerScore;
    match.innerHTML = "You win! Rock beats scissors.";
  } else if (playerChoice == 2 && computerChoice == 1) {
    playerScore++;
    pScore.innerHTML = playerScore;
    match.innerHTML = "You win! Paper beats rock.";
  } else if (playerChoice == 2 && computerChoice == 3) {
    computerScore++;
    cScore.innerHTML = computerScore;
    match.innerHTML = "You lose! Scissors beat paper.";
  } else if (playerChoice == 3 && computerChoice == 1) {
    computerScore++;
    cScore.innerHTML = computerScore;
    match.innerHTML = "You lose! Rock beats scissors.";
  } else if (playerChoice == 3 && computerChoice == 2) {
    playerScore++;
    pScore.innerHTML = playerScore;
    match.innerHTML = "You win! Scissors beat paper.";
  }

  if (playerScore == 5) {
    winner.innerHTML = "Player wins!";
  } else if (computerScore == 5) {
    winner.innerHTML = "Computer wins!";
  }
}
