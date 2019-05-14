"use strict";

/**
 * Data structure: Binary Search Tree
 * Time Complexity: Average - O(log(n)) | Worst - O(n)
 * Source: https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
 */

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = root;
    }

    /**
     * Returns true if the given node is empty.
     * @param {Node} node
     */
    isEmpty(node) {
        return (node === undefined || node === null);
    }

    /**
     * If left node exist then check it has correct data.
     * @param {Node} root
     * @param {Node} left
     */
    leftIsGreater(root, left) {
        return (!this.isEmpty(left) && root.data < left.data);
    }

    /**
     * If right node exist then check it has correct data.
     * @param {Node} root
     * @param {Node} right
     */
    rightIsSmaller(root, right) {
        return (!this.isEmpty(right) && root.data >= right.data);
    }

    /**
     * Returns true if the given tree is a binary search tree.
     * @param {Node} root
     * @param {Node} left
     * @param {Node} right
     */
    isBST(root, left = null, right = null) {
        // An empty tree is BST.
        if (this.isEmpty(root)) {
            return true;
        }

        // Left node's data should be less than root's data.
        if (this.leftIsGreater(root, left)) {
            return false;
        }

        // Right node's data should be greater than root's data.
        if (this.rightIsSmaller(root, right)) {
            return false;
        }

        // Check recursively for every node.
        return this.isBST(root.left, left, root) &&
            this.isBST(root.right, root, right);
    }
}

function testBST() {
    let root = new Node(10);

    root.left = new Node(7);
    root.left.left = new Node(3);
    root.left.right = new Node(8);

    root.right = new Node(15);
    root.right.left = new Node(9); // switch into 12 and it will be BST
    root.right.right = new Node(17);

    let BST = new BinarySearchTree(root)
    console.log(BST.isBST(BST.root));
}
testBST();