// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the JavaScript runtime env.)

// setTimeout(callback, delay);
// clearTimeout(timeoutID) = can cancel a timeout before it triggers

// const timeoutID = setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeoutID);

let timeoutID;
function startTimer() {
  timeoutID = setTimeout(() => {
    window.alert("Hello");
  }, 3000);
  console.log("Started");
}
function clearTimer() {
  clearTimeout(timeoutID);
  console.log("Cleared");
}
