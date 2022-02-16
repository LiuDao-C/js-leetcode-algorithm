/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverse = function (a, b) {
  let pre = null,
    cur = a,
    nxt = a;
  while (cur !== b) {
    // nxt记录下一个结点
    nxt = cur.next;
    // 调转指向方向；
    cur.next = pre;
    // pre 和 cur 继续往后走
    pre = cur;
    cur = nxt;
  }
  // 返回的结点是翻转后的头结点
  return pre;
};
var reverseKGroup = function (head, k) {
  if (head === null) return head;
  let a = head,
    b = head;
  for (let i = 0; i < k; i++) {
    if (b === null) return head;
    b = b.next;
  }
  let newHead = reverse(a, b);
  // 翻转后，a成了最后一个结点，所以它的下一个结点就是下一个递归的结果
  a.next = reverseKGroup(b, k);
  return newHead;
};
// @lc code=end
