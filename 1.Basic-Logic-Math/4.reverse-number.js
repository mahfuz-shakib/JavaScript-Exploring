// reverse a number : 12345 -----> 54321

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

// arr = input.split('') --- converted to array of string/char
// revArr = arr.reverse() --- reverse the array of string/char
// revStr = revArr.join('') --- join the reversed array of string/char
// rev = Number(revStr) --- Got the reversed string and converted to number
const rev = Number(input.split("").reverse().join(""));
console.log(rev);

// let n = Number(input);
// let rev=0; 12345
// while(n)
// {
//     rev = rev*10+n%10;
//     n=parseInt(n/10);
// }
// console.log(rev);
