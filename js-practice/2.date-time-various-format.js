const today = new Date();
console.log(today);
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
if (month < 10) month = "0" + month;
if (date < 10) date = "0" + date;

console.log(`${month}-${date}-${year}`);
console.log(`${month}/${date}/${year}`);
console.log(`${date}-${month}-${year}`);
console.log(`${date}/${month}/${year}`);
