// 'GET' method
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 'POST' method
// fetch(url,{method,headers,body})
// here url is api url
// method is POST
// hearders is content type
// body is json data

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is a sample post",
    userId: 1,
  }),
})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))
