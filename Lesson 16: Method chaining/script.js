//Method Chaining = calling one method after another  in one continuous line of code.

//---------------------No Method Chaining---------------------

let username = window.prompt("Enter your username: ");
// username = username.trim(); //It removes white spaces
// let firstChar = username.charAt(0);

// firstChar = firstChar.toUpperCase();
// // console.log(firstChar);

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// // console.log(extraChars);

// console.log(firstChar + extraChars);

//---------------------Method Chaining---------------------

username =
  username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);
