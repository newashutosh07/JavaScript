// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject)=>{asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

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

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeoutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the tasks!");
  })
  .catch((error) => {
    console.log(error);
  });
