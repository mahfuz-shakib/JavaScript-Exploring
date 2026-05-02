const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim();
let n = Number(input);
let cnt=0;
while(n)
{
    cnt++;
    n = parseInt(n/10);
}
console.log(cnt);
