/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let map = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let map2 = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let res = "",
    i = map.length - 1;
  while (num > 0) {
    if (num >= map[i]) {
      res += map2[i];
      num = num - map[i];
    } else {
      i--;
    }
  }
  return res;
  // const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  // const roman = [];
  // for (const [value, symbol] of valueSymbols) {
  //     while (num >= value) {
  //         num -= value;
  //         roman.push(symbol);
  //     }
  //     if (num == 0) {
  //         break;
  //     }
  // }
  // return roman.join('');
};
// @lc code=end
