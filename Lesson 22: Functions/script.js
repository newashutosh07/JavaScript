// function = A section of reusable code.
// Declare code once, use it whenever you want.
// Call the function to execute that code.

// function happyBirthDay(name, age) {
//   console.log(`Happy Birthday! ${name}, You are ${age} years old`);
// }

// happyBirthDay("Ashutosh", 18);
// happyBirthDay("ROSÉ", 27);

// function add(x, y) {
//   let result = x + y;
//   //   return x + y
//   return result;
// }

// let sum = add(2, 5);
// console.log(sum);

// function subtract(x, y) {
//   return x - y;
// }

// function isEven(num) {
//   //   if (num % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   return num % 2 === 0 ? true : false;
// }

// console.log(isEven(4));
// console.log(isEven(7));

// function isValidEmail(email) {
//   return email.includes("@") ? true : false;
// }

// console.log(isValidEmail("ashutosh@gmail.com"));
// console.log(isValidEmail("ashutosh.com"));
var a = 1;

function abc() {
  var a = 2;
  console.log(a);
  a = a + 5;
}

abc();
console.log(a);
