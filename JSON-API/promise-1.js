// const promise = new Promise((resolve, reject)=>{
//     const success = true;
//     if(success)
//         resolve("Hurrah! promise fulfilled")
//     else reject("Alas! promise failed")
// });

// promise
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// ---------------------------------------------------------

// const promise = new Promise(resolve=>{
//     setTimeout(()=>resolve("Food is ready"),2000);
// })
const promise = new Promise((reject) => setTimeout(() => reject("Food stock out"), 2000));
promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Thank you ,you will come again"));
