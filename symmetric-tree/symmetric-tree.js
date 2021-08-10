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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return null;
    const leftVals = [];
    const rightVals = [];
    const collectLeftVals = (node) => {
        leftVals.push(node.val);
        if (node.left) {
            collectLeftVals(node.left);
        } else {
            leftVals.push(null);
        }
        if (node.right) {
            collectLeftVals(node.right);
        } else {
            leftVals.push(null);
        }
    }
    const collectRightVals = (node) => {
        rightVals.push(node.val);
        if (node.right) {
            collectRightVals(node.right);
        } else {
            rightVals.push(null);
        }
        if (node.left) {
            collectRightVals(node.left);
        } else {
            rightVals.push(null);
        }
    }
    collectLeftVals(root);
    collectRightVals(root);
    for (let i = 0; i < leftVals.length; i++) {
        if (leftVals[i] !== rightVals[i]) return false;
    }
    return true;
};