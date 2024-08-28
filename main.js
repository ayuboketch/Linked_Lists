// Node class
class Node {
    constructor(value) {
        this.value = value; // Set the node's value
        this.next = null; // Link to the next node (initially null)
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Start with an empty list
    }

    // Append a node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Prepend a node to the start of the list
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Return the size of the linked list
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Return the first node (head)
    headNode() {
        return this.head;
    }

    // Return the last node (tail)
    tail() {
        let current = this.head;
        if (!current) return null;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    // Return the node at the given index
    at(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) return current;
            current = current.next;
            count++;
        }
        return null;
    }

    // Remove the last node from the list
    pop() {
        if (!this.head) return null;
        if (!this.head.next) {
            const poppedNode = this.head;
            this.head = null;
            return poppedNode;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const poppedNode = current.next;
        current.next = null;
        return poppedNode;
    }

    // Check if the list contains a specific value
    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    // Find the index of a node with a specific value
    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return null;
    }

    // Convert the linked list to a string
    toString() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.next;
        }
        result += "null";
        return result;
    }

    // Insert a node at a specific index
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const newNode = new Node(value);
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index - 1) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
            count++;
        }
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index === 0 && this.head) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index - 1 && current.next) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
            count++;
        }
    }
}

// Test the linked list
const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
