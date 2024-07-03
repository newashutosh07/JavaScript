// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walk the dog");
      } else {
        reject("You didn't walked the dog!");
      }
    }, 1000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = false;
      if (kitchenCleaned) {
        resolve("You clean the Kitchen");
      } else {
        reject("You didn't cleaned the kitchen");
      }
    }, 2000);
  });
}
function takeoutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashOut = true;
      if (trashOut) {
        resolve("You take out the trash");
      } else {
        reject("You didn't take out the trash");
      }
    }, 1500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeoutTrashResult = await takeoutTrash();
    console.log(takeoutTrashResult);
  } catch (error) {
    console.log(error);
  }
}

doChores();
