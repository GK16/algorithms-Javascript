// js 如何实现数组扁平化？

// 方法一：
// 这一种方法通过递归来实现，当元素为数组时递归调用，兼容性好

function flattenArray1 (array) {
  if (!Array.isArray(array)) {
    return;
  }
  let result = [];
  result = array.reduce((prev, item) => {
    // 判断元素是否为数组，如果为数组则递归调用，如果不是则加入结果数组中
    return prev.concat(Array.isArray ? flattenArray1(item) : item);
  });
  return result;
}

// 方法二：
// 这一种方法是利用了 toString 方法，
// 它的一个缺点是改变了元素的类型，只适合于数组中元素都是整数的情况

function flattenArray2 (array) {
  return array.toString.split(',').map(item => {
    return +item;
  });
}

function flattenArray3 (array) {
  if (!Array.isArray(array)) {
    return;
  }

  // 三个点（...）真名叫扩展运算符，是在ES6中新增加的内容，
  // 它可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；
  while (array.some(item => Array.isArray(item))) {
    array = [].concat(...array);
  }
  return array;
}

export { flattenArray1, flattenArray2, flattenArray3 };
