const numbers = [5, 10, 4, 11, 13, 18];

// const list = numbers.map(myFun);
// function myFun(x) {
//   return x * 2;
// }
// console.log(list);

// const list = numbers.map(function myFun(x){return x*2})
// console.log(list);

// const list = numbers.map(function (x){return x*2})
// console.log(list);

// const list = numbers.map((x) => {x * 2});
// console.log(list);

//-----------------------------------------------------------

// const list = numbers.map((x) => x * 2);
// console.log(list);

const list = numbers.map((x) => x * 2);
console.log(list);

//Note: curle bracket use korle must be manually return korte hobe, otherwise not needed.

const arr = numbers.map((x) => x * x);
console.log(arr);
