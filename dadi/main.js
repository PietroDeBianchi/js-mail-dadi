let rollResult;
let pcRollResult;
const playButton = document.getElementById('playBtn');
const gameResult = document.getElementById('gameResult');

playButton.addEventListener('click', () => {
// reset everytime i push the btn
let playerScore = 0;
let computerScore = 0;
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
    gameResult.textContent =  `Congratulations, you won with a score of ${playerScore}.`;
} else if (pcRollResult > rollResult) {
    gameResult.textContent = `Sorry, the computer won with a score of ${computerScore}.`;
} else {
    gameResult.textContent = `It's a tie! Both players scored ${playerScore}.`;
}
});
