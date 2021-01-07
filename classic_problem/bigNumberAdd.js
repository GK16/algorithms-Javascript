// js 实现一个函数，完成超过范围的两个大整数相加功能
// 主要思路是通过将数字转换为字符串，然后每个字符串在按位相加。

function bigNumberAdd (number1, number2) {
  let result = ''; // 保存最后结果
  let carry = 0; // 保留进位结果

  // 将字符串转换为数组
  // 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
  number1 = number1.split('');
  number2 = number2.split('');

  // 当数组的长度都变为0，并且最终不再进位时，结束循环
  while (number1.length || number2.length || carry) {
    // 每次将最后的数字进行相加，使用~~的好处是，即使返回值为 undefined 也能转换为 0
    carry += ~~number1.pop() + ~~number2.pop();

    // 取加法结果的个位加入最终结果
    result = carry % 10 + result;

    // 判断是否需要进位，true 和 false 的值在加法中会被转换为 1 和 0
    carry = carry > 9;
  }

  return result;
};

export default bigNumberAdd;
