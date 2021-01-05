// 快速排序
// 快速排序的基本思想是通过一趟排序将要排序的数据分割成独立的两部分，
// 其中一部分的所有数据都比另外一部分的所有数据 都要小，
// 然后再按此方法对这两部分数据分别进行快速排序，
// 整个排序过程可以递归进行，以此达到整个数据变成有序序列。

function partition (array, start, end) {
  // 取第一个值为枢纽值，获取枢纽值的大小
  const pivot = array[start];

  // 当 start 等于 end 指针时结束循环
  while (start < end) {
    // 当 end 指针指向的值大等于枢纽值时，end 指针向前移动
    while (pivot <= array[end] && start < end) {
      end--;
    }
    // 将比枢纽值小的值交换到 start 位置
    array[start] = array[end];
    // 移动 start 值，当 start 指针指向的值小于枢纽值时，start 指针向后移动
    while (pivot > array[start] && start < end) {
      start++;
    }
    // 将比枢纽值大的值交换到 end 位置，进入下一次循环
    array[end] = array[start];
  }
  // 将枢纽值交换到中间点
  array[start] = pivot;
  // 返回中间索引值
  return start;
}

function quickSort (array, start = 0, end = array.length - 1) {
  const length = array.length;
  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
  // 既是输入检查，也是边界检查、递归基
  if (!Array.isArray(array) || length <= 1 || start >= end) {
    return;
  }

  // 将数组划分为两部分，并返回右部分的第一个元素的索引值
  const index = partition(array, start, end);

  // 递归排序左半部分
  quickSort(array, start, index - 1);
  // 递归排序右半部分
  quickSort(array, index + 1, end);
}
// 这一种方法是填空法，首先将第一个位置的数作为枢纽值，
// 然后 end 指针向前移动，当遇到比枢纽值小的值或者 end 值 等于 start 值的时候停止，
// 然后将这个值填入 start 的位置，然后 start 指针向后移动，
// 当遇到比枢纽值大的值或者 start 值等于 end 值的时候停止，
// 然后将这个值填入 end 的位置。反复循环这个过程，
// 直到 start 的值等于 end 的 值为止。将一开始保留的枢纽值填入这个位置，
// 此时枢纽值左边的值都比枢纽值小，枢纽值右边的值都比枢纽值大。
// 然后在递 归左右两边的的序列。

// 当每次换分的结果为含 ⌊n/2⌋和 ⌈n/2⌉−1 个元素时，最好情况发生，
// 此时递归的次数为 logn，
// 然后每次划分的时间复杂 度为 O(n)，所以最优的时间复杂度为 O(nlogn)。
// 一般来说只要每次换分都是常比例的划分，时间复杂度都为 O(nlogn)。

// 当每次换分的结果为 n-1 和 0 个元素时，最坏情况发生。
// 划分操作的时间复杂度为 O(n)，递归的次数为 n-1，
// 所以最坏 的时间复杂度为 O(n²)。所以当排序序列有序的时候，
// 快速排序有可能被转换为冒泡排序。

// 快速排序的空间复杂度取决于递归的深度，
// 所以最好的时候为 O(logn)，最坏的时候为 O(n)。

// 快速排序的平均时间复杂度为 O(nlogn) ，
// 最坏时间复杂度为 O(n²) ，空间复杂度为 O(logn) ，不是稳定排序。

export default quickSort;
