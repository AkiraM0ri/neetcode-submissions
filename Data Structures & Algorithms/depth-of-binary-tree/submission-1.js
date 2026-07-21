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
        if (root == null) return 0;

        function DFS(node) {
            if (node == null) return 0;
            const left = DFS(node.left);
            const right = DFS(node.right);

            return Math.max(left, right) + 1;
        }
        return DFS(root);
    }
}
