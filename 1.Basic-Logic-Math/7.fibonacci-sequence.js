const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim();
let n = Number(input);
let a=1,b=1;
console.log("0");
while(a<=n)
{
    console.log(a);
    a=b;
}
