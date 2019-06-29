"use strict"

/**
 * Find Height of N-ary Tree
 * Time Complexity: O(n log n)
 * Source: https://www.geeksforgeeks.org/depth-n-ary-tree/
 */

class Node {
    constructor(value) {
        this.value = value;
        this.nodes = null;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    isEmpty(node) {
        return (node === undefined || node === null);
    }

    getHeight() {
        let that = this;
        let max = Number.MIN_SAFE_INTEGER;

        function helper(root, level) {
            if (that.isEmpty(root)) return 0;
            if (that.isEmpty(root.nodes)) return level;
            level++;
            root.nodes.forEach(node => {
                max = Math.max(max, helper(node, level));
            });
            return max;
        }
        return helper(this.root, 0) + 1; // subtree height
    }
}

function test() {
    let root = new Node(6);
    let node1 = new Node(3);
    let node2 = new Node(8);
    let node3 = new Node(10);
    let node11 = new Node(7);
    let node12 = new Node(9);
    let node111 = new Node(10);
    let node22 = new Node(9);

    root.nodes = [node1, node2, node3];
    root.nodes[0].nodes = [node11, node12];
    root.nodes[0].nodes[0].nodes = [node111];
    root.nodes[1].nodes = [node22];

    let t = new Tree(root);
    console.log(t.getHeight()); // 3
}
test();