// 选择排序
// 选择排序的基本思想为每一趟从待排序的数据元素中
// 选择最小（或最大）的一个元素作为首元素，直到所有元素排完为止。

// 在算法实现时，每一趟确定最小元素的时候会通过
// 不断地比较交换来使得首位置为当前最小，交换是个比较耗时的操作。
// 其实 我们很容易发现，在还未完全确定当前最小元素之前，这些交换都是无意义的。

// 我们可以通过设置一个变量 min，每一次比较仅存储较小元素的数组下标，
// 当轮循环结束之后，那这个变量存储的就是当前最小元素的下标，此时再执行交换操作即可。

function selectSort (array) {
  const length = array.length;
  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
  if (!Array.isArray(array) || length <= 1) {
    return;
  }
  for (let i = 0; i < length - 1; i++) {
    // 设置当前循环最小元素索引
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      // 如果当前元素比最小元素索引，则更新最小元素索引
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      // 交换最小元素到当前位置
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

// 选择排序不管初始序列是否有序，时间复杂度都为 O(n²)。

// 选择排序的平均时间复杂度为 O(n²) ，最坏时间复杂度为 O(n²) ，
// 空间复杂度为 O(1) ，不是稳定排序。

export default selectSort;
