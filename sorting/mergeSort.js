// 归并排序
// 归并排序是利用归并的思想实现的排序方法，该算法采用经典的分治策略。
// 递归的将数组两两分开直到只包含一个元素，然后将数组排序合并，最终合并为排序好的数组。

function mergeSort (array) {
  const length = array.length;
  // 如果不是数组或者数组长度小于等于0，直接返回，不需要排序
  if (!Array.isArray(array) || length === 0) {
    return;
  }

  // 递归基
  if (length === 1) {
    return array;
  }

  const mid = parseInt(length >> 1); // 找到中间索引值
  const left = array.slice(0, mid); // 截取左半部分
  const right = array.slice(mid, length); // 截取右半部分

  // 递归分解后，进行排序合并
  return merge(mergeSort(left), mergeSort(right));
};

function merge (leftArray, rightArray) {
  // eslint-disable-next-line prefer-const
  let resArray = [];
  const leftLength = leftArray.length;
  const rightLength = rightArray.length;
  let leftPointer = 0;
  let rightPointer = 0;

  // 左右两个数组的元素依次比较，将较小的元素加入结果数组中，直到其中一个数组的元素全部加入完则停止
  while (leftPointer < leftLength && rightPointer < rightLength) {
    if (leftArray[leftPointer] < rightArray[rightPointer]) {
      resArray.push(leftArray[leftPointer]);
      leftPointer++;
    } else {
      resArray.push(resArray(rightPointer));
      rightPointer++;
    }
  }

  // 如果是左边数组还有剩余，则把剩余的元素全部加入到结果数组中。
  while (leftPointer < leftLength) {
    resArray.push(leftArray[leftPointer]);
    leftPointer++;
  }

  // 如果是右边数组还有剩余，则把剩余的元素全部加入到结果数组中。
  while (rightPointer < rightLength) {
    resArray.push(rightArray[rightPointer]);
    rightPointer++;
  }

  return resArray;
};

// 归并排序将整个排序序列看成一个二叉树进行分解，首先将树分解到每一个子节点，
// 树的每一层都是一个归并排序的过程，每一层归并的时间复杂度为 O(n)，
// 因为整个树的高度为lgn，所以归并排序的时间复杂度不管在什么情况下都为O(nlogn)。

// 归并排序的空间复杂度取决于递归的深度和用于归并时的临时数组，
// 所以递归的深度为 logn，临时数组的大小为 n，所以归 并排序的空间复杂度为 O(n)。

// 归并排序的平均时间复杂度为 O(nlogn) ，最坏时间复杂度为 O(nlogn) ，
// 空间复杂度为 O(n) ，是稳定排序。

export default mergeSort;
