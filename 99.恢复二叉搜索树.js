/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

const { json } = require("express/lib/response");

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    // 分别记录两个被交换的节点
  let first, second;
  // 判断中序遍历的有序性
  let prev = new TreeNode(Number.MIN_SAFE_INTEGER);
  const inOrderTraverse = (root) => {
    if (root == null) return;
    inOrderTraverse(root.left);
    // 中序遍历代码位置，找出那两个节点
    if (root.val < prev.val) {
      // root 不符合有序性，第一个错位节点是 prev，第二个错位节点是 root
      if (first == null) first = prev;
      second = root;
    }
    prev = root;
    inOrderTraverse(root.right);
  };
  inOrderTraverse(root);
  // 交换两个元素的值
  [first.val, second.val] = [second.val, first.val];
};
// @lc code=end

