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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let validPath = false;
    const findSumPath = (node, currentSum) => {
        const nodeSum = node.val + currentSum;
        if (!node.left && !node.right && nodeSum === targetSum) return true;
        if (node.left) {
            var validLeftPath = findSumPath(node.left, nodeSum);
        }
        if (node.right) {
            var validRightPath = findSumPath(node.right, nodeSum);
        }
        return validLeftPath || validRightPath || false;
    };
    validPath = findSumPath(root, 0);
    return validPath;
};