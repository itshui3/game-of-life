// an implementation of a queue in javascript
import { SinglyLinkedList } from './sll.js'

class Queue {
    constructor() {
        this.storage = SinglyLinkedList()
        this.length = 0
    }

    enqueue(value) {
        SinglyLinkedList.addToTail(value)
        this.length++
    }

    dequeue() {
        let nextVal = SinglyLinkedList.removeFromHead()
        if (nextVal === null) {
            return null
        }
        this.length--
        return nextVal
    }
}

export { Queue }