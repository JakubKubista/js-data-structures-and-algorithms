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
    insert(value){
      // only accept numbers....watch out since NaN is typeof number
      if (typeof value === 'number' && !isNaN(value)) {
          // if there is nothing in the tree, start it off with a new node
          if (this.root === null) {
              this.root = new Node(value);
              return this;
          }
          else {
              // current variable used for traversal, just like linked lists
              var current = this.root;
              // keep looping till we get to the correct spot;
              while (true) {
                  if (value < current.value) {
                      // if there is nothing on the left

                      if (current.left === null ) {
                          // make a new node and get out
                          current.left = new Node(value);
                          return this;
                      }

                      // otherwise, keep moving on!
                      else {
                          current = current.left;
                      }
                  }
                  else if (value > current.value) {
                      // if there is nothing on the right
                      if (current.right === null ) {
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
      }
      else return "Please insert a number";
    }

    findSecondLargest() {
      if (this.root === null) return "Tree is empty";
      let max = Number.MIN_SAFE_INTEGER;
      let second = Number.MIN_SAFE_INTEGER;
      function helper(root) {
          if (root === null) return second;
          if (root.value > max) {
              second = max;
              max = root.value;
          }
          return helper(root.left) &&
              helper(root.right);
      }
      second = helper(this.root);
      return second;
    }
  }

  let bst = new BinarySearchTree();

  bst.insert(15);
  bst.insert(20);
  bst.insert(10);
  bst.insert(12);

  bst.root.value // 15
  bst.root.left.value // 10
  bst.root.left.right.value // 12
  bst.root.right.value // 20

  console.log(bst.findSecondLargest());
