const postData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts#";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
};

const displayPost = (data) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerText = "";
  data.forEach((item) => {
    const post = document.createElement("div");
    post.innerHTML = `
        <div class="bg-lime-50 h-80 sm:h-96 lg:h-96 p-4 rounded-lg shadow-lg border-b-4 border-r-4 border-r-gray-400 border-b-gray-300">
        <div class="flex justify-between items-center">
          <h1 class="bg-lime-300 p-2 rounded-lg w-24 text-center font-semibold">userId: <span>${item.userId}</span></h1>
          <h1 class="bg-lime-300 p-2 rounded-lg w-24 text-center font-semibold">id: <span>${item.id}</span></h1>
        </div>
        <h1 class="text-lg font-bold my-3">${item.title}</h1>
        <p class="text-gray-800 text-justify">${item.body}</p>
      </div>
        `;
    postContainer.appendChild(post);
  });
};
