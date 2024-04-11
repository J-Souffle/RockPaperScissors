function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

function displayChoice(choice) {
    const choiceElement = document.getElementById('choice');
    choiceElement.textContent = `Your choice: ${choice}`;
}

function clearChoice() {
    const choiceElement = document.getElementById('choice');
    choiceElement.textContent = '';
}

document.getElementById('rock-btn').addEventListener('click', function() {
    displayChoice('rock')
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    displayResult(result);
});

document.getElementById('paper-btn').addEventListener('click', function() {
    displayChoice('paper')
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    displayResult(result);
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    displayChoice('scissors')
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    displayResult(result);
});

document.getElementById('clear').addEventListener('click', function() {
    // Clear the choice and result
    clearChoice();
    displayResult('');
});