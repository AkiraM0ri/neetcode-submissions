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
     * @return {TreeNode}
     */
    // time: O(n) | space: O(n)
    invertTree(root) {
        function traversal(node) {
            if (node == null) return null;

            const temp = node.left
            node.left = node.right
            node.right = temp

            traversal(node.left);
            traversal(node.right);

            return node
        }

        return traversal(root);
    }
}
