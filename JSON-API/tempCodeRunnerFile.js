const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1") // promise of response, if fulfilled, that means a successful response given
    .then((res) => res.json()) // promise of data, if fulfilled, that means a data given
    .then((data) => console.log(data));
};