// function declaration = define a reusable block of code that performs a specific task

// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

// function hello() {
//   console.log("Hello");
// }

// // function expression = a way to define function as values or variables

// const Hello = function () {
//   console.log( hello");
// };

// setTimeout(hello, 3000);

// setTimeout(function () {
//   console.log("Ashutosh");
// }, 2000);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });
// console.log(squares);

// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });
// console.log(cubes);

const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});

const oddNums = numbers.filter(function (element) {
  return element % 2 !== 0;
});

console.log(evenNums);
console.log(oddNums);

const Total = numbers.reduce(function (previous, next) {
  return previous + next;
});

console.log(Total);
