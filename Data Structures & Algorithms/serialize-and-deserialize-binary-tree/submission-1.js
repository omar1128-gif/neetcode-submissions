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
        const result = [];
        this.dfsSerialize(root, result);
        return result.join(",");
    }

    dfsSerialize(node, result) {
        if (!node) {
            result.push("N");
            return;
        }

        result.push(node.val);
        this.dfsSerialize(node.left, result);
        this.dfsSerialize(node.right, result);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const values = data.split(",");
        const index = { val: 0 };
        return this.dfsDeserialize(values, index);
    }

    dfsDeserialize(values, index) {
        if (values[index.val] === "N") {
            index.val++;
            return null;
        }

        const node = new TreeNode(parseInt(values[index.val]));
        index.val++;
        node.left = this.dfsDeserialize(values, index);
        node.right = this.dfsDeserialize(values, index);

        return node;
    }
}
