// Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
// Old Pattern to handle asynchronous functions.
// Use Promises + async/await to avoid Callback Hell

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 Complete.");
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 Complete.");
    callback();
  }, 2000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 Complete.");
    callback();
  }, 3000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 Complete.");
    callback();
  }, 4000);
}
function task5(callback) {
  setTimeout(() => {
    console.log("Task 5 Complete.");
    callback();
  }, 5000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          console.log("All Task is Complete");
        });
      });
    });
  });
});
