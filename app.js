function getComputerChoice() {
  const choiceArr = ['rock', 'paper', 'scissors'];
  return choiceArr[Math.floor(Math.random() * 3)];
}

function playSingleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let result;
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result = 1;
  } else if (computerSelection === playerSelection) {
    result = 2;
  } else if (
    playerSelection !== 'rock' &&
    playerSelection !== 'paper' &&
    playerSelection !== 'scissors'
  ) {
    result = null;
  } else {
    result = 0;
  }
  return result;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function game() {
  let playerCounter = 0;
  let computerCounter = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = 'rock';
    const playerSelection = prompt('Choose your weapon!');
    let result = playSingleRound(playerSelection, computerSelection);
    if (result === 1) {
      console.log(
        `You Win! ${capitalize(playerSelection)} beats ${capitalize(
          computerSelection
        )}.`
      );
      playerCounter++;
    } else if (result === 2) {
      console.log('Tie!');
    } else if (result === 0) {
      console.log(
        `You Lose! ${capitalize(computerSelection)} beats ${capitalize(
          playerSelection
        )}.`
      );
      computerCounter++;
    } else {
      console.log('Wrong Input!');
      i > 0 ? (i = i - 1) : (i = 0);
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
