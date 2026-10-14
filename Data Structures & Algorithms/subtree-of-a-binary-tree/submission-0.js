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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return [];

        const stack = [[root, false]];

        while (stack.length > 0) {
            const [node, visited] = stack.pop();

            if (!node) continue;

            if (visited) {
                if (this.isSameTree(node, subRoot)) return true;
            } else {
                stack.push([node, true]);
                if (node.right) stack.push([node.right, false]);
                if (node.left) stack.push([node.left, false]);
            }
        }

        return false;
    }

    isSameTree(p, q) {
        if (!p && !q) return true;

        if (p && q && p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
        } else false;
    }
}
