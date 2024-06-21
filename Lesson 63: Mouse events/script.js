// eventListener = Listen for specific events to create interactive web pages events: click, mouseover, mouseout

// .addEventListener(event, callback)

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBox.addEventListener("click", (e) => {
  //   myBox.style.backgroundColor = "red";
  e.target.style.backgroundColor = "red";
  e.target.textContent = "ohh";
});

myBox.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "yellow";
  e.target.textContent = "Don't do it";
});

myBox.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "green";
  e.target.textContent = "Click me";
});

let value = true;

myBtn.addEventListener("click", () => {
  if (value) {
    document.body.style.backgroundColor = "black";
    value = false;
  } else {
    document.body.style.backgroundColor = "white";
    value = true;
  }
});
