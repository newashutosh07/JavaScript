// Date objects = Objects that contain values that represent dates and times
// These date objects can be changed and formatted

// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const second = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(dayOfWeek);

// console.log(date);

// const date = new Date();

// date.setFullYear(2025);
// date.setMonth(0);
// date.setHours(2);
// date.setDate(1);
// date.setMinutes(3);
// date.setSeconds(4);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
  console.log("Happy New Year!");
}
