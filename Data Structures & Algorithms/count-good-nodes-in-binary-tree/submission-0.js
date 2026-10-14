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
     * @return {number}
     */
    goodNodes(root) {
        if (!root) return 0;

        let count = 0;

        const traverse = (node, maxSoFar) => {
            if (!node) return;

            if (node.val >= maxSoFar) count++;

            const newMax = Math.max(maxSoFar, node.val);

            if (node.left) traverse(node.left, newMax);
            if (node.right) traverse(node.right, newMax);
        };

        traverse(root, root.val);

        return count;
    }
}
