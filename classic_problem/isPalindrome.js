// 8. 判断一个字符串是否为回文字符串？

function isPalindrome (str) {
  const reg = /[\W_]/g;
  const newStr = str.replace(reg, '').toLowerCase();
  const reverseStr = newStr.split('').reverse().join('');

  return str === reverseStr;
}

export default isPalindrome;
