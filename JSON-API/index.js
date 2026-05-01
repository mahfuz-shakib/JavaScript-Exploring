/*
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(promise); // here promise is a "Promise"/commitment on fetching data (so fetch returns a promise)
// console.log(typeof promise);  // object
promise
  .then((res) => {
    return res.json();
    // here res is a response (as PromiseResult) of the promise. It is an object data, so have to convert in json, which also return a promise.
    // console.log(res);  // response
    // console.log(typeof res); // object
    // console.log(res.json()); // promise
    // console.log(typeof res.json()); // object
  })
  .then((data) => console.log(data)); 
  // here data is an object (as PromiseResult) of the promise: res.json()

*/

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1") // promise of response, if fulfilled, that means a successful response given
    .then((res) => res.json()) // promise of data, if fulfilled, that means a data given
    .then((data) => console.log(data));
};