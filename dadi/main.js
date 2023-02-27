let playerScore = 0;
let computerScore = 0;
let rollResult;
let pcRollResult;

// Function to play a turn for the player
function playerTurn() {
  const roll = Math.floor((Math.random() * 6) + 1);
  // Roll the die
  rollResult = roll;
  // Display the result to the player
  console.log(`You rolled a ${rollResult}.`);
  playerScore += rollResult;
}

// Function to play a turn for the PC
function pcTurn() {
  const pcRoll = Math.floor((Math.random() * 6) + 1);
   // Roll the die
  pcRollResult = pcRoll;
  // Display the result to the player
  console.log(`The computer rolled a ${pcRollResult}.`);
  computerScore += pcRollResult;
}

// Play the game
playerTurn();
pcTurn();

// Determine the winner
if (rollResult > pcRollResult) {
  console.log(`Congratulations, you won with a score of ${playerScore}!`);
} else if (pcRollResult > rollResult) {
  console.log(`Sorry, the computer won with a score of ${computerScore}.`);
} else {
  console.log(`It's a tie! Both players scored ${playerScore}.`);
}

