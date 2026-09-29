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
        let N = 0;
        let current = head;

        while (current !== null) {
            N++;
            current = current.next;
        }

        const removeIndex = N - n;
        if (removeIndex === 0) return head.next;

        current = head;
        for (let i = 0; i < N - 1; i++) {
            if (i + 1 === removeIndex) {
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
        return head;
    }
}
