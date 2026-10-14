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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.checkHeight(root) !== -1;
    }

    /**
     * @param {Node|null} current
     * @returns {number}
     */
    checkHeight(node) {
        if (!node) return 0;

        const leftHeight = this.checkHeight(node.left);
        if (leftHeight === -1) return -1;

        const rightHeight = this.checkHeight(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }
}
