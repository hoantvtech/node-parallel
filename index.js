// console.log('Start');
 
// setImmediate(() => {
//   console.log('Immediate callback');
// });
// setTimeout(() => console.log("Settimeout after 0ms"), 0);
 
// console.log('End');
const fs = require('fs');

// const baz = () => console.log('baz');
// const foo = () => console.log('foo');
// const zoo = () => console.log('zoo');
// const start = () => {
//   const readStream = fs.createReadStream('./file.txt');
//   console.log('start');
//   // setImmediate(baz); // check pharse
//   setTimeout(() => console.log("Timers phare."), 0);
//   new Promise((resolve, reject) => {
//     resolve('bar');
//   }).then((resolve) => {
//     console.log(resolve);
//     process.nextTick(zoo);
//   }); // Pending callbacks
//   readStream.on('data', chunk => console.log(chunk.toString())); // Poll phare, check i/o events and process any that have been detected.
//   // process.nextTick(foo);
//   setImmediate(() => console.log("check pharse."));
// };
// start();

// start foo bar zoo baz

// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// setImmediate(() => {
//   console.log('immediate');
// });
// Microtask bao gồm: process,nextTick, promise...
// Macrotask bao gom: setTimeout, setImmediate, setInterval...

// function start() {
//   setTimeout(() => console.log("Timer phare."), 0);
//   new Promise((resolve, reject) => {
//     resolve();
//     console.log("1111");
//   });
//   Promise.resolve().then(() => console.log("Promise call."));
//   process.nextTick(() => console.log("nextTick callback."));
//   fs.readFile('file.txt', (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Success');
//     }
//   });
//   console.log("req.on()");
//   // setImmediate(() => console.log("Immediate."));
// }
// start();

// console.log("Hello => number 1");

// setImmediate(() => {
//   console.log("Running before the timeout => number 3");
// });

// process.nextTick(() => {
//   console.log("Running at next tick => number 2");
// });
// new Promise((resolve, reject) => {
//   console.log("Call promise");
//   resolve();
// }).then(() => console.log("Execute promise."));

// setTimeout(() => {
//   console.log("The timeout running last => number 4");
// }, 0);

let bar;
// this has an asynchronous singature, but callbacks synchronously
function someAsyncApi(callback) {
  // callback();
  process.nextTick(callback); // nextTick sẽ đẩy event sang job queue xử lý sau, nên hệ thống sẽ chạy các tác vụ đồng bộ trước
  // Biến bar sẽ có giá trị
}

// the callback is called before `someAsyncApiCall` completes
someAsyncApi(() => {
  console.log("bar", bar);
});
bar = 1;
console.log("11111");


