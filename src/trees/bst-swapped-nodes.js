"use strict";

/**
 * Data structure: Binary Search Tree
 * Task: Two nodes of a BST are swapped, correct the BST.
 * Time Complexity: Average - O(log(n)) | Worst - O(n)
 * Source: https://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = root;

        // Aditional pointers.
        this.first = null;
        this.middle = null;
        this.last = null;
        this.prev = null;
    }

    /**
     * Returns true if the given node is empty.
     * @param {Node} node
     */
    isEmpty(node) {
        return (node === undefined || node === null);
    }

    /**
     * If previous node exist then check it has correct data.
     * @param {Node} root
     * @param {Node} left
     */
    nodeIsGreater(root, node) {
        return (!this.isEmpty(node) && root.data < node.data);
    }

    /**
     * If the swapped nodes are adjacent to each other,
     * then first and middle contain the resultant nodes.
     * Else, first and last contain the resultant nodes.
     * @param {Node} root
     */
    findNodes(root) {
        if (!this.isEmpty(root)) {
            this.findNodes(root.left);

            // Check if it's BST.
            if (this.nodeIsGreater(root, this.prev)) {

                // Mark nodes.
                if (this.isEmpty(this.first)) {
                    this.first = this.prev;
                    this.middle = root;
                } else {
                    this.last = root;
                }
            }
            this.prev = root;
            this.findNodes(root.right);
        }
    }

    /**
     * Fix BST by swapping nodes with findNodes function.
     * @param {Node} root
     */
    swapNodes() {
        // Initialize pointers.
        this.findNodes(this.root)

        // Swap nodes, else adjacent nodes.
        if (!this.isEmpty(this.first) && !this.isEmpty(this.last)) {
            let temp = this.first.data;
            this.first.data = this.last.data;
            this.last.data = temp;
        } else if (!this.isEmpty(this.first) && !this.isEmpty(this.middle)) {
            let temp = this.first.data;
            this.first.data = this.middle.data;
            this.middle.data = temp;
        }
    }
}

function test() {
    let root = new Node(10);

    root.left = new Node(5);
    root.left.left = new Node(2);
    root.left.right = new Node(20);

    root.right = new Node(8);

    let BST = new BinarySearchTree(root);
    BST.swapNodes();
    console.log(BST);
}
test();