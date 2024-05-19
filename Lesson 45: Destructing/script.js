// destructing = extract values from arrays and objects, then assign them to variables in a convenient wat

// [] = to perform array destructing
// {} = to perform objects destructing
// 5 examples

// ---------------- Example 1 ----------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a);
console.log(b);

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

function displayPerson(firstName, lastName, age, job) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}

const person1 = {
  firstName: "Ashutosh",
  lastName: "Chaudhary",
  age: 17,
  job: "Software Developer",
};

const person2 = {
  firstName: "ROSÉ",
  lastName: "PARK",
  age: 27,
};

// const { firstName, lastName, age, job = "unemployed" } = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

displayPerson(person1);
