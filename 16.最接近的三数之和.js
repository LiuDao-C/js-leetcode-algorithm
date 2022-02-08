/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  let res = Infinity;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) {
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      // 记录最接近target的结果值
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum;
      }
      // 移动指针
      if (sum === target) {
        // 结束函数，直接返回结果
        return res;
      } else if (sum < target) {
        L++;
      } else {
        R--;
      }
    }
  }
  return res;
};
// @lc code=end
