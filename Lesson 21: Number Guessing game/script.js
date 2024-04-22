// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum) + minNum);

let attempts = 0;
let guess;

let running = true;

while (running) {
  guess = window.prompt(`Guess a Number between ${minNum} to ${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    console.log("Please enter a valid Number: ");
  } else if (guess < minNum || guess > maxNum) {
    console.log("please enter a valid number.");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Your Number less.");
    } else if (guess > answer) {
      window.alert("Your Number is greater!");
    } else {
      window.alert(
        `Correct. The answer is ${answer}. It took you ${attempts} times`
      );
      running = false;
    }
  }
}
