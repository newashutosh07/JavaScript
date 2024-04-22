// .checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = "You have Subscribed";
  } else {
    subResult.textContent = "You have not subscribed";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with visa";
  } else if (mastercard.checked) {
    paymentResult.textContent = "You are paying with mastercard";
  } else if (paypal.checked) {
    paymentResult.textContent = "You are paying with paypal";
  } else {
    paymentResult.textContent = "You must select payment type";
  }
};
