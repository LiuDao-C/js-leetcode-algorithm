/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let i = 0,
    j = 0;
  let memo = new Set();
  let dp = function (s, i, p, j) {
    let m = s.length,
      n = p.length;
    // base case
    // 匹配串已经结束，看看字符串是否也已结束
    if (j === n) {
      return i === m;
    }
    // 字符串已经结束，如果匹配串不是剩余a*之类的格式，则不匹配
    if (i === m) {
      if ((n - j) % 2 === 1) {
        return false;
      }
      for (; j + 1 < n; j += 2) {
        if (p[j + 1] !== "*") {
          return false;
        }
      }
      return true;
    }

    // 记录状态（i， j），消除重叠子问题
    let key = i + "," + j;
    if (memo.has(key)) return memo[key];
    let res = false;
    if (s[i] === p[j] || p[j] === ".") {
      if (j < n - 1 && p[j + 1] === "*") {
        // 匹配0次或匹配多次
        res = dp(s, i, p, j + 2) || dp(s, i + 1, p, j);
      } else {
        // '.'字符正常匹配，各往后移一位
        res = dp(s, i + 1, p, j + 1);
      }
    } else {
      // 此分支是不等于，所以只能匹配0次
      if (j < n - 1 && p[j + 1] === "*") {
        res = dp(s, i, p, j + 2);
      } else {
        // 不是*，说明结果不匹配，直接返回
        res = false;
      }
    }
    // 将当前结果记入备忘录
    memo[key] = res;
    return res;
  };
  return dp(s, 0, p, 0);
  //   if (s == null || p == null) return false;

  //   const sLen = s.length,
  //     pLen = p.length;

  //   // dp 是二维数组
  //   const dp = new Array(sLen + 1);
  //   for (let i = 0; i < dp.length; i++) {
  //     dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
  //   }
  //   // base case
  //   dp[0][0] = true;
  //   for (let j = 1; j < pLen + 1; j++) {
  //     if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
  //   }
  //   // 迭代，动态规划
  //   for (let i = 1; i < sLen + 1; i++) {
  //     for (let j = 1; j < pLen + 1; j++) {
  //       if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
  //         dp[i][j] = dp[i - 1][j - 1];
  //       } else if (p[j - 1] == "*") {
  //         if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
  //           dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
  //         } else {
  //           dp[i][j] = dp[i][j - 2];
  //         }
  //       }
  //     }
  //   }
  //   return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
};
// @lc code=end
