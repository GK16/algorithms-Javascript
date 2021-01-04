// 归并排序
// 归并排序是利用归并的思想实现的排序方法，该算法采用经典的分治策略。
// 递归的将数组两两分开直到只包含一个元素，然后将数组排序合并，最终合并为排序好的数组。

function mergeSort (array) {
  const length = array.length;
  if (!Array.isArray(array) || length === 0) {
    return;
  }
  if (length === 1) {
    return array;
  }

  const mid = parseInt(length >> 1);
  const left = array.slice(0, mid);
  const right = array.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right));
};

function merge (leftArray, rightArray) {

}

export default mergeSort;
