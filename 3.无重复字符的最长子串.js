/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let res = 0;
  let window = new Set();
  // 右指针遍历整个字符串
  for (right; right < s.length; right++) {
    let val1 = s[right];
    // 滑动窗口中没有这个字符，就将该字符添加到滑动窗口中，添加后更新一下滑动窗口的最大长度
    if (!window.has(val1)) {
      window.add(val1);
      res = Math.max(res, window.size);
    } else {
      // 滑动窗口中有这个字符，则移动左指针并将字符从滑动窗口中删去
      while (window.has(val1)) {
        window.delete(s[left]);
        left++;
      }
      // 到这里，滑动窗口中已经没有该字符了，将右指针对应的字符添加到窗口中
      window.add(val1);
    }
  }
  return res;
};
// @lc code=end
