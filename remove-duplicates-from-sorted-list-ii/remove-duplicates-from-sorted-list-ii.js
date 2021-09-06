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
    if (!head) return null;
    const removeCurrentDupes = function (node) {
        if (node.val === node.next?.val) {
            let repeat = node.val;
            while (node?.val === repeat) {
                node = node.next;
            }
        }
        return node;
    }
    let newHead = removeCurrentDupes(head);
    if (newHead === head) {
        newHead.next = deleteDuplicates(newHead.next);
    } else {
        newHead = deleteDuplicates(newHead);
    }
    return newHead;
}


