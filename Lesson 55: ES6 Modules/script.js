// ES6 Module = An external file that contains reusable code that can be imported into other JavaScript files.
// write resuable code for many different apps.
// Can contain variables, classes, function ... and more Introduced as part of ECMAScript 2015 update

import { PI, getArea, getCircumference } from "./mathUtil.js";

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(30);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm`);
