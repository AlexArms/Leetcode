/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const vals = [];
    
    const nodes = [root];
    let current = nodes.pop();
    while (current) {
        vals.push(current.val);
        if (current.right) {
            nodes.push(current.right);
        }
        if (current.left) {
            nodes.push(current.left);
            current.left = null;
        }
        current = nodes.pop();
    }
    return vals;
};