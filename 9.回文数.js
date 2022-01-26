/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let input = x;
  let rev = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);
    // ~~运算符可去除小数;
    rev = rev * 10 + digit;
  }
  console.log(rev);
  if (input < 0) {
    return false;
  }
  if (rev === input) {
    return true;
  } else {
    return false;
  }
  //   if (x < 0) return false;
  //   if (x == 0) return true;
  //   let length = Math.floor(Math.log10(x)) + 1;
  //   if (length === 1) return true;
  //   let tmp = x;
  //   // 遍历次数为length除以2的商，即(length-length%2)/2。 如12345遍历次数为2，1234567遍历次数为3
  //   for (i = 0; i < (length - (length % 2)) / 2; i++) {
  //     const t = Math.pow(10, length - 2 * i - 1); // 如：tmp为23456时，对应的t为10000
  //     // 这里看不懂的可以打印一下tmp%10和(tmp-tmp%t)/t，分别表示两端的数。 如：23456%10为6，(23456-23456%10000)/10000为2
  //     if (tmp % 10 !== (tmp - (tmp % t)) / t) return false;
  //     tmp = tmp % t; // tmp通过对t取模，去掉它最高位的数。 如23456%10000，得到3456
  //     tmp = (tmp - (tmp % 10)) / 10; // tmp减去它最右边的数，并通过除以10向右移一位。 如(3456-3456%10)/10=345
  //   }
  //   return true;
};
// @lc code=end
