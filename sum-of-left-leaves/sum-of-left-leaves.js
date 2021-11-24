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
var sumOfLeftLeaves = function(root) {
    
    let sum = 0;
    
    const sumLeftLeaves = (node, side) => {
        if (!node) return null;
        if (!node.left && !node.right) {
            console.log('in left leaf...', node, side);
            if (side === 'l') {
                console.log('incrementing...');
                sum += node.val;
                return;
            }
        }
        if (node.left) sumLeftLeaves(node.left, 'l');
        if (node.right) sumLeftLeaves(node.right, 'r');
        
    }
    
    sumLeftLeaves(root, 'c');
    
    return sum;
};