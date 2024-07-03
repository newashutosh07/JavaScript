const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network call
  setTimeout(() => {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Ashutosh", email: "newashutosh.team7@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "aaashutoshchy", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myUsername) => {
    console.log(myUsername);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "anujaaa", password: 1321 });
    } else {
      reject("Error 123");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
