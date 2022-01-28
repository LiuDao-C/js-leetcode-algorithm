/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const valueSymbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let i = 0,
    res = 0;
  s = s.split("");
  for (let j = 0; j < valueSymbols.length; j++) {
    while (s[i] === valueSymbols[j][0]) {
      res += valueSymbols[j][1];
      i++;
    }
    while (s[i] + s[i + 1] === valueSymbols[j][0]) {
      res += valueSymbols[j][1];
      i += 2;
    }
  }
  return res;
  // const map = {
  //     I : 1,
  //     IV: 4,
  //     V: 5,
  //     IX: 9,
  //     X: 10,
  //     XL: 40,
  //     L: 50,
  //     XC: 90,
  //     C: 100,
  //     CD: 400,
  //     D: 500,
  //     CM: 900,
  //     M: 1000
  // };
  // let ans = 0;
  // for(let i = 0;i < s.length;) {
  //     if(i + 1 < s.length && map[s.substring(i, i+2)]) {
  //         ans += map[s.substring(i, i+2)];
  //         i += 2;
  //     } else {
  //         ans += map[s.substring(i, i+1)];
  //         i ++;
  //     }
  // }
  // return ans;
};
// @lc code=end
