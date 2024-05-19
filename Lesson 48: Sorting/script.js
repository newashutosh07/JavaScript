// sort()

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => b - a);

const people = [
  { name: "Ashutosh", age: 17, gpa: 3.2 },
  { name: "Ashua", age: 18, gpa: 3.4 },
  { name: "Rosé", age: 12, gpa: 4 },
];

people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
