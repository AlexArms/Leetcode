# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        nodeVals = []
        def collectVals(node):
            if node == None:
                return;
            if node.left != None:
                collectVals(node.left)
            if node.right != None:
                collectVals(node.right)
            nodeVals.append(node.val)
        
        collectVals(root)
        
        return nodeVals