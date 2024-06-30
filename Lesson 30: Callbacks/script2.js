function sayHello() {
  console.log("Hello");
}

function sayHi() {
  console.log("Hi...");
}

function add(num1, num2, callback) {
  console.log(num1 + num2);
  callback();
}

let a = 10;
let b = 15;

add(a, b, sayHello);
add(5, 6, sayHi);

add(30, 5, () => {
  console.log("Namaste");
});
