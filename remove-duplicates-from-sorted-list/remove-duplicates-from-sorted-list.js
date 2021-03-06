/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let currentNode = head;
    while (currentNode) {
        while (currentNode.next?.val === currentNode.val) {
            currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
    }
    return head;
};