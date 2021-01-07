// 5. 如何求两个数的最大公约数？
// 基本思想是采用辗转相除的方法，用大的数去除以小的那个数，
// 然后再用小的数去除以的得到的余数，一直这样递归下去，
// 直到余数为0时，最后的被除数就是两个数的最大公约数。

function getMaxCommonDivisor (number1, number2) {
  if (number1 === 0) {
    return number2;
  }
  return getMaxCommonDivisor(number2, number1 % number2);
}

// 6. 如何求两个数的最小公倍数？
// 基本思想是采用将两个数相乘，然后除以它们的最大公约数

function getMinCommonMuliple (number1, number2) {
  return number1 * number2 / getMaxCommonDivisor(number1, number2);
}

export default { getMaxCommonDivisor, getMinCommonMuliple };
