/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 思路：本质上也是一种前序遍历，先处理根结点，然后处理左子树，最后处理右子树，递归
    if(!preorder.length)
        return null;
    // 前序遍历的第一个结点就是整个二叉树的根结点
    let root = new TreeNode(preorder[0]);
    // 在中序遍历中找到根结点的下标
    let mid = inorder.findIndex((number) => number === root.val);
    // 下标之前就是左子树，下标之后就是右子树
    // 在前序遍历和中序遍历中找到左子树
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    // 在前序遍历和中序遍历中找到右子树
    root.right = buildTree(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length));
    return root;
};
// @lc code=end

