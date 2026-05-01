const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim();
const arr = input.split(' ').map(Number);
// let mx = -1;
// arr.forEach(n=>mx=Math.max(mx,n));
console.log(Math.max(...arr));
console.log(Math.min(...arr));
