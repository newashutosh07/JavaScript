// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps with code reusability

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log(`${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
fish.sleep();
hawk.sleep();

console.log(fish.alive);

fish.swim();
