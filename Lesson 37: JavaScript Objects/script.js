// object = A collection of related properties and/or methods Can represnt real world objects (people, products, places)
// object = {key:value, function()}

const person1 = {
  firstName: "Ashutosh",
  lastName: "Chaudhary",
  age: 17,
  isStudent: true,
  sayHello: function () {
    console.log("Hi! I am Ashutosh");
  },
  eat: function () {
    console.log("I am eating pizza.");
  },
};

const person2 = {
  firstName: "Momina",
  lastName: "Mustehsan",
  age: 31,
  isStudent: false,
  sayHello: () => console.log("Hi! I am Momina"),
  eat: () => console.log("I am eating meat."),
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isStudent);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isStudent);

person1.eat();
person2.sayHello();
