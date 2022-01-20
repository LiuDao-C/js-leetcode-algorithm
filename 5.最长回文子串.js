/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  if (len <= 1) {
    return s;
  }
  let res = s[0];
  for (let i = 0; i < len; i++) {
    if (s[i] === s[i + 1]) {
      let j = 1;
      while (s[i - j] === s[i + 1 + j] && i - j >= 0 && i + 1 + j < len) {
        j++;
      }
      let res1 = s.substring(i - j + 1, i + j + 1);
      res = res.length > res1.length ? res : res1;
    }
    if (s[i - 1] === s[i + 1]) {
      let j = 1;
      while (
        s[i - j - 1] === s[i + 1 + j] &&
        i - j - 1 >= 0 &&
        i + j + 1 < len
      ) {
        j++;
      }
      let res2 = s.substring(i - j, i + j + 1);
      res = res.length > res2.length ? res : res2;
    }
  }
  return res;
  // let palindrome = (s, l, r) => {
  //   while (l >= 0 && r < s.length && s[l] == s[r]) {
  //     // 向两边展开
  //     l--;
  //     r++;
  //   }
  //   // 返回以s[l]和s[r]为中心的最长回文串
  //   return s.substr(l + 1, r - l - 1);
  // };
  // let res = "";
  // for (let i = 0; i < s.length; i++) {
  //   // 以s[i]为中心的最长回文串
  //   let s1 = palindrome(s, i, i);
  //   // 以s[i]和s[i+1]为中心的最长回文串
  //   let s2 = palindrome(s, i, i + 1);
  //   res = res.length > s1.length ? res : s1;
  //   res = res.length > s2.length ? res : s2;
  // }
  // return res;
};
// @lc code=end
