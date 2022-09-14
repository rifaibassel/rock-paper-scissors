function getComputerChoice() {
  const choiceArr = ['rock', 'paper', 'scissors'];
  return choiceArr[Math.floor(Math.random() * 3)];
}

function playSingleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerSelection.charAt(0).toUpperCase();
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (computerSelection === playerSelection) {
    return 'Tie!';
  } else {
    `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}
