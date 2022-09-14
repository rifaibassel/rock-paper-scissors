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

function game() {
  let playerCounter = 0;
  let computerCounter = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt('Choose your weapon!');
    let result = playSingleRound(playerSelection, computerSelection);
    if (
      result ===
      `You Win! ${capitalize(playerSelection)} beats ${capitalize(
        computerSelection
      )}.`
    ) {
      console.log(result);
      playerCounter++;
    } else if ((result = 'Tie!')) {
      console.log(result);
    } else {
      console.log(result);
      computerCounter++;
    }
  }
  if (computerCounter > playerCounter) {
    console.log(
      `You Lose! The Computer has scored ${computerCounter} while you scored ${playerCounter}.`
    );
  } else if (computerCounter < playerCounter) {
    console.log(
      `You Win! You have scored ${playerCounter} while the computer scored ${computerCounter}.`
    );
  } else {
    console.log('Tie!');
  }
}
