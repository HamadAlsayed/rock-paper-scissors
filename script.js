function getRandomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice (choice) {
    choice = getRandomNumber(1, 3);
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice (choice) {
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
        console.log("It's a tie!");
    }
}