// ternary operator = a shortcut to if{} and else {} statements helps of assign a variable based on a condition.
// condition ? codeIfTrue : codeIfFalse;

// let age = 21;
// let message = age >= 18 ? "You are adult" : "You're a minor";
// console.log(message);

// let time = 9;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let isStudent = "false";
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

let purchaseAmount = 125;
let discount =
  purchaseAmount > 100
    ? purchaseAmount - (10 / 100) * purchaseAmount
    : purchaseAmount;
console.log(discount);
