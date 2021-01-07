/* eslint-disable prefer-const */
// 12. 如何查找一篇英文文章中出现频率最高的单词？

function findMostWord (artical) {
  if (!artical) {
    return;
  }
  artical = artical.trim().toLowerCase();

  let wordsList = artical.match(/[a-z]+/g);
  let maxNum = 0;
  let maxWord = '';
  let visited = [];

  const article = ' ' + wordsList.join('  ') + ' ';

  // 遍历判断单词出现次数
  wordsList.forEach(function (item) {
    if (visited.indexOf(item) < 0) {
      const word = new RegExp(' ' + item + ' ', 'g');
      const num = article.match(word).length;

      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });

  return maxWord + '  ' + maxNum;
}

export default findMostWord;
