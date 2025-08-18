const date = new Date();
const day = date.getDay(); //provide index
const days = [
  "Sundaay",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = days[day];
console.log(`Today is : ${today}.`);
let hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const prepend = hour >= 12 ? "PM" : "AM";
hour = hour > 12 ? hour - 12 : hour;
console.log(`Current time is : ${hour} ${prepend} : ${minute} : ${second}`);
