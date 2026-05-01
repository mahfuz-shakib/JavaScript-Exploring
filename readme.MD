<!-- run code in terminal -->

<!-- option-1 -->
<!-- vs-code -->

const readline=require('readline-sync')
const input = readline.question();
console.log(input);

<!-- terminal -->

write your input in terminal + Enter

<!------- option-2 ------>
<!-- vs-code -->

const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim();
console.log(input);

<!-- terminal     -->

node index.js Enter
write your input in terminal + Enter
Ctrl + Z + Enter
