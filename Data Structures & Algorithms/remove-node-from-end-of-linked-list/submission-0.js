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
        if (!head) return;
        let previous = null;
        let current = head;

        while (current !== null) {
            let temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }

        let reversedHead = previous;

        if (n === 1) {
            reversedHead = reversedHead.next;
        } else {
            current = reversedHead;
            previous = null;
            let searchCounter = 1;

            while (current !== null) {
                if (searchCounter === n) {
                    previous.next = current.next;
                }
                previous = current;
                current = current.next;
                searchCounter++;
            }
        }

        previous = null;
        current = reversedHead;

        while (current !== null) {
            let temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }

        return previous;
    }
}
