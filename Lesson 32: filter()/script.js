// .filter() = creates a new array by filtering out elements

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

const ages = [16, 17, 18, 19, 20, 21, 60];

const adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element) {
  return element >= 18;
}

const children = ages.filter(isChild);
console.log(children);

function isChild(element) {
  return element < 18;
}

const words = ["apple", "orange", "banana", "kiwi", "coconut"];

const shortWords = words.filter(getShortWords);
console.log(shortWords);

function getShortWords(element) {
  return element.length >= 5;
}
