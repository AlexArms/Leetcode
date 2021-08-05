/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return null;
    let minDepth = Infinity;
    const findDepth = (node, depth) => {
        if (!node.left && !node.right) {
            if (depth < minDepth) minDepth = depth;
        }
        if (depth + 1 < minDepth) {
            if (node.left) findDepth(node.left, depth + 1);
            if (node.right) findDepth(node.right, depth + 1);
        }
    }
    findDepth(root, 1);
    return minDepth;
};