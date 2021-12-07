# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        deepest: int = 0
        def depthFirst(node: Optional[TreeNode], depth: int) -> None:
            if node == None:
                return depth
            leftDepth = depthFirst(node.left, depth + 1)
            rightDepth = depthFirst(node.right, depth + 1)
            return leftDepth if leftDepth > rightDepth else rightDepth
        deepest = depthFirst(root, 0)
        return deepest
            
        