'use strict';
import Validator from './Validator';


class PriorityQueue {


    /**
     * Values is an array of objects, while base is a property of objects which priority is built on
     * @param values
     * @param config
     */
    constructor(values, config) {
        this._heap = values;
        this._config = config;
        /*this._minHeap = config.minHeap;
        this._baseProperty = config.baseProperty;*/
        this._initialArray = values;

        this._init();
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
     * Inserts an item or an array of items into the heap
     * @param values
     */
    enqueue(values) {
        values.forEach(v => {
            this._heap.push(v);
            this.siftUp(this.size() - 1);
        });
    }



    /**
     * Removes the root element from the heap and rebuilds it
     * @returns {T | undefined}
     */
    dequeue() {
        const element = this._heap.shift();
        this._heap.unshift(this._heap.pop());
        this.siftDown(0);
        return element;
    }



    /**
     * Builds max heap out of a given array
     */
    buildHeap() {
        for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
            this.siftDown(i);
        }
    }



    /**
     * Heap getter
     * @returns {*|Array}
     */
    getHeap() {
        return this._heap;
    }


    /**
     * Returns initial array which was passed during queue initialization
     * @returns {*}
     */
    getInitialArray() {
        return this._initialArray;
    }


    /**
     * Returns array of ordered base properties
     * @returns {any[]}
     */
    getInitialBasePropertyRow() {
        return this._initialArray.map(i => i[this._baseProperty]);
    }


    /**
     * Returns array of base properties in sorted order
     * @returns {any[]}
     */
    getSortedBasePropertyRow() {
        return this._heap.map(i => i[this._baseProperty]);
    }


    /**
     * Sifts down a given element until its children less then itself
     * @param i
     */
    siftDown(i) {
        let minIndex = i;
        let l = this._leftChild(i);
        let r = this._rightChild(i);

        /* eslint-disable indent */
        switch (true) {
            case(this._minHeap):
                if (l < this.size()) {
                    if (this._heap[l][this._baseProperty] < this._heap[minIndex][this._baseProperty]) {
                        minIndex = l;
                    }
                }
                if (r < this.size()) {
                    if (this._heap[r][this._baseProperty] < this._heap[minIndex][this._baseProperty]) {
                        minIndex = r;
                    }
                }
                break;
            case(!this._minHeap):
                if (l < this.size()) {
                    if (this._heap[l][this._baseProperty] > this._heap[minIndex][this._baseProperty]) {
                        minIndex = l;
                    }
                }
                if (r < this.size()) {
                    if (this._heap[r][this._baseProperty] > this._heap[minIndex][this._baseProperty]) {
                        minIndex = r;
                    }
                }
                break;
            default:
                break;
        }
        /* eslint-enable indent */

        if (i !== minIndex) {
            this._swap(minIndex, i);
            this.siftDown(minIndex);
        }
    }


    /**
     * Sifts an element Up after insertions / deletions
     * @param i
     */
    siftUp(i) {
        let parent = this._parent(i);
        if (this._minHeap) {
            if (this._heap[parent] && this._heap[parent][this._baseProperty] > this._heap[i][this._baseProperty]) {
                this._swap(i, parent);
                this.siftUp(parent);
            }
        }
        if (!this._minHeap) {
            if (this._heap[parent] && this._heap[parent][this._baseProperty] < this._heap[i][this._baseProperty]) {
                this._swap(i, parent);
                this.siftUp(parent);
            }
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
     * @private
     */
    _init() {
        this._validateInput();
        this.buildHeap();
    }



    /**
     * Checks whether or not a given array of values is consistent and appropriate for processing
     * @private
     */
    _validateInput() {
        const validator = new Validator(this._initialArray, this._config);
        validator._checkIfConfigIsLegal();
    }

}



export default PriorityQueue;