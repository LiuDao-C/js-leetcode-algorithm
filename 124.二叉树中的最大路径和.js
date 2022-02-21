/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = -Infinity;
    traverse(root);
    function traverse(root) {
        if(!root) {
            return 0;
        }
        // 前序遍历
        let left = Math.max(0, traverse(root.left));
        // 中序遍历
        let right = Math.max(0, traverse(root.right));
        // 后序遍历
        // 更新最大值
        res = Math.max(res, left + right + root.val);
        // 返回当前子树的最大路径和
        return Math.max(left, right) + root.val;
    }
    return res;
};
// @lc code=end

