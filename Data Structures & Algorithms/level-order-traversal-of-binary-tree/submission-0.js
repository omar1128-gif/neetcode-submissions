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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        const data = [];
        const queue = [[root, 0]];

        while (queue.length) {
            const [current, index] = queue.shift();

            if (!Array.isArray(data[index])) data[index] = [];

            data[index].push(current.val);

            if (current.left) queue.push([current.left, index + 1]);
            if (current.right) queue.push([current.right, index + 1]);
        }

        return data;
    }
}
