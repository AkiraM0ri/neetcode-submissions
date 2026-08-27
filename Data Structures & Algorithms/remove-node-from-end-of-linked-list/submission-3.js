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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let root = head;
        let reversedHead = null;

        while (root) {
            const nxt = root.next;

            root.next = reversedHead;
            reversedHead = root;
            root = nxt;
        }

        let count = 1;
        let curr = reversedHead;
        while (n - 1) {
            if (count >= n - 1) {
                curr.next = curr?.next?.next || null;
                break;
            }

            curr = curr.next;
            count++;
        }

        if(!(n - 1)) reversedHead = reversedHead.next

        let newPrev = null;
        while (reversedHead) {
            const nxt = reversedHead.next;

            reversedHead.next = newPrev;
            newPrev = reversedHead;
            reversedHead = nxt;
        }

        return newPrev;
    }
}
