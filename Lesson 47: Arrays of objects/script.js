const fruits = [
  { name: "Apple", color: "red", calories: 95 },
  { name: "Orange", color: "orange", calories: 45 },
  { name: "Coconut", color: "white", calories: 169 },
  { name: "Pineapple", color: "yellow", calories: 129 },
];

// fruits[0].name;
// console.log(fruits[2].calories);

fruits.push({ name: "banana", color: "yellow", calories: 105 });
// // fruits.pop();
// fruits.splice(2, 1);
// console.log(fruits);

// // -------------------- forEach()--------------------
// fruits.forEach((fruit) => console.log(fruit.color));

// -------------------- map()--------------------

// const fruitName = fruits.map((fruit) => fruit.name);
// const fruitColors = fruits.map((fruit) => fruit.color);
// const fruitCalories = fruits.map((fruit) => fruit.calories);

// console.log(fruitName);
// console.log(fruitColors);
// console.log(fruitCalories);

// -------------------- filter()--------------------
// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// -------------------- reduce()--------------------
// const maxFruit = fruits.reduce((max, fruit) =>
//   fruit.calories > max.calories ? fruit : max
// );

// const minFruit = fruits.reduce((min, fruit) =>
//   fruit.calories < min.calories ? fruit : min
// );
// console.log(minFruit);
