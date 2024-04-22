let currValue = 0;

document.getElementById("dec").onclick = function () {
  currValue = currValue - 1;
  document.getElementById("num").textContent = currValue;
};

let increment = (document.getElementById("inc").onclick = function () {
  currValue = currValue + 1;
  document.getElementById("num").textContent = currValue;
});

let reset = (document.getElementById("reset").onclick = function () {
  currValue = 0;
  document.getElementById("num").textContent = currValue;
});
