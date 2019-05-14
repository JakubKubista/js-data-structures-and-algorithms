"use strict";

/**
 * Basic operations with singly linked list.
 * Time Complexity: Access/Seach - O(n) | Insertion/Deletion - O(1)
 * Source: https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
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

    insertAtBeginning(data) {
        // So next will be null.
        let newNode = new Node(data);
        // Both pointers now point at the same node.
        newNode.next = this.head;
        this.head = newNode;

        return this.head;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }
        // Find the tail (null).
        let tail = this.head;
        while (tail.next !== null) {
            // Update the tail's next pointer.
            tail = tail.next;
        }
        tail.next = newNode;

        return this.head;
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return
        }

        // Find the previous node.
        const previous = this.getAt(index - 1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;

        return this.head
    }

    deleteFirstNode() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        return this.head;
    }

    deleteLastNode() {
        if (!this.head) {
            return null;
        }
        // If only one node in the list.
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let tail = this.head.next;

        while (tail.next !== null) {
            previous = tail;
            tail = tail.next;
        }

        previous.next = null;
        return this.head;
    }

    deleteAt(index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        // Node needs to be deleted from the front
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        // Find the previous node.
        const previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
        return this.head
    }

    deleteList() {
        this.head = null;
    }
}

function testLinkedList() {
    let list = new LinkedList();
    list.insertAtBeginning(10);
    list.insertAtBeginning(3);
    list.insertAtEnd(2);
    list.insertAt(5, 2);
    list.deleteAt(1);
    list.deleteLastNode();
    console.log(list.getAt(0));
    console.log(list);
}
testLinkedList();