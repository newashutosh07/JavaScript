// const = a variable that can't be changed

const PI = 3.14159;

// radius = window.prompt("Enter the radius of a circle");

document.getElementById("myBtn").onclick = function () {
  let radius = document.getElementById("myText").value;
  radius = Number(radius);
  let circumfarance;
  circumfarance = 2 * PI * radius;
  document.getElementById(
    "ans"
  ).textContent = `Circumfarence: ${circumfarance}cm`;
};
