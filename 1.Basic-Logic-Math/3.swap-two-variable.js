const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim();
const arr = input.split(' ').map(Number).slice(0,2);
let a = arr[0], b=arr[1];
console.log(a,b);
a+=b;
b=a-b;
a-=b;
console.log(a,b);