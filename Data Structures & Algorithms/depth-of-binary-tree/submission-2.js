/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        function dfs(node) {
            if(node == null) return 0

            let l = dfs(node.left) 
            let r = dfs(node.right) 

            return Math.max(l, r) + 1
        }

        return dfs(root)
    }
}
