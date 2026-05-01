const task1 = () => new Promise((resolve) => setTimeout(() => resolve("task - 1"), 2000));
const task2 = () => new Promise((resolve) => setTimeout(() => resolve("task - 2"), 1000));

const runTask= async()=>{
    const data = await Promise.all([task1(),task2()]);
    const fastData = await Promise.race([task1(),task2()]);
    console.log(data,fastData);
}

runTask();
