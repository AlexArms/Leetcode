/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // traverse one list, add seen prop to nodes
    // traverse second list, first node with seen prop is link
    // if no seen, return null
    while (headA) {
        headA.seen = true;
        headA = headA.next;
    }
    
    while (headB) {
        if (headB.seen) return headB;
        headB = headB.next;
    }
    
    return null;
};