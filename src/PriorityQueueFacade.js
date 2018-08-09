import Queue from './Queue';

class PriorityQueueFacade {

    constructor(initialValues = []) {
        this.queue = new Queue(initialValues);
    }

    /**
     *  Sets queue's array to []
     */
    clear() {
        this.queue.clear();
    }

    /**
     * Adds an item to the data structure
     */
    enqueue() {

    }

    /**
     * Gets the smallest/biggest item and removes it from the queue
     */
    dequeue() {

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
        console.log(this.queue.size());
    }
}

export default PriorityQueueFacade;