// eslint-disable-next-line no-extend-native
Function.prototype.myApply = function (context, args) {
  context.fn = this;
  let res;
  if (!args) {
    res = context.fn();
  } else {
    res = context.fn(...args);
  }
  return res;
};

// test
const obj = {
  name: 'jack'
};
function test (arg1, arg2, arg3) {
  console.log(this.name);
  console.log(arg1, arg2, arg3);
}
test.myApply(obj, [1, 2, 3]);
