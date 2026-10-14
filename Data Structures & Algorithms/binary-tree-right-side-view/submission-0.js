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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];

        const treeLevels = [];
        const queue = [[root, 0]];
        const result = [];

        while (queue.length > 0) {
            const [node, level] = queue.shift();

            if (!Array.isArray(treeLevels[level])) treeLevels[level] = [];

            treeLevels[level].push(node.val);

            if (node.left) queue.push([node.left, level + 1]);
            if (node.right) queue.push([node.right, level + 1]);
        }

        for (let level of treeLevels) result.push(level[level.length - 1]);

        return result;
    }
}
