/* eslint-disable symbol-description */
const PENDING = Symbol();
const REJECTED = Symbol();
const FULLFILLED = Symbol();

const MyPromise = function (fn) {
  this.state = PENDING;
  this.value = '';

  const resolve = (value) => {
    this.state = FULLFILLED;
    this.value = value;
  };

  const reject = (error) => {
    this.state = REJECTED;
    this.value = error;
  };

  this.then = (onFullFill, onReject) => {
    if (this.state === FULLFILLED) {
      onFullFill(this.value);
    } else {
      onReject(this.value);
    };

    try {
      fn(resolve, reject);
    } catch (err) {
      reject(err);
    }
  };
};

// test
const p = new MyPromise((resolve, reject) => {
  resolve('hello');
});
p.then(res => {
  console.log(res);
});
