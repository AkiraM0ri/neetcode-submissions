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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function dfs(nodeP, nodeQ) {
            if (nodeP == null && nodeQ == null) return true;

            if(nodeP == null && nodeQ !== null) return false
            if(nodeQ == null && nodeP !== null) return false

            if(nodeP.val !== nodeQ.val) return false

            const l = dfs(nodeP.left, nodeQ.left);
            const r = dfs(nodeP.right, nodeQ.right);
            return l && r
        }

        return dfs(p, q);
    }
}
