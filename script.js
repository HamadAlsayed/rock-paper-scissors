let playerScore;
let computerScore;
let playerInput;

const buttons = document.querySelectorAll(".choice");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        playerInput = button.id;
    });
});

function getPlayerChoice() {

    if (playerInput == "rock") {
        return 1;
    } else if (playerInput == "paper") {
        return 2;
    } else if (playerInput == "scissors"){
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
        return "It's a tie";
    } else if (playerChoice == 1 && computerChoice == 2) {
        return "You lose! Paper beats rock.";
    } else if (playerChoice == 1 && computerChoice == 3) {
        return "You win! Rock beats scissors.";
    } else if (playerChoice == 2 && computerChoice == 1) {
        return "You win! Paper beats rock.";
    } else if (playerChoice == 2 && computerChoice == 3) {
        return "You lose! Scissors beat paper.";
    } else if (playerChoice == 3 && computerChoice == 1) {
        return "You lose! Rock beats scissors.";
    } else if (playerChoice == 3 && computerChoice == 2) {
        return "You win! Scissors beat paper.";
    }
}

function game() {
    while (playerScore != 5 || computerScore != 5) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}

// game();