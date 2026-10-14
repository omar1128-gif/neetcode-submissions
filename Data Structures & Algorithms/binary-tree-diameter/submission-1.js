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
    diameterOfBinaryTree(root) {
        if (!root) return 0;

        let maxDiameter = 0;

        const stack = [[root, false]];

        const heights = new Map();
        heights.set(null, 0);

        while (stack.length > 0) {
            const [node, visited] = stack.pop();

            if (!node) continue;

            if (visited) {
                const leftHeight = heights.get(node.left);
                const rightHeight = heights.get(node.right);

                maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
                heights.set(node, 1 + Math.max(leftHeight, rightHeight));
            } else {
                stack.push([node, true]);
                if (node.right) stack.push([node.right, false]);
                if (node.left) stack.push([node.left, false]);
            }
        }

        return maxDiameter;
    }
}
