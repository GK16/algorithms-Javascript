// js 如何实现数组去重？

function unique1 (array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return;
  }

  // eslint-disable-next-line prefer-const
  let result = [];
  array.forEach(item => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

function unique2 (array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return;
  }
  return [...new Set(array)];
}

export { unique1, unique2 };
