import Queue from './Queue';

class PriorityQueueFacade {
    constructor(initialValues = [], maxHeap) {
        this.queue = new Queue(initialValues, maxHeap);
    }

    /**
     *  Sets queue's array to []
     */
    clear() {

    }

    /**
     * Adds an item to the data structure
     */
    enqueue() {

    }

    /**
     * Gets the smallest/biggest item and removes it from the queue
     */
    dequeue(item) {

    }

    /**
     * Gets the biggest/smallest item from the data structure
     */
    peek() {

    }

    /**
     * Returns true if there is no items in the data structure and false otherwise
     */
    isEmpty() {

    }

    /**
     * Returns the number of items in the data structure
     */
    size() {

    }
}

export default PriorityQueueFacade;