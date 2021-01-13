/* eslint-disable prefer-const */
function myDeepCopy (obj) {
  // 先判断是对象还是数组
  let res = obj instanceof Array ? [] : {};

  for (let key in obj) {
    // 判断是否是对象上的属性，而不是原型上的属性
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      // obj[key] 是否是对象，如果是对象，递归遍历
      res[key] = typeof obj[key] === 'object' ? myDeepCopy(obj[key]) : obj[key];
    }
  }

  return res;
}

// test
console.log(myDeepCopy({ name: 'jack', birth: { year: '1997', month: '10' } }));
