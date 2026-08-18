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
     * @return {void}
     */
    reorderList(head) {
        let stack = [];
        let root = head;

        while (root !== null) {
            stack.push(root);

            root = root.next;
        }

        let curr = head;
        let middle = Math.floor(stack.length / 2);
        let count = 0;
        while (curr !== null && count < middle) {
            const pop = stack.pop();
            const oldNext = curr.next;

            if (pop === oldNext) {
                curr = pop;
                pop.next = null;
                break;
            }
            curr.next = pop;
            pop.next = oldNext;

            curr = oldNext;

            count++;
        }

        curr.next = null;
    }
}
