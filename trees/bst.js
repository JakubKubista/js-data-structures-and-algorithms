"use strict";

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree  {
    constructor(root) {
        this.root = root;
    }

    /**
     * Returns true if the given tree is empty.
     * @param {Node} root
     */
    isEmpty(node) {
        if (node === undefined || node === null) {
            return true;
        }
    }

    /**
     * Returns true if the given tree is a binary search tree.
     * @param {Node} root
     */
    isBST(root) {
        return isBSTUtil(root, MIN = -4294967296, MAX = 4294967296)
    }

    /**
     * Returns true if the given tree is a BST
     * and its values are >= min and <= max.
     * @param {Node} node
     * @param {number} min
     * @param {number} max
     */
    isBSTUtil(node, min, max)
    {
        // An empty tree is BST
        isEmpty(node)

        // Node violates the min/max constraints is not BST
        if (node.data < min || node.data > max) {
            return false;
        }

        // Check the subtrees recursively the min/max constraints
        // Allow only distinct values
        return (isBSTUtil(node.left, min, node.data-1) &&
                isBSTUtil(node.right, node.data+1, max));
    }
}