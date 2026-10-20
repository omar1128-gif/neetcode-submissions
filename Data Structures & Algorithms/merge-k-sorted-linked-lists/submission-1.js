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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        const minHeap = new MinPriorityQueue((a) => a.val);

        for (const list of lists) {
            if (list != null) {
                minHeap.enqueue(list);
            }
        }

        const dummy = new ListNode(0);
        let current = dummy;

        while (!minHeap.isEmpty()) {
            const node = minHeap.dequeue();
            current.next = node;

            current = current.next;

            if (node.next) {
                minHeap.enqueue(node.next);
            }
        }

        return dummy.next;
    }
}
