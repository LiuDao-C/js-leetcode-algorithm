/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let tag = "",
    res = "",
    i = 0;
  s = s.trim();
  if (s[0] === "+") {
    s = s.slice(1);
  } else if (s[0] === "-") {
    tag = s[0];
    s = s.slice(1);
  }
  while (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(s[i])) {
    res += s[i];
    i++;
  }
  if (res === "") return 0;
  res = Number(tag + res);
  if (res < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else {
    return res;
  }
  // s = parseInt(s);
  // if(!s) return 0
  // if(s<=-2147483648) return -2147483648;
  // if(s>=2147483647) return 2147483647;

  // return s;
};
// @lc code=end
