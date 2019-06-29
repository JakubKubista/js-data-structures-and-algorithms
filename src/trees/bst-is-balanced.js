"use strict"

/**
 * Binary Search Tree Exercise - Find 2nd largest node
 * Time Complexity: O(log n)
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/quiz/4413078
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // accepts a value and inserts it into the BST in the correct position
    // the function should return the binary search tree
    insert(value) {
        // only accept numbers....watch out since NaN is typeof number
        if (typeof value === 'number' && !isNaN(value)) {
            // if there is nothing in the tree, start it off with a new node
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            } else {
                // current variable used for traversal, just like linked lists
                var current = this.root;
                // keep looping till we get to the correct spot;
                while (true) {
                    if (value < current.value) {
                        // if there is nothing on the left

                        if (current.left === null) {
                            // make a new node and get out
                            current.left = new Node(value);
                            return this;
                        }

                        // otherwise, keep moving on!
                        else {
                            current = current.left;
                        }
                    } else if (value > current.value) {
                        // if there is nothing on the right
                        if (current.right === null) {
                            // make a new node and get out
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    }

                    // otherwise it must be a duplicate so let's get out of here
                    else return "duplicate!";
                }
            }
        } else return "Please insert a number";
    }

    isBalanced() {
      if (this.root === null) return "Tree is empty";
      function helper(root) {
          if (root === null) return 0;
          let leftHeight = helper(root.left);
          let rightHeight = helper(root.right);
          // not balanced if left or right subtree is not balanced
          if (leftHeight === -1 || rightHeight === -1) return -1;
          // not balanced if the diffrence in heights is greater than 1
          if (Math.abs(leftHeight - rightHeight) > 1) return -1;
          // is balanced, co return height
          return Math.max(leftHeight, rightHeight) + 1;
      }
      return helper(this.root) > -1;
    }
}

function test() {
    let bst = new BinarySearchTree();

    bst.insert(15);
    bst.insert(20);
    bst.insert(10);
    bst.insert(12);

    bst.root.value // 15
    bst.root.left.value // 10
    bst.root.left.right.value // 12
    bst.root.right.value // 20

    console.log(bst.isBalanced()); // ture

    let bst2 = new BinarySearchTree();

    bst2.insert(5);
    bst2.insert(6);
    console.log(bst2.isBalanced()); // ture
    bst2.insert(7);
    console.log(bst2.isBalanced()); // false
}
test();