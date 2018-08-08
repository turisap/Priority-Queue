/**
 * This class represents core of priority queue
 */


class PriorityQueue {

    /**
     * Values is an array of objects, while base is a property of objects which priority is built on
     * @param values
     * @param base
     */
    constructor(values, base) {
        this._heap = values;
        this.base = base;
        this._errors = [];

        this._init(values);
    }



    /**
     * Returns current length of the queue
     * @returns {number}
     */
    size() {
        return this._heap.length;
    }



    /**
     * Erases all items from queue
     */
    clear() {
        if(this._heap) this._heap = [];
    }



    /**
     * Builds max heap out of a given array
     */
    buildMaxHeap() {
        for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
            this.siftDown(i);
        }
        console.log(this._heap);
    }


    /**
     * Heap getter
     * @returns {*|Array}
     */
    getHeap() {
        return this._heap;
    }



    /**
     *  Adds a new item to the end of the data structure without rebuilding the heap
     * @param item
     * @returns {number}
     */
    push(item) {
        this._heap.push(item);
    }



    /**
     * Sifts down a given element until its children less then itself
     * @param i
     */
    siftDown(i) {
        let minIndex = i;
        let l = this._leftChild(i);
        let r = this._rightChild(i);

        if (l <= this.size() && this._heap[l] < this._heap[minIndex]) {
            minIndex = l;
        }
        if (r <= this.size() && this._heap[r] < this._heap[minIndex]) {
            minIndex = r;
        }
        if (i !== minIndex) {
            this._swap(minIndex, i);
            this.siftDown(minIndex);
        }
    }


    /**
     * Swaps two given elements in the heap
     * @param a
     * @param b
     * @private
     */
    _swap(a, b) {
        const tempEl = this._heap[a];
        this._heap[a] = this._heap[b];
        this._heap[b] = tempEl;
    }


    /**
     * Returns index of the left child of a given element in the heap
     * @param i
     * @returns {number}
     * @private
     */
    _leftChild(i) {
        return (2 * i) + 1;
    }



    /**
     * Returns index of the right child of a given element in the heap
     * @param i
     * @returns {number}
     * @private
     */
    _rightChild(i) {
        return (2 * i) + 2;
    }


    /**
     * Returns index of the parent node
     * @param i
     * @returns {number}
     * @private
     */
    _parent(i) {
        return Math.floor((i - 1) / 2);
    }


    /**
     * Initializer for the data structure
     * @param values
     * @private
     */
    _init(values) {
        this._checkInputRelevance(values);
        this.buildMaxHeap();
    }



    /**
     * Checks whether or not a given array of values is consistent and appropriate for processing
     * @param values
     * @private
     */
    _checkInputRelevance(values) {
        if(!values.length) console.log('An empty Priority Queue has been created');
        if(values.length) console.log('A Priority Queue has been created');
    }

}

export default PriorityQueue;