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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let currDum = dummy;

        while (list1 !== null && list2 !== null) {
            const minVal = Math.min(list1.val, list2.val);
            currDum.next = new ListNode(minVal);
            currDum = currDum.next;

            if (list1.val >= list2.val) {
                list2 = list2.next;
            } else if (list1.val < list2.val) {
                list1 = list1.next;
            }
        }

        if(list1 !== null) {
            currDum.next = list1
            currDum = currDum.next
        }
        if(list2 !== null) {
            currDum.next = list2
            currDum = currDum.next
        }

        return dummy.next;
    }
}
