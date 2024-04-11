const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getComputerChoice() {
    const value = Math.round(Math.random() * 2)
    if (value == 0) {
        return "Rock"
    } else if (value == 1) {
        return "Scissors"
    } else {
        return "Paper"
    }
    
}

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("Tie! Both are " + playerSelection)
    } else {
        if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
            console.log("You Lose! Paper beats Rock")
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
            console.log("You Win! Rock beats Scissors")
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
            console.log("You Win! Paper beats Rock")
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
            console.log("You Lose! Scissors beats Paper")
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
            console.log("You Win! Scissors beats Paper")
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
            console.log("You Lose! Rock beats Scissors")
        } else {
            console.log("Invalid Input")
        }
    }
  }
  
  function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;

    function playNextRound() {
        if (rounds < 5) {
            displayResult(rl.question('Rock, Paper, or Scissors? ', (userInput) => {
                const computerChoice = getComputerChoice();
                playRound(userInput, computerChoice);
                
                rounds++;
                playNextRound();
            });)
        } else {
            // Game over, display result
            if (userScore > computerScore) {
                console.log("Congratulations! You Win!");
            } else if (userScore < computerScore) {
                console.log("Failure. Better luck next time!");
            } else {
                console.log("It's a tie!");
            }
            rl.close();
        }
    }

    playNextRound();
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

// Add event listeners to buttons
document.getElementById('rock-btn').addEventListener('click', function() {
    displayResult(playGame())
    playRound('rock');
});

document.getElementById('paper-btn').addEventListener('click', function() {
    playRound('paper');
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    playRound('scissors');
});

//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
  