//Class Notes

// const fs=require('fs');

// const { resolve } = require("dns");

// function navReadFile(){
//   return new Promise(function (resolve){
//   fs.readFile('a.txt','utf-8',(err,data)=>{
//     resolve(data);
//     });
//   })
// }

// function onDone(data){
//   console.log(data);
// }

// navReadFile().then(onDone);

// function navReadFile() {
//   return new Promise((resolve, reject) => {
//     console.log("Attempting to read file...");
//     fs.readFile("a.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.error("Error reading file:", err);
//         reject(err);
//       } else {
//         setTimeout(() => console.log("File read successfully"), 5000);
//         resolve(data);
//       }
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }
// let p = navReadFile();
// console.log(p);
// p.then(onDone);

// const p = new Promise(function (res, rej) {
//   setTimeout(function () {
//     res("Async operations ran successfully");
//   }, 2000);
// });

// function onFulfilled(data) {
//   console.log(data);
// }
// function onRejected(data) {
//   console.log(data);
// }
// console.log(p);
// p.then(onFulfilled, onRejected);
// setTimeout(function () {
//   console.log(p);
// }, 2000);

// console.log("Start");

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Async operation complete");
//   }, 2000); // Simulates a 2-second delay
// });

// promise.then((message) => {
//   console.log(message);
// });

// console.log("End");

// function navAsyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Async operation complete");
//     }, 2000); // Simulates a 2-second delay
//   });
// }
// async function main() {
//   let value = await navAsyncFunc();
//   console.log(value);
// }
// main();

// CallBack hell
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 3000);
// }
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

// Promise

// function getData(dataId) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(dataId), 3000);
//   });
// }
// let p = getData(2);
// p.then((data) => console.log(data));

//Promise chaining
// function getData(dataId) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(dataId), 3000);
//   });
// }
// let p = getData(2);
// p.then((data) => {
//   console.log(data);
//   return getData(3);
// }).then((data) => console.log(data));

//Asyc await

// const getData = (dataId) => {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log(dataId);
//       resolve("sucess");
//     }, 3000);
//   });
// };

// const main = async () => {
//   await getData(1);
//   await getData(12);
// };
// main();

//IIFE's

// (async () => {
//   await getData(1);
//   await getData(12);
// })();

// (function getData(dataId) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log(dataId);
//       resolve("sucess");
//     }, 3000);
//   });
// })(12);

// console.log("Hi");

// setTimeout(() => {
//   console.log("First timeout");
// }, 7000);
// setTimeout(() => console.log("second timeout"), 3000);
// console.log("Bye");

// fetch("https://www.google.com").then(function a() {
//   console.log("a");
// });

// Promise.resolve().then(function b() {
//   console.log("b");
// });

// Promise.reject().catch(function c() {
//   console.log("c");
// });

// let n = new Promise(function (resolve) {
//   resolve("Success");
// });
// n.then(function (value) {
//   console.log(value);
// });

// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }
// console.log(n);

// let str = "hello     world    my    name   is       raman";
// let str1 = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     str1 = str1 + str[i];
//     while (str[i] == " ") {
//       i++;
//     }
//   }
//   str1 = str1 + str[i];
// }
// console.log(str1);

// let count = 0;
// let id = setInterval(counter, 1000);
// function counter() {
//   console.log(count++);
//   if (count > 10) clearInterval(id);
// }

// let count = 0;

// function counter() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(count++);
//     }, 1000);
//   });
// }
// counter()
//   .then(function (value) {
//     console.log(value);
//     return counter();
//   })

// function logCounters(n) {
//   if (n <= 0) return Promise.resolve();
//   return counter().then(function () {
//     console.log(n);
//     return logCounters(n - 1);
//   });
// }
// logCounters(10);

// Creating a HTTP server

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//Middlewares
//These are nothing but prechecks in the request and response

// Without the use of middleware we are doing the precheck in the request
const express = require("express");
const app = express();
const port = 3001;

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.id;
  // https://ccd24d48-22c1-450b-b4dd-9062715bc551-00-3sknh0jm49xtt.pike.replit.dev:3001/health-checkup?id=1
  if (username != "naveen" || password != "nav123") {
    res.send("Invalid credentials");
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.send("Invalid kidney id");
    return;
  }
  res.send("Health checkup done");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// let's say we want to add another route
