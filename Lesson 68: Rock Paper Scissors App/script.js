const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let userScore = 0;
const playerScoreDisplay = document.getElementById("playerScoreDisplay");

const playGame = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  //   console.log(computerChoice);
  let result = "";
  if (playerChoice === computerChoice) {
    result = "Its a Tie!";
    resultDisplay.style.backgroundColor = "yellow";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win!" : "You Loose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win!" : "You Loose!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win!" : "You Loose!";
        break;
    }
    if (result == "You Win!") {
      resultDisplay.style.backgroundColor = "green";
      userScore++;
      playerScoreDisplay.textContent = userScore;
    } else {
      resultDisplay.style.backgroundColor = "Red";
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
};
