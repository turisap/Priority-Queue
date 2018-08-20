import Queue from './Queue';

class PriorityQueueFacade {

    constructor(initialValues = [], config) {
        this.queue = new Queue(initialValues, config);
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
    enqueue(values) {
        values.forEach(v => {
            this.queue.binaryTree.push(v);
            this.queue.siftUp(this.queue.size() - 1);
        });
    }


    /**
     * Gets the smallest/biggest item and removes it from the queue
     */
    dequeue() {
        const element = this.queue.binaryTree.shift();
        this.queue.binaryTree.unshift(this.queue.binaryTree.pop());
        this.queue.siftDown(0);
        return element;
    }


    /**
     * Gets the biggest/smallest item from the data structure
     */
    peek() {
        return this.queue.binaryTree[0];
    }


    /**
     * Returns true if there is no items in the data structure and false otherwise
     */
    isEmpty() {
        return this.queue.size() === 0;
    }


    /**
     * Returns the number of items in the data structure
     */
    size() {
        return this.queue.size();
    }
}

//export default PriorityQueueFacade;
module.exports = PriorityQueueFacade;