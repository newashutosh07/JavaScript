// callback = a function that is passed as an argument to another funtion.

// used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// "Hey, when you're done call this next."

// hello(wait);

// function hello(callback) {
//   console.log("Hello!");
//   callback();
// }

// function wait() {
//   console.log("Wait!");
// }

// function leave() {
//   console.log("Leave!");
// }

// function goodBye() {
//   console.log("Goodbye!");
// }

sum(displayPage, 5, 6);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
