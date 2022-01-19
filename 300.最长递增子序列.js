/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 动态规划
    let len = nums.length;
    let dp = new Array(len).fill(1);
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    let res = 0;
    for (let k = 0; k < len; k++) {
        res = Math.max(res, dp[k]);
    }
    return res;
};
// @lc code=end

