/* Proper pseudo code
getComputerChoice() {
    randomly select between rock, paper, or scissors
    return the choice
}
getPlayerChoice() {
    prompt user for input and store it in playerSelection
    validate input (error handling)
    return the choice
}
playRound(playerSelection, computerSelection) {
    compare playerSelection and computerSelection
    if playerSelection is rock and computerSelection is scissors {
        return "Player wins!" 
    } else if playerSelection is paper and computerSelection is rock {
        return "Player wins!"
    } else if playerSelection is scissors and computerSelection is paper {
        return "Player wins!"
    } else if playerSelection is scissors and computerSelection is rock {
        return "Computer wins!"
    } else if playerSelection is rock and computerSelection is paper {
        return "Computer wins!"
    } else if playerSelection is paper and computerSelection is scissors {
        return "Computer wins!"
    } else {
        return "It's a tie!"
    }   
}        
    rounds logic just use a for loop for 5 rounds
    for i = 0 to 4 {
        playerSelection = getPlayerChoice()
        computerSelection = getComputerChoice()
        result = playRound(playerSelection, computerSelection)
        if result includes "Player wins" {
            increment player score
        } else if result includes "Computer wins" {
            increment computer score
        }
        display result
    }
    display final scores
*/

function getComputerChoice() {
    let computerSelection = Math.floor((Math.random() * 100)) % 3;
    if (computerSelection === 0){
        return "Rock";
    }
    else if (computerSelection === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
    
}
let computerSelection = getComputerChoice();
console.log(computerSelection);

function getPlayerChoice() {
    let playerSelection = prompt("Rock Paper Scissors?");

    if (playerSelection.toLowerCase() === "rock"){
        playerSelection = "Rock";
    }
    else if (playerSelection.toLowerCase() === "paper"){
        playerSelection = "Paper";
    }
    else if (playerSelection.toLowerCase() === "scissors"){
        playerSelection = "Scissors";
    }
    else{
        console.log("Incorrect input!");
    }

    return playerSelection;
}

let playerSelection = getPlayerChoice();
console.log(playerSelection);

let humanScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        humanScore += 1;
        return "You win! Rock beats Scissors"; 
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        humanScore += 1;
        return "You win! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        humanScore += 1;
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore += 1;
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore += 1;
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1;
        return "You lose! Scissors beats Paper";
    } else {
        return "It's a tie!";
    } 
}

console.log(playRound(computerSelection, playerSelection));