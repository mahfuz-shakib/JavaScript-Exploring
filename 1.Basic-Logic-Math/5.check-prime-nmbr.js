const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
let n = Number(input);

const checkPrime = (x) => {
  if (x < 2) return false;

  for (let i = 2; i * i <= x; i++) {
    if (x % i == 0) return false;
  }
  return true;
};

console.log(checkPrime(1) ? "Prime" : "Not Prime");
console.log(checkPrime(2) ? "Prime" : "Not Prime");
console.log(checkPrime(9) ? "Prime" : "Not Prime");
console.log(checkPrime(31) ? "Prime" : "Not Prime");
console.log(checkPrime(97) ? "Prime" : "Not Prime");

console.log(checkPrime(n) ? "Prime" : "Not Prime");
