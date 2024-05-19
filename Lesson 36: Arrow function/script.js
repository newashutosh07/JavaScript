// arrow function = a concise way to write function expressions good for simple function that you use only once (parameters) => some code

// const hello = (name, age) => {
//   console.log(`Hello ${name}`);
//   console.log(`You are ${age} years old`);
// };

// hello("Momina", 31);

setTimeout(() => {
  console.log(`Hello`);
}, 2000);

const number = [1, 2, 4, 5, 6];

const squares = number.map((element) => {
  return Math.pow(element, 2);
});

const oddNums = number.filter((element) => {
  return element % 2 !== 0;
});

const evenNums = number.filter((element) => element % 2 === 0);
const total = number.reduce((previous, next) => previous + next);

console.log(squares);
console.log(oddNums);
console.log(evenNums);
console.log(total);
