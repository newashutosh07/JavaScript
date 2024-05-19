// .map() = accepts a callback and applies that function to each element of an array, then return a new array

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);
// console.log(squares);

// function square(element) {
//   return Math.pow(element, 2);
// }

// const cubes = numbers.map(cube);
// console.log(cube);

// function cube(element) {
//   return Math.pow(element, 2);
// }

const students = ["Ashutosh", "Momina Mustehsan ", "Rosé"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
  return element.toUpperCase();
}
function lowerCase(element) {
  return element.toLowerCase();
}

const dates = ["2024-4-28", "2063-06-29", "2006-10-15"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]} `;
}
