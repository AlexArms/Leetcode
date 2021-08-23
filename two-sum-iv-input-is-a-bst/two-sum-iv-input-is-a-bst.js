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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const vals = new Set();
  let validPair = false;
  const dfs = (node) => {
    if (!node) return;
    if (vals.has(node.val)) {
      validPair = true;
      return;
    } else {
      vals.add(k - node.val);
      dfs(node.left);
      dfs(node.right);
    }
  }
  dfs(root);
  return validPair;
};
