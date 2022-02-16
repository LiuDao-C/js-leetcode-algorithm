/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  //   var mergeTwoLists = function (list1, list2) {
  //     let list = new ListNode(-1);
  //     let curr = list;
  //     while (list1 !== null && list2 !== null) {
  //       if (list1.val <= list2.val) {
  //         curr.next = list1;
  //         list1 = list1.next;
  //       } else {
  //         curr.next = list2;
  //         list2 = list2.next;
  //       }
  //       curr = curr.next;
  //     }
  //     curr.next = list1 === null ? list2 : list1;
  //     return list.next;
  //   };
  //   let list = lists[0] || null;
  //   for (let i = 1; i < lists.length; i++) {
  //     list = mergeTwoLists(list, lists[i]);
  //   }
  //   return list;
  const list = [];
  for (let i = 0; i < lists.length; i++) {
    let node = lists[i];
    while (node) {
      list.push(node.val);
      node = node.next;
    }
  }
  list.sort((a, b) => a - b);
  const res = new ListNode();
  let now = res;
  // console.log(list)
  for (let i = 0; i < list.length; i++) {
    now.next = new ListNode(list[i]);
    now = now.next;
  }
  return res.next;
};
// @lc code=end
