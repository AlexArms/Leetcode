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
var swapPairs = function(head) {
  const nodes = [];
  
  const collectNodes = (node) => {
    if (!node) return;
    nodes.push(node);
    collectNodes(node.next);
  };
  
  collectNodes(head);
  console.log(nodes);
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (i % 2 === 0) {
      if (nodes[i + 3] !== undefined) {
        node.next = nodes[i + 3];
      } else if (nodes[i + 2] !== undefined) {
        node.next = nodes[i + 2];
      } else {
        node.next = null;
      }
    } else {
      node.next = nodes[i - 1];
    }
  }

  return nodes[1] ? nodes[1] : nodes[0] ? nodes[0] : null;
};