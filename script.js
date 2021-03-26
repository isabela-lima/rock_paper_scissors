// console.log(playRound(playerSelection, computerSelection));
let playerWins = 0;
let computerWins = 0;

function game() {
  const playerSelection = prompt("Choose Rock, Paper or Scissors: ", "")
    .toUpperCase()
    .trim();
  const computerSelection = computerPlay();
  return playRound(playerSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 5; i++) {
    console.log(game());
  }

  if (playerWins > computerWins) {
    console.log("Player Wins, CONGRATS");
  } else if (computerWins > playerWins) {
    console.log("Computer Wins, SORRY :(");
  } else {
    console.log("It's a tie!");
  }
}

function computerPlay() {
  let choice = ["ROCK", "PAPER", "SCISSORS"];

  const random = choice[Math.floor(Math.random() * choice.length)];

  return random;
}

function playRound(playerSelection, computerSelection) {
  // rock x paper
  if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerWins++;
    return "You lose PAPER beats ROCK, computer chose: " + computerSelection;
  }
  // paper x paper
  else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "It's a tie! computer chose: " + computerSelection;
  }
  // scissors x paper
  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerWins++;
    return "You win YAAAY! computer chose: " + computerSelection;
  }
  // rock x rock
  else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "It's a tie! computer chose: " + computerSelection;
  }
  // rock x scissors
  else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerWins++;
    return "You win, NICE! computer chose: " + computerSelection;
  }
  // scissors x scissors
  else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    return "It's a tie!  computer chose: " + computerSelection;
  }
  // paper x scissors
  else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerWins++;
    return "You LOSE! computer chose: " + computerSelection;
  }
  //paper x rock
  else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerWins++;
    return "You WIN! computer chose: " + computerSelection;
  }
  // scissors x rock
  else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerWins++;
    return "You LOSE! computer chose: " + computerSelection;
  } else {
    return (
      "Choose only from ROCK, PAPER or SCISSORS. Computer chose: " +
      computerSelection
    );
  }
}
