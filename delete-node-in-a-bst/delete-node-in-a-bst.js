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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return root;
    if (key === root.val) {
        if (!root.left && !root.right) {
            return null;
        } else if (root.left && root.right) {
            const leftTree = root.left;
            root = root.right;
            let end = root;
            while (end.left) {
                end = end.left;
            }
            end.left = leftTree;
        } else {
            return root.left || root.right;
        }
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }
    return root;
};

const mergeTrees = (treeOne, treeTwo) => {
    
}