// nested objects = objects inside of other Objects.
// Allows you to represent more complex data structures Child Object is enclosed by a Parent Object

// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//   fullName: "Ashutosh Chaudhary",
//   age: 16,
//   isStudent: true,
//   hobbies: ["Playing Guitar", "Singing", "Music Producing"],
//   address: {
//     street: "69 Conch St.",
//     city: "Lahan",
//     country: "Nepal",
//   },
// };

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[1]);
// console.log(person.address.country);

// for (const property in person.address) {
//   console.log(person.address[property]);
// }

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Spongerbob",
  30,
  "124 Conch St.",
  "Bikini Botto",
  "Int. Waters"
);

const person2 = new Person(
  "Patric",
  33,
  "124 sdfd St.",
  "sdfg Botto",
  "Int. tgss"
);

const person3 = new Person(
  "Squidward",
  33,
  "128 sdfd St.",
  "dsjfbnkjo",
  "edfjndklstgss"
);

console.log(person1.address);
