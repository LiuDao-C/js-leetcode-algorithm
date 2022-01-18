/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2);
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  if (len % 2 === 1) {
    return nums[Math.floor(len / 2)];
  } else {
    return (nums[len / 2 - 1] + nums[len / 2]) / 2;
  }
};
// @lc code=end
