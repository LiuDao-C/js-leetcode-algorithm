/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = strs[0];
  strs.forEach((item) => {
    let i = 0;
    while (i < res.length && res[i] === item[i]) {
      i++;
    }
    res = res.slice(0, i);
  });
  return res;
};
// @lc code=end
