// eventListener = Listen for specific events to create interactive web pages events: keydown, keyup

// document.addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const moveAmount = 50;
let x = 0;
let y = 0;

// document.addEventListener("keyup", (e) => {
//   myBox.textContent = "😧";
// });

document.addEventListener("keyup", (e) => {
  myBox.style.backgroundColor = "white";
  myBox.textContent = `🫡`;
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key.startsWith("Arrow")) {
    switch (e.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
    myBox.style.bottom = `${y}px`;
    myBox.style.right = `${x}px`;
  }
});
