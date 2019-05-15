"use strict";

/**
 * Data structure: Binary tree
 * Task: Connect all the adjacent nodes at same level.
 * Time Complexity: Average - O(log(n)) | Worst - O(n)
 * Source: https://www.geeksforgeeks.org/connect-nodes-at-same-level/
 */

class Node {
    constructor(data, left, right, nextRight) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.nextRight = nextRight;
    }
}

class BinaryTree {
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
     * Reset next right before connectRecur.
     * @param {Node} node
     */
    connect(node)
    {
        // Set next right for root.
        node.nextRight = null;

        // Set next right for all nodes expect root.
        this.connectRecur(node);
    }
    /**
     * Set next right of all descendents of binary tree.
     * @param {Node} node
     */
    connectRecur(node) {
        if (this.isEmpty(node)){
            return;
        }

        // Set next right pointer for left of node.
        if (!this.isEmpty(node.left)) {
            node.left.nextRight = node.right;
        }

        // Set next right pointer for right of node.
        // If node is the right most at level,
        // then next right will be null.
        if (!this.isEmpty(node.right)) {
            node.right.nextRight = (node.nextRight != null) ?
            node.nextRight.left : null;
        }

        // Set next right for other nodes in pre order.
        this.connectRecur(node.left);
        this.connectRecur(node.right);
    }
}

function testBT() {
    let root = new Node(10);
    root.left = new Node(8);
    root.left.left = new Node(3);
    root.right = new Node(2);

    let tree = new BinaryTree(root)
    tree.connect(tree.root);
    console.log(tree);
    tree.root.left.nextRight ?
        console.log(true) : console.log(false);
}
testBT();