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
var removeNthFromEnd = function(head, n) {
    const nodes = [];
    if (!head) return null;
    const collectNodes = (node) => {
        nodes.push(node);
        if (node.next) collectNodes(node.next);
    }
    collectNodes(head);
    if (nodes[nodes.length - (n + 1)]) {
        nodes[nodes.length - (n + 1)].next = nodes[nodes.length - (n - 1)] || null;
    }
    nodes.splice(nodes.length - n, 1)
    return nodes[0] || null;
};