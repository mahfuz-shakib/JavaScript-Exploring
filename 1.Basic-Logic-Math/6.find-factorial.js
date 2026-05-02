const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim();
let n = Number(input);
let fact=1;
while(n)
{
    fact*=n;
    n--;
}
console.log(fact);