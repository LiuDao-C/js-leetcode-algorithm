/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length;
  if (len < 1) return true;
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let arr = [],
    i = 0;
  while (s[i]) {
    if (["(", "[", "{"].includes(s[i])) {
      arr.push(s[i]);
    } else {
      if (s[i] !== map[arr[arr.length - 1]]) {
        return false;
      } else {
        arr.pop();
      }
    }
    i++;
  }
  if (arr.length < 1) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
