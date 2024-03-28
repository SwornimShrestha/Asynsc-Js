// console.log("one");
// console.log("two");
// console.log("thress");
// setTimeout(()=>{
//     console.log("hello")

// },2000)
// console.log("four");

// function sum(a,b){
//     console.log(a+b);
// }

// function calculate(a,b,sumcallback){
//     sumcallback(a,b)
// }

// calculate(2,2,sum)

// Nested
// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data=",dataId);
//         if (getNextData) {
//             getNextData()
//         }

//     },2000)
// }

// getData(1, ()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// //callback hell🔥🔥
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

//promises
// const getPromises = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occur");
//   });
// };

// let promise = getPromises();
// promise.then(() => {
//   console.log("Promises fullfilled");
// });
// promise.catch(() => {
//   console.log("Error occur");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("sucess");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

const asyncFunc1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success");
    }, 4000);
  });
};

const asyncFunc2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("success");
    }, 4000);
  });
};

console.log("Fetching Data 1");
asyncFunc1().then((res) => {
  console.log(res);
  console.log("Fetching Data 2");
  asyncFunc2().then((res) => {
    console.log(res);
  });
});
