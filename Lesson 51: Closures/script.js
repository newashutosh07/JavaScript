// closure = A function defined inside of another function, the inner function as access to the variables and scope of the outer function.

// Allow for private variables and state maintenance used frequently in JS frameworks: React, Vue, Angular

// function outer() {
//   let message = "Hello";
//   function inner() {
//     console.log(message);
//   }
//   inner();
// }
// outer();

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+{points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-{points}pts`);
  }

  function getScore() {
    return score;
  }
  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()} pts`);
