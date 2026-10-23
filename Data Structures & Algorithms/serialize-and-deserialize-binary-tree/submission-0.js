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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "N";

        const result = [];

        const queue = new Queue();

        queue.push(root);

        while (!queue.isEmpty()) {
            const node = queue.pop();

            if (!node) {
                result.push("N");
            } else {
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const values = data.split(",");

        if (values[0] === "N") return null;

        const root = new TreeNode(parseInt(values[0]));
        const queue = new Queue();
        queue.push(root);

        let index = 1;

        while (!queue.isEmpty()) {
            const node = queue.pop();

            if (values[index] !== "N") {
                node.left = new TreeNode(parseInt(values[index]));
                queue.push(node.left);
            }
            index++;
            if (values[index] !== "N") {
                node.right = new TreeNode(parseInt(values[index]));
                queue.push(node.right);
            }
            index++;
        }

        return root;
    }
}
