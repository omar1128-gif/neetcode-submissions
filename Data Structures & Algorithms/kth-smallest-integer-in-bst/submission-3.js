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
        if (!root) return null;

        const result = [];

        const stack = [[root, false]];

        while (stack.length > 0) {
            const [node, visited] = stack.pop();

            if (!node) continue;

            if (visited) {
                result.push(node.val);
                if (result.length === k) return node.val;
            } else {
                stack.push([node.right, false]);
                stack.push([node, true]);
                stack.push([node.left, false]);
            }
        }

        return null;
    }
}
