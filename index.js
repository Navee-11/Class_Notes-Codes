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
// const express = require("express");
// const app = express();
// const port = 3001;

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.id;
//   // https://ccd24d48-22c1-450b-b4dd-9062715bc551-00-3sknh0jm49xtt.pike.replit.dev:3001/health-checkup?id=1
//   if (username != "naveen" || password != "nav123") {
//     res.send("Invalid credentials");
//     return;
//   }
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.send("Invalid kidney id");
//     return;
//   }
//   res.send("Health checkup done");
// });

// // app.listen(port, () => {
// //   console.log(`App listening on port ${port}`);
// // });

// // let's say we want to add another route.Input needs to be same then this leads to code repetation

// app.put("/replace-kidney", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.id;
//   // https://ccd24d48-22c1-450b-b4dd-9062715bc551-00-3sknh0jm49xtt.pike.replit.dev:3001/health-checkup?id=1
//   if (username != "naveen" || password != "nav123") {
//     res.send("Invalid credentials");
//     return;
//   }
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.send("Invalid kidney id");
//     return;
//   }
//   res.send("Health checkup done");
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

//**************************************************************************************************************** */
//This leads to unnecessary code repetition and code becomes ugly.
//We can also wrapper these validations into the function the code might get shortened but still repetition is present.
//So if we want to perform bunch of prechecks we move to some other place called middlewares

// const express = require("express");
// const app = express();
// const port = 3001;
// app.get(
//   "/",
//   (req, res) => console.log("Hi from cb1"),
//   (req, res) => console.log("Hi from cb2")
// );
// app.listen(port);

// const express = require("express");
// const app = express();
// const port = 3000;
// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("Hi from cb1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Hi from cb2");
//     next();
//   },
//   (req, res) => res.send("All Validation completed")
// );
// app.listen(port);

//Middleware implementation
// const express = require("express");
// const app = express();
// const port = 3001;

// const userMiddleWare = (req, res, next) => {
//   const username = req.headers.username;
//   const password = req.headers.password;

//   // http://localhost:3001/health-checkup?id=1
//   if (username != "naveen" || password != "nav123") {
//     res.send("Invalid credentials");
//   } else next();
// };

// const kidneyMiddleware = (req, res, next) => {
//   const kidneyId = req.query.id;
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.send("Invalid kidney id");
//   } else next();
// };
// app.get("/health-checkup", userMiddleWare, kidneyMiddleware, (req, res) => {
//   res.send("The kidneys are fine and Healthy");
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

//Popular usecase of middleware is to perform authentication,ratelimiting and count the number requests

// const express = require("express");
// const app = express();
// const port = 3001;
// let countRequests = 0;
// const noofRequests = (req, res, next) => {
//   countRequests++;
//   console.log(countRequests);
//   next(); //This needs to present in all the middleware orelse next middleware or callback functions can't be invoked
// };
// app.get("/", noofRequests, (req, res) => {
//   res.send("Hello World");
// });
// app.post("/", noofRequests, (req, res) => {
//   res.send("Hi there");
// });
// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

// We have come across app.use() which is used to add middleware to the app.i.e., app.use(express.json()); this adds the middleware to all the routes by default

// let's say we have get and post request in our app
// If you mention app.use(noofRequests);
//Why not app.use(noofRequests()) because express.json() will return a function not any value so we use express.JSON() not just express.json
// We can elminate mentioning the middleware in all the request method

// app.use(noofRequests);

// app.get("/", noofRequests, (req, res) => {
//   res.send("Hello World");
// });
// app.post("/", noofRequests, (req, res) => {
//   res.send("Hi there");
// });

//We don't have to explicitly mention the middleware in all the request methods when app.use(middleware) is used

//***************************************************************************************************************************************************** */

// Why do we need input validation what if the user sends invalid body

// const express = require("express");
// const { error } = require("console");
// const app = express();
// const port = 3001;

// app.use(express.json());

// app.post("/health-checkup", (req, res) => {
//We are expecting a request body with the following structure
// { "kidneys" :[1,2,3] }
// Let's say the use sends empty body or are string it is your responsibility to handle the request  we can add multiple checks and early returns
//   const kidneys = req.body.kidneys;
//   const kidneyLength = kidneys.length;

//   res.send("You have " + kidneyLength + " kidneys");
// });
// app.listen(port);

// If invalid request is sent user can see the error

//This errors can be tackled with the help of error handling middlewares also called as global catches

// app.use((err, req, res, next) => {
//   res.status(500).send("An internal error as occured");
// });

//With the help of this we are catching the error and also hiding the error by sending a message

//Better way to do the input validation. Zod is nodejs library which helps in validating the request body

//Zod library

// const express = require("express");
// const zod = require("zod");
// const app = express();
// const port = 3001;
// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post("/health-checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);

//   res.send(response);
// });
// app.listen(port);

// const express = require("express");
// const z = require("zod");
// const app = express();
// const port = 3001;
// // const schema = zod.array(zod.number());

// const schema = z.object({
//   email: z.string(),
//   password: z.string(),
//   country: z.literal("IN").or(z.literal("USA")),
//   kidneys: z.array(z.number()),
// });
// app.use(express.json());

// app.post("/health-checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   if (!response.success)
//     res.status(411).json({ "Invalid request": response.error.details });
//   else res.send(response);
// });
// app.listen(port);

const express = require("express");
const app = express();

// Middleware 1: Runs for all requests
app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); // Pass control to the next middleware
});

// Middleware 2: Runs for all requests
app.use((req, res, next) => {
  console.log("Middleware 2");
  next(); // Pass control to the next middleware
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Middleware 3: Runs only for requests to '/api'
app.use("/api", (req, res, next) => {
  console.log("API Middleware");
  next(); // Pass control to the next middleware or route handler
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
