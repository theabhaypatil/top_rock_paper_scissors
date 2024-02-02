
// Basic game choices for human and computer
let choices = ["Rock", "Paper", "Scissors"]

// This creates a random number between 0-2
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

// Uses random number to randomize computer choice  
function getComputerChoice(){
    const randomNum = getRandom(0,3)
    let computerChoice = (choices[randomNum]);
    return computerChoice
}

function getPlayerChoice(){
    let playerSelection = parseInt(prompt("Rock[1], Paper[2] or Scissors[3]? Enter your choice number: "));
    if (playerSelection == 1){
        return choices[0]
    }else if (playerSelection == 2){
        return choices[1]
    }else if (playerSelection == 3) {
        return choices[2]
    }
}

// computerSelection = getComputerChoice();
// console.log(computerSelection)

// playerSelection = getPlayerChoice();
// console.log(playerSelection)

// Single round function
function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    console.log(`\nRound: ${roundCount}`);
    if (playerSelection == computerSelection){
        console.log(`Computer choice: ${computerSelection}`);
        console.log(`Player choice: ${playerSelection}`);
        return "It's a tie!"
    }
    else if ((computerSelection == "Paper" && playerSelection == "Rock") ||
            (computerSelection == "Scissors" && playerSelection == "Paper") ||
            (computerSelection == "Rock" && playerSelection == "Scissors")){
        computerRoundWins++;
        console.log(`Computer choice: ${computerSelection}`);
        console.log(`Player choice: ${playerSelection}`);
        return "Computer wins!"
    }else{
        console.log(`Computer choice: ${computerSelection}`);
        console.log(`Player choice: ${playerSelection}`);
        playerRoundWins++;
        return "Player wins"
    }
}
// Game with "n" number of rounds
function playGame(n){
    for (let i=1; i<=n; i++){
        console.log(playRound(playerSelection, computerSelection));
        roundCount++;
        console.log(`Computer Score: ${computerRoundWins}\tPlayer Score: ${playerRoundWins}`);
    }
    if (computerRoundWins == playerRoundWins){
        console.log("\nTie Game, Try again!")
    } else if(computerRoundWins > playerRoundWins){
        console.log("\nComputer wins the game! Good luck next time!")
    } else {
        console.log("\nPlayer wins the game! Well done!")
    } 
}

// Initialize variables

let roundCount = 1;
let playerRoundWins = 0;
let computerRoundWins = 0; 
let computerSelection = null;
let playerSelection = null;

//console.log(playRound(playerSelection,computerSelection));
console.log(playGame(5));

