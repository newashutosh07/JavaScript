// string slicing = creating substring from a portion of another string

// string.slice(start, end)

// const fullName = "Ashutosh Chy";
// // let firstName = fullName.slice(0, 8);
// // let lastName = fullName.slice(9, 12);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// // console.log(firstName);
// // console.log(lastName);
// console.log(firstChar);
// console.log("Last Character:", lastChar);
// console.log(firstName);
// console.log(lastName);

//-----------Exercise------------

const email = "ashutoshchy@gmail.com";
const username = email.slice(0, email.indexOf("@"));
const extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);
