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
var averageOfLevels = function(root) {
    if (!root) return null;
    const averages = [];
    const levelCounts = {};
    const findLevelSums = (node, level) => {
        if (!node) return;
        averages[level] = averages[level] !== undefined ? averages[level] + node.val : node.val;
        if (level in levelCounts) {
            levelCounts[level]++;
        } else {
            levelCounts[level] = 1;
        }
        findLevelSums(node.left, level + 1);
        findLevelSums(node.right, level + 1);
    };
    findLevelSums(root, 0);
    console.log(averages);
    console.log(levelCounts);
    for (let i = 0; i < averages.length; i++) {
        const sum = averages[i];
        averages[i] = sum / levelCounts[i]; 
    }
    return averages;
};