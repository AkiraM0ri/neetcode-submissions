/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    // time: O(n)
    // space: O(n)
    hasCycle(head) {
        let hashmap = new Set();
        let root = head;

        while (root !== null) {
            if (hashmap.has(root)) return true;
            hashmap.add(root);
            root = root.next;
        }

        return false;
    }
}
