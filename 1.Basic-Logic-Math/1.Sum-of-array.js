// Given an array of numbers, return the sum of all elements.
// Input: [1,2,3,4]
// Output: 10
const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim();
const arr = input.split(' ').map(Number);
let sum = 0;
arr.forEach(n=>sum+=n);
console.log(sum);



