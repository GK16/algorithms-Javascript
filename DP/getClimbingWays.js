// 爬楼梯问题
// 有一座高度是10级台阶的楼梯，从下往上走，每跨一步只能向上1级或者2级台阶。
// 要求用程序来求出一共有多少种走法？

// 方法一：递归法
// 由分析可知，假设我们只差最后一步就能走上第10级阶梯，
// 这个时候一共有两种情况，因为每一步只允许走1级或2级阶梯，
// 因此分别为从8级阶梯和从9九级阶梯走上去的情况。
// 因此从0到10级阶梯的走法数量就等于从0到9级阶梯的走法数量加上
// 从0到8级阶梯的走法数量。
// 依次类推，我们可以得到一个递归关系，
// 递归结束的标志为从0到1级阶梯的走法数量和从0到2级阶梯的走法数量。

function getClimbingWays1 (n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  return getClimbingWays1(n - 1) + getClimbingWays1(n - 2);
}
// 算法分析：
// 使用这种方法时整个的递归过程是一个二叉树的结构，
// 因此该方法的时间复杂度可以近似的看为 O(2^n)，
// 空间复杂度为递归的深度 O(logn)。

// ——————————————————————————————————————————————————————————
// 方法二：备忘录法
// 分析递归的方法我们可以发现，其实有很多的计算过程其实是重复的，
// 因此我们可以使用一个数组，将已经计算出的值给保存下来，
// 每次计算时，先判断计算结果是否已经存在，如果已经存在就直接使用。

let map = new Map(); // 这行要放在函数外

function getClimbingWays2 (n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  if (map.has(n)) {
    return map.get(n);
  } else {
    const res = getClimbingWays2(n - 1) + getClimbingWays2(n - 2);
    map.set(n, res);
    return res;
  }
}
// 算法分析：
// 通过观察，我们可以发现每一个值其实都等于它的前面两个值的和，
// 因此我们可以使用自底向上的方式来实现。

// ——————————————————————————————————————————————————————————
// 方法三：迭代法
// 通过观察，我们可以发现每一个值其实都等于它的前面两个值的和，
// 因此我们可以使用自底向上的方式来实现。

function getClimbingWays3 (n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let lastSum = 1;
  let currentSum = 2;
  for (let index = 2; index < n; index++) {
    const res = lastSum + currentSum;
    lastSum = currentSum;
    currentSum = res;
  }
  return currentSum;
}
// 算法分析：
// 通过这种方式我们可以将算法的时间复杂度降低为 O(n)，
// 并且将算法的空间复杂度降低为 O(1)。

// ——————————————————————————————————————————————————————————
export { getClimbingWays1, getClimbingWays2, getClimbingWays3 };
