// TEMPERATURE CONVERSION PROGRAM

let Celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
let btn = document.getElementById("mySubmit");
let output = document.getElementById("ans");

btn.onclick = function () {
  let value = document.getElementById("value").value;
  value = Number(value);
  console.log(value, typeof value);
  if (Celsius.checked) {
    let fahrenheitValue = value * 1.8 + 32;
    output.textContent = fahrenheitValue;
    // setTimeout(() => {
    // output.textContent = "Hello World!";
    // }, 500);
  } else if (Fahrenheit.checked) {
    let celsiusValue = ((value - 32) * 5) / 9;
    output.textContent = celsiusValue;
    // setTimeout(() => {
    // output.textContent = "Hello World!";
    // }, 500);
  } else {
    //Throw an error
    output.textContent = "Please! Select the type of conversion";
  }
};
