// string methods = "allow you to manipulate and work wit test (strings)

let userName = " ashutoshchy";

// let a = userName.charAt(0);
// console.log(a);

// let b = userName.indexOf("s");
// console.log(b);
// let c = userName.lastIndexOf("s");
// console.log(c);
// let d = userName.length(userName);
// console.log(d);

// The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string.
// userName = userName.trim();
// console.log(userName);

// userName = userName.toLowerCase();
// console.log(userName);

// userName = userName.toUpperCase();
// console.log(userName);

// userName = userName.repeat(3);
// console.log(userName);

// let result = userName.startsWith(" ");
// let result2 = userName.endsWith(" ");
// let result3 = userName.includes(" ");

// console.log(result);

// if (result3) {
//   console.log("username can't contain empty space");
// } else {
//   console.log(userName);
// }

let num = "123-456-789";
console.log(num);
num = num.replaceAll("-", "");
num = num.padStart(15, "0");
num = num.padEnd(15, "0");
console.log(num);
