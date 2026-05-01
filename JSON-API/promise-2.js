// chaining, Promise.all(), Promise.race()

// const step1 = () => new Promise((resolve) => setTimeout(() => resolve("Step - 1"), 1000));
// const step2 = () => new Promise((resolve) => setTimeout(() => resolve("step - 2"), 1000));
// const step3 = () => new Promise((resolve) => setTimeout(() => resolve("step - 3"), 1000));

// step1()
//   .then((s1) => {
//     console.log(s1);
//     return step2();
//   })
//   .then((s2) => {
//     console.log(s2);
//     return step3();
//   })
//   .then((s3) => console.log(s3))
//   .finally(() => console.log("All work done!"));

const task1 = new Promise((resolve) => setTimeout(() => resolve("Task-1"), 1000));
const task2 = new Promise((resolve) => setTimeout(() => resolve("Task-2"), 2000));
const task3 = new Promise((resolve) => setTimeout(() => resolve("Task-3"), 1500));
const task4 = new Promise((resolve) => setTimeout(() => resolve("Task-4"), 2000));

Promise.all([task1, task2, task3, task4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const task5 = new Promise((resolve) => setTimeout(() => resolve("Fast Task"), 1000));
const task6 = new Promise((resolve) => setTimeout(() => resolve("Slow Task"), 3000));

Promise.race([task5, task6])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
