//While loop = repeat some code While some condition is true

// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt("Enter your name: ");
// }

// console.log(`Hello ${username}`);

// do {
//   username = window.prompt("Enter your name: ");
// } while (username === "" || username === null);

// console.log(`Hello ${username}`);

let loggedIn = true;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter you username: ");
  password = window.prompt("Enter you password: ");
  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("incorrect");
  }
}
