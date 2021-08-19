/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  const listVals = new Set();
  while (head.next !== null) {
    if (listVals.has(head)) {
      return true;
    } else {
      listVals.add(head);
    }
    head = head.next;
  }
  return false;
};