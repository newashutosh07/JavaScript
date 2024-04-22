//IF STATEMENTS = if a condition is true, execute some code
//                if not, do something else

// Example 1:
// let age = 25;
// if (age >= 18) {
//   console.log("You are old enough to enter this site.");
// } else {
//   console.log("You must be 18+ to enter the site");
// }

// let time = 14;
// if (time < 12) {
//   console.log("Good morning!");
// } else {
//   console.log("Good afternoon!");
// }

// let isStudent = false;

// if (isStudent) {
//   console.log("You are a student!");
// } else {
//   console.log("You are not a student");
// }

// let age = 71;
// let hasLicense = false;

// if (age >= 16) {
//   console.log("You are old enough to drive");
//   if (hasLicense) {
//     console.log("You can drive");
//   } else {
//     console.log("You can't drive");
//   }
// } else {
//   console.log("You are not old enough to drive");
// }

//Project
let result = document.getElementById("result");
let myText = document.getElementById("myText");

document.getElementById("mySubmit").onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 18) {
    console.log("You are old enough to drive");
    result.textContent = "You are old enough to drive";
  } else if (age < 1) {
    console.log("Invalid age!");
    result.textContent = "Invalid age!";
  } else {
    console.log("You are not old enough to drive");
    result.textContent = "You are not old enough to drive";
  }
};
