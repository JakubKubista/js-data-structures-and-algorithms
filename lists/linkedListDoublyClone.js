"use strict";

/**
 * Clone a doubly linked list with next and random pointer.
 * Time Complexity: O(n)
 * Source: https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1
 */

class Node {
    constructor(data, next = null, random = null) {
        this.data = data;
        this.next = next;
        this.random = random;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    clone() {
        let originalCurr = this.head;
        let clonedCurr = null;

        // Hash map which contains node to node mapping of
        // original and clone linked list
        let map = new Map(originalCurr, clonedCurr)

        // Traverse the original list and make a copy of that.
        // in the clone linked list.
        while (originalCurr != null) {
            clonedCurr = new Node(originalCurr.data);
            map[originalCurr] = clonedCurr;
            originalCurr = originalCurr.next;
        }

        // Adjusting the original list reference again.
        originalCurr = this.head;

        // Traversal of original list again to adjust the next
        // and random references of clone list using hash map.
        while (originalCurr != null) {
            clonedCurr = map.get(originalCurr);
            clonedCurr.next = map.get(originalCurr.next);
            clonedCurr.random = map.get(originalCurr.random);
            originalCurr = originalCurr.next;
        }

        // Return the head reference of the clone list.
        return new LinkedList(map.get(this.head));
    }
}

function testLinkedList() {
    let listNew = new LinkedList();
    let listCloned = listNew.clone();
    console.log(listNew, listNew)
    console.log(listNew === listCloned)
}
testLinkedList();