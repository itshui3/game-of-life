// implementation of a singly linked list in javascript

class ListNode {
    constructor(value) {
        this.value = value
        this.next_node = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    addToTail(value) {
        let newNode = ListNode(value)
        this.length++
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next_node = newNode
        this.tail = newNode
    }

    removeFromHead() {
        if (this.head === null) {
            return
        }

        this.length--
        let nextInQ = this.head

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next_node
            nextInQ.next_node = null
        }

        return nextInQ.value
    }
}

export { SinglyLinkedList }