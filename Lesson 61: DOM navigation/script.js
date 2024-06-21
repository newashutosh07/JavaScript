// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementChild
// .previousElementSibling
// .parentElements
// .children

// .firstElementChild
/*
const element = document.getElementById("singers");
const firstChild = element.firstElementChild;

firstChild.style.backgroundColor = "yellow";
*/

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

// ---------------- .lastElementChild ----------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// const ulElement = document.querySelectorAll("ul");
// ulElement.forEach((ulElement) => {
//   ulElement.lastElementChild.style.backgroundColor = "yellow";
// });

// ---------------- .nextElementChild ----------------
// const element = document.getElementById("orange");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// const element = document.querySelector("#fruits");
// element.nextElementSibling.style.backgroundColor = "yellow";

// ---------------- .previousElementSibling ----------------
// const element = document.getElementById("apple");
// element.previousElementSibling.style.backgroundColor = "yellow";

// const element = document.querySelector("#anime");
// element.previousElementSibling.style.backgroundColor = "yellow";

// ---------------- .parentElements ----------------
// const element = document.getElementById("apple");
// element.parentElement.style.backgroundColor = "red";

// ---------------- .children ----------------
// const element = document.getElementById("fruits");
// const children = element.children;

// Array.from(children).forEach((child) => {
//   child.style.backgroundColor = "red ";
// });

// children[1].style.backgroundColor = "red";
