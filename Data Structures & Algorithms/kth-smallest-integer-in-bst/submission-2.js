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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let data = [];

        const traverse = (node) => {
            if (!node) return;

            if (node.left) traverse(node.left);
            
            if (data.length >= k) return;
            data.push(node.val);
            if (data.length >= k) return;

            if (node.right) traverse(node.right);
        };

        traverse(root);

        return data[k - 1];
    }
}
