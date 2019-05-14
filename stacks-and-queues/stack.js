"use strict";

/**
 * Stack
 * Time Complexity: O(1)
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        
        // check if stack has just one node
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}

function test() {
    let stack = new Stack();

    console.log("new stack [1, 2, 3] and than pop 4x times");
    console.log(stack.push(1));
    console.log(stack.push(2));
    console.log(stack.push(3));
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
}
test()