//How to accept user input

// 1. EASY WAY = window prompt
let userName;

// userName = window.prompt("What is your username");
// console.log(`Your username is ${userName}`);

// 2. PROFESSIONAL WAY = HTML textbox
document.getElementById("mySubmit").onclick = function () {
  userName = document.getElementById("myText").value;
  console.log(userName);
  document.querySelector("h1").textContent = `Hello ${userName}`;
};
