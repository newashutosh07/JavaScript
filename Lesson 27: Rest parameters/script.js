// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest = bundles seperate elements into an array

// function openFridge(...foods) {
//   console.log(...foods);
// }

// function getFood(...foods) {
//   return foods;
// }

// const food1 = "pizza";
// const food2 = "Burger";
// const food3 = "Apple";
// const food4 = "Momo";
// const food5 = "Ramen";

// // openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(2, 4, 5);

// console.log(`Your Total is ${total}`);

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const totalAvg = getAverage(2, 4, 5);

// console.log(`Your Total is ${totalAvg}`);

//TO combine String
function combineString(...strings) {
  return strings.join(" ");
}
const fullName = combineString("Mr.", "Spongebob", "Squarepants");

console.log(fullName);
