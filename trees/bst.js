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
        return false;
    }

    /**
     * If left node exist then check it has correct data.
     * @param {Node} root
     * @param {Node} left
     */
    checkLeft(root, left) {
        if (this.isEmpty(left) && root.data < left.data) {
            return false;
        }
        return true;
    }

    /**
     * If right node exist then check it has correct data.
     * @param {Node} root
     * @param {Node} right
     */
    checkRight(root, right) {
        if (this.isEmpty(right) && root.data >= right.data) {
            return false;
        }
        return true;
    }

    /**
     * Returns true if the given tree is a binary search tree.
     * @param {Node} root
     * @param {Node} left
     * @param {Node} right
     */
    isBST(root, left = null, right = null) {
        // An empty tree is BST.
        isEmpty(node)

        // Left node's data should be less than root's data.
        checkLeft(root, left);

        // Right node's data should be greater than root's data.
        checkRight(root, right);

        // Check recursively for every node.
        return isBST(root.left, left, root) &&
            isBST(root.right, root, right);
    }
}