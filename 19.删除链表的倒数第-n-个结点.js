/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 异常处理
  if (head === null || n <= 0) return head;
  let curr = head;
  let last = head;
  // last往后移n次
  while (n > 0) {
    last = last.next;
    n--;
  }
  // 如果此时last为空，说明要删除的一定是头结点
  if (!last) {
    head = head.next;
  } else {
    // 当last是最后一个结点时，curr就是倒数第n个结点
    while (last && last.next) {
      curr = curr.next;
      last = last.next;
    }
    let next = curr.next.next;
    curr.next.next = null;
    curr.next = next;
  }
  return head;
};
// @lc code=end
