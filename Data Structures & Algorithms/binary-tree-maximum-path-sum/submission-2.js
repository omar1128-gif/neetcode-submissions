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
    maxPathSum(root) {
        let maxPath = -Infinity;

        function checkSum(node) {
            if (!node) return 0;

            const leftSum = Math.max(0, checkSum(node.left));
            const rightSum = Math.max(0, checkSum(node.right));

            maxPath = Math.max(maxPath, node.val + leftSum + rightSum);

            return node.val + Math.max(leftSum, rightSum);
        }

        checkSum(root);

        return maxPath;
    }
}
