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
        const q1 = new Queue();
        const q2 = new Queue();

        q1.enqueue(p);
        q2.enqueue(q);

        while (!q1.isEmpty() && !q2.isEmpty()) {
            const node1 = q1.dequeue();
            const node2 = q2.dequeue();

            if (!node1 && !node2) continue;

            if (!node1 || !node2 || node1.val !== node2.val) return false;

            q1.enqueue(node1.left);
            q1.enqueue(node1.right);

            q2.enqueue(node2.left);
            q2.enqueue(node2.right);
        }

        return q1.isEmpty() && q2.isEmpty();
    }
}