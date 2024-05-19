// .reduce() = reduce the elements of an array to a single value

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total}`);

// function sum(previous, next) {
//   return previous + next;
// }

const grades = [75, 50, 90, 65, 95];

const maximun = grades.reduce(maximunGrades);
console.log(maximun);

const minimun = grades.reduce(minGrades);
console.log(minimun);

function maximunGrades(previous, next) {
  return Math.max(previous, next);
}

function minGrades(previous, next) {
  return Math.min(previous, next);
}
