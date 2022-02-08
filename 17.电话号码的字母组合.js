/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = [],
    len = digits.length;
  if (!len) return res;
  digits = digits.split("");
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let str = [""];
  function combineStr(digits, index) {
    // 递归终止条件
    if (index === len) {
      res = str;
      str = "";
      return;
    }
    let temp = [];
    str.forEach((item) => [
      map[digits[index]].forEach((char) => {
        temp.push(item + char);
      }),
    ]);
    str = temp;
    index++;
    combineStr(digits, index);
  }
  combineStr(digits, 0);
  return res;
  // let res = [];
  // // 如果传入的是空字符串的话
  // if (!digits.length) return res;
  // // 每个数字到字母的映射
  // let mapping = [
  //   "",
  //   "",
  //   "abc",
  //   "def",
  //   "ghi",
  //   "jkl",
  //   "mno",
  //   "pqrs",
  //   "tuv",
  //   "wxyz",
  // ];
  // // 回溯算法主函数
  // const backtrack = (start, sb) => {
  //   if (sb.length == digits.length) {
  //     // 到达回溯树底部
  //     return res.push(sb);
  //   }
  //   for (let i = start; i < digits.length; i++) {
  //     let digit = digits[i].charCodeAt() - "0".charCodeAt();
  //     let arr = mapping[digit].split("");
  //     for (let c of arr) {
  //       // 做选择
  //       sb += c;
  //       backtrack(i + 1, sb);
  //       // 撤消选择
  //       sb = sb.substring(0, sb.length - 1);
  //     }
  //   }
  // };
  // // 从 digits[0] 开始进行回溯
  // backtrack(0, "");
  // return res;
};
// @lc code=end
