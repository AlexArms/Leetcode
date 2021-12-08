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
 * @return {number}
 */
var findTilt = function(root) {
    let tiltSum = 0;
    
    const findNodeTilts = (node) => {
        if (!node) return 0;
        let leftSum = findNodeTilts(node.left); // 3
        let rightSum = findNodeTilts(node.right); // 5
        // if (node.left && node.right) {
            tiltSum += Math.abs(leftSum - rightSum);
        // }
        return leftSum + rightSum + node.val;
    };
    
    findNodeTilts(root);
    
    return tiltSum;
};