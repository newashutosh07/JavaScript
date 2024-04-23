// array = a variable like structure that can hold more than 1 value

//               0         1         2
let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("mango");
console.log(index); //Prints -1 if the elemnent does not exist in the array.

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("In Reverse");

//To print in reverse
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

//Shortcut to display an elements of an array.
for (let fruit of fruits) {
  console.log(fruit);
}

//Sort method

fruits.sort().reverse();
console.log(fruits);
