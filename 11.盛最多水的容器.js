/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 双循环超时
  //   let len = height.length,
  //     max = 0;
  //   for (let i = 0; i < len; i++) {
  //     for (let j = i + 1; j < len; j++) {
  //       max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
  //     }
  //   }
  //   return max;
  // 双指针，可降低时间复杂度
  let left = 0,
    right = height.length - 1;
  let max = 0;
  while (left < right) {
    // 找到左右边界中较小的一边
    let minVal = Math.min(height[left], height[right]);
    max = Math.max(max, minVal * (right - left));
    //移动较小的一边，才可能使矩形的面积增大
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
// @lc code=end
