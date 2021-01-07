// 7. 实现 IndexOf 方法？

function indexOfFunc (array, val) {
  if (!Array.isArray(array)) {
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
}

export default indexOfFunc;
