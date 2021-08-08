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
var sortList = function(head) {
    const nodes = [];
    const collectNodes = (node) => {
        if (!node) return;
        nodes.push(node);
        collectNodes(node.next);
    }
    collectNodes(head);
    nodes.sort((node1, node2) => node1.val - node2.val);
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i + 1] !== undefined) {
            nodes[i].next = nodes[i + 1];
        } else {
            nodes[i].next = null;
        }
    }
    return nodes[0] || null;
};