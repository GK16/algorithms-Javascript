// 插入排序
// 直接插入排序基本思想是每一步将一个待排序的记录，
// 插入到前面已经排好序的有序序列中去，直到插完所有元素为止。

// 插入排序核心--扑克牌思想：
// 就想着自己在打扑克牌，接起来一张，放哪里无所谓，
// 再接起来一张，比第一张小，放左边，
// 继续接，可能是中间数，就插在中间....依次

function insertSort (array) {
  const length = array.length;
  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
  if (!Array.isArray(array) || length <= 1) {
    return;
  }

  // 循环从 1 开始，0 位置为默认的已排序的序列
  for (let i = 1; i < length; i++) {
    let j = i;
    const currentValue = array[i];// 保存当前需要排序的元素

    while (j - 1 >= 0 && array[j - 1] > currentValue) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = currentValue;
  }

  return array;
}

// 当排序序列为已排序序列时，为最好的时间复杂度 O(n)。

// 插入排序的平均时间复杂度为 O(n²) ，最坏时间复杂度为 O(n²) ，
// 空间复杂度为 O(1) ，是稳定排序。

export default insertSort;
