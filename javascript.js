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

function getHumanChoice() {
    let answer = prompt("Rock Paper or Scissors? ")
    if (answer.toLowerCase() === "rock"){
        return(answer.toLowerCase());
    } else if (answer.toLowerCase() === "scissors") {
        return(answer.toLowerCase());
    } else if (answer.toLowerCase() === "paper"){
        return(answer.toLowerCase());
    } else {
        return("are you stupid?")
    }
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log("Tie!");
    } else if (computerChoice === 'rock' && humanChoice === 'scissors'){
        console.log("Lol you lost");
        computerScore += 1;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper'){
        console.log("Lol you lost");
        computerScore += 1;
    } else if (computerChoice === 'paper' && humanChoice === 'rock'){
        console.log("Lol you lost");
        computerScore += 1;
    } else {
        console.log("oh what? You won..")
        humanScore += 1;
    }
}

function playGame() {
    for (let round = 0; round < 5; round++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    console.log('Human Score:', humanScore)
    console.log('Computer Score:', computerScore)
}

playGame()



