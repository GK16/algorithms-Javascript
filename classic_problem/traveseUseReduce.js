// 10. 使用 reduce 方法实现 forEach、map、filter

function forEachUseReduce (array, handle) {
  array.reduce((prev, item, index) => handle(item, index));
}

function mapUseReduce (array, handle) {
  // eslint-disable-next-line prefer-const
  let res = [];
  // eslint-disable-next-line array-callback-return
  array.reduce((prev, item, index) => {
    const mapItem = handle(item, index);
    res.push(mapItem);
  });

  return res;
}

function filterUseReduce (array, handle) {
  // eslint-disable-next-line prefer-const
  let res = [];
  // eslint-disable-next-line array-callback-return
  array.reduce((prev, item, index) => {
    if (handle(item, index)) {
      res.push(item);
    }
  });

  return res;
}

export { forEachUseReduce, mapUseReduce, filterUseReduce };
