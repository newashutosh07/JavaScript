// NodeList = Static collection of HTML elements by (id, class, element)
// Can be created using querySelectorAll()
// Similar to an array, but no (map, filter, reduce)
// NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);
// buttons.forEach((button) => {
//   button.style.backgroundColor = "green";
//   button.textContent = "Subscribe";
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.target.style.backgroundColor = "yellow";
//   });
// });

// Add an Element
const newButton = document.createElement("button"); //Step 1
newButton.textContent = "Button 5"; //Step 2
newButton.classList = "myButtons";

// Step 3

document.body.appendChild(newButton);

// To add new Button on Nodelist
buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// Remove an Element

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.remove();
    // To remove buttons from Nodelist
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  });
});
