function getRandomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice () {
    let choice = getRandomNumber(1, 3);
    
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice () {
    let input = prompt("Pick between rock, paper or scissors.", "Please type your choice here.").toLowerCase();

    if (input === "rock") {
        return 1;
    } else if (input === "paper") {
        return 2;
    } else {
        return 3;
    }
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's a tie";
    } else if (playerChoice === 1 && computerChoice === 2) {
        return "Computer wins!";
    } else if (playerChoice === 1 && computerChoice === 3) {
        return "Player wins!";
    } else if (playerChoice === 2 && computerChoice === 1) {
        return "Player wins!";
    } else if (playerChoice === 2 && computerChoice === 3) {
        return "Computer wins!";
    } else if (playerChoice === 3 && computerChoice === 1) {
        return "Computer wins!";
    } else if (playerChoice === 3 && computerChoice === 2) {
        return "Player wins!";
    }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));