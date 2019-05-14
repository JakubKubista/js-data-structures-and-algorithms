"use strict";

/**
 * Clone a linked list with next and random pointer.
 * Time Complexity: O(n)
 * Source: https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1
 */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    cloneLinkedList() {

    }
}

function testLinkedList() {
    let list = new LinkedList();
    list.cloneLinkedList();
}
testLinkedList();