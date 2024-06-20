// element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "Yellow";
// myHeading.style.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);

// fruits[0].style.backgroundColor = "red";
// fruits[1].style.backgroundColor = "yellow";

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "yellow";
// }

// let newFruits = Array.from(fruits);
// console.log(newFruits);

// newFruits.forEach((fruit) => {
//   fruit.style.backgroundColor = "yellow";
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "yellow";

// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "Yellow";
// }

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "lightgreen";
// }

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = "lightGreen";
// });

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

const fruits = document.querySelectorAll(".fruits");
fruits[0].style.backgroundColor = "yellow";

console.log(fruits);

fruits.forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});
