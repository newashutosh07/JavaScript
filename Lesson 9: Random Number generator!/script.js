// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min) + min);

// console.log(randomNum);

//Random Number Generator

const myButton = document.getElementById("myBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 7;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
  let randomNum1 = Math.floor(Math.random() * max + min);
  let randomNum2 = Math.floor(Math.random() * max + min);
  let randomNum3 = Math.floor(Math.random() * max + min);
  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;
};
