let humanScore = 0
let computerScore = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let number = getRandomInt(3);
    if (number === 0) {
        return("rock");
    } else if (number === 1) {
        return("scissors");
    } else {
        return("paper");
    }
}

function disableButtons() {
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
    } else if (computerChoice === 'rock' && humanChoice === 'scissors'){
        computerScore += 1;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper'){
        computerScore += 1;
    } else if (computerChoice === 'paper' && humanChoice === 'rock'){
        computerScore += 1;
    } else {
        humanScore += 1;
    }
};

let results = document.querySelector("#results")

let rock = document.querySelector("#Rock");

let scissors = document.querySelector("#Scissors");

let paper = document.querySelector("#Paper");

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    results.textContent = `player: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore === 5) {
        alert('Nice Lil Buddy');
        disableButtons();
    } else if (computerScore === 5) {
        alert('lol you trash');
        disableButtons();
    }
});


scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    results.textContent = `player: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore === 5) {
        alert('Nice Lil Buddy');
        disableButtons();
    } else if (computerScore === 5) {
        alert('lol you trash');
        disableButtons();
    }
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    results.textContent = `player: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore === 5) {
        alert('Nice Lil Buddy');
        disableButtons();
    } else if (computerScore === 5) {
        alert('lol you trash');
        disableButtons();
    }
});

