/* Variable Destructure */
let a = 10,
  b = 20;
console.log(a, b); // 10 20
[b, a] = [a, b]; // swap ~~ destructuring
console.log(a, b); // 20 10

// ------------------------------------------------
/* Array Destructure */
const arr = [10, 20, 30, 40, 50];

// type-1
const [x, y, z] = [arr];
console.log(x, y, z); // x == arr, y=undefined, z=undefined
// type-2
const [p, q, r] = [...arr];
console.log(p, q, r); // p=arr[0], q=arr[1], r=arr[2]
// type-3
const [i, j, ...k] = [...arr];
console.log(i, j, k); // i=arr[0], j=arr[1], k=[arr[2],arr[3] to end]

// type-4
const [aa] = [5, 10, 15, 20, 25, 30];
console.log(aa); // 5

const [u, v, w] = [5, 10, 15, 20, 25, 30];
console.log(u, v, w); // 5 10 15

const [m, n, ...o] = [5, 10, 15, 20, 25, 30];
console.log(m, n, o); // 5 10 [ 15, 20, 25, 30 ]

const [num1,num2]=arr;  // 10, 20
const [n1,n2, ...n3]=arr;  // 10, 20, [30,40,50]
// -----------------------------------------------------------

/* Object Destructure */

const product = { name: "watch", cost: 350, quantity: 5, origin:"national" };

// const { quantity, item } = product; // 5 undefined
const { quantity, item = 10 } = product; // 5 10

// const { name } = product.name; // undefined
const { name } = product;      // watch

// const { cost, ...info } = { product };   // undefined  { product: { name: 'watch', price: 350, quantity: 5 } }
const { cost, ...info } = { ...product }; // watch {price: 350, quantity: 5}

// const { name, price, quantity } = { name: "watch", price: 350, quantity: 5 };
const { brand, price, vat = 13 } = { brand: "samsung", price: 350, quantity: 5 };
const { brand:Name, price:tk, vat:tax = 13 } = { brand: "samsung", price: 350, quantity: 5 };

// const {it}={product.quantity};       // error
