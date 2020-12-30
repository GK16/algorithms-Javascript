// 冒泡排序的基本思想是，对相邻的元素进行两两比较，顺序相反则进行交换，
// 这样，每一趟会将最小或最大的元素“浮”到顶端， 最终达到完全有序。
function bubbleSort (arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return; // 输入检查

  let lastIndex = arr.length - 1;
  while (lastIndex > 0) { // 当最后一个交换的元素为第一个时，说明后面全部排序完毕
    let flag = true;
    const k = lastIndex;

    for (let j = 0; j < k; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        lastIndex = j; // 设置最后一次交换元素的位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (flag) break;
  }
}

export default bubbleSort;
