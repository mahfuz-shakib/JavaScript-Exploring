const js_object = {
  name: "Rahul",
  Age: 28,
};

// to send/store to server : convert js-object-data  to json-data
const jsonData = JSON.stringify(js_object);
console.log(jsonData);

// to work locally/client: access from server and convert to js-object-data
const jsData=JSON.parse(jsonData);
console.log(jsData);
