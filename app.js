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
    return `You Win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}.`;
  } else if (computerSelection === playerSelection) {
    return 'Tie!';
  } else {
    return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}.`;
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
