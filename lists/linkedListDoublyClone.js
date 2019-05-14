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
    constructor(head) {
        this.head = head;
    }

    // Push at the head.
    push(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    clone() {
        let originalCurr = this.head;
        let clonedCurr = null;

        // Hash map which contains node to node mapping of
        // original and clone linked list
        let map = new Map();

        // Traverse the original list and make a copy of that.
        // in the clone linked list.
        while (originalCurr !== undefined && originalCurr !== null) {
            clonedCurr = new Node(originalCurr.data);
            map.set(originalCurr, clonedCurr);
            originalCurr = originalCurr.next;
        }

        // Adjusting the original list reference again.
        originalCurr = this.head;

        // Traversal of original list again to adjust the next
        // and random references of clone list using hash map.
        while (originalCurr !== undefined && originalCurr !== null) {
            clonedCurr = map.get(originalCurr);

            clonedCurr.next = map.get(originalCurr.next);
            clonedCurr.random = map.get(originalCurr.random);

            // Map changes null pointer into undefiend,
            // but we works with null.
            clonedCurr.next = undefinedToNull(clonedCurr.next);
            clonedCurr.random = undefinedToNull(clonedCurr.random);

            originalCurr = originalCurr.next;
        }

        // Return the head reference of the clone list.
        return new LinkedList(map.get(this.head));
    }
}

function undefinedToNull(value) {
    if (value === undefined) {
        return null;
    } else {
        return value;
    }
}

function testLinkedList() {
    // Setup data in the linked list.
    let root = new Node(5);
    let list = new LinkedList(root);
    list.push(4);
    list.push(3);
    list.push(2);
    list.push(1);

    // Setup random references.
    list.head.random = list.head.next.next;
    list.head.next.random =
        list.head.next.next.next;
    list.head.next.next.random =
        list.head.next.next.next.next;
    list.head.next.next.next.random =
        list.head.next.next.next.next;
    list.head.next.next.next.random =
        list.head.next;

    let listCloned = list.clone();
    console.log(list, listCloned)
}
testLinkedList();