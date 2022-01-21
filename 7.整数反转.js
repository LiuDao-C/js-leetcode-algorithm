/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let flag = false;
  if (x < 0) {
    flag = true;
    x = Math.abs(x);
  }
  x = String(x).split("").reverse();
  while (x[0] === 0) {
    x.unshift();
  }
  x = x.join("");
  if (flag) {
    x = "-" + x;
  }
  if (x >= Math.pow(2, 31) || x < Math.pow(-2, 31)) return 0;
  return x;
  // var reverse = function (x) {
  //   let rev = 0;
  //   while (x !== 0) {
  //     const digit = x % 10;
  //     x = ~~(x / 10);   ~~运算符可去除小数
  //     rev = rev * 10 + digit;
  //     if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
  //       return 0;
  //     }
  //   }
  //   return rev;
  // };
};
// @lc code=end
