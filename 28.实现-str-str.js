/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 总体思路：
  // 遍历字符串，找到与目标字符串最后一位字符相等的下标
  // 往前推移目标字符串长度，判断是否相等
  let index = 0,
    len = haystack.length,
    targetLength = needle.length;
  if (haystack === needle || needle === "") return 0;
  if (len < targetLength) return -1;
  for (let i = 0; i < len; i++) {
    let str = "";
    if (haystack[i] === needle[targetLength - 1]) {
      let start = i;
      for (let j = targetLength - 1; j >= 0; j--) {
        str = haystack[start--] + str;
      }
      if (str === needle) {
        return i - targetLength + 1;
      }
    }
  }
  return -1;
  // 暴力匹配
  // 从前往后遍历，判断字符串每位是否相等，是则返回下标
  // const n = haystack.length,
  //   m = needle.length;
  // for (let i = 0; i + m <= n; i++) {
  //   let flag = true;
  //   for (let j = 0; j < m; j++) {
  //     if (haystack[i + j] != needle[j]) {
  //       flag = false;
  //       break;
  //     }
  //   }
  //   if (flag) {
  //     return i;
  //   }
  // }
  // return -1;
  // 也可以用slice方法减少一层for
};
// @lc code=end
