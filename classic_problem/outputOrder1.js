console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(3).then(x => console.log(x));

new Promise((resolve, reject) => {
  resolve(4);
  console.log(5);
}).then(x => console.log(x));

console.log(6);
