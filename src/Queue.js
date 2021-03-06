'use strict';

import Validator from './Validator';


class PriorityQueue {


    /**
     * Values is an array of objects, while base is a property of objects which priority is built on
     * @param values
     * @param config
     */
    constructor(values, config) {
        this.binaryTree = values;
        this._config = config;
        this._initialArray = values;

        this._init();
    }



    /**
     * Returns current length of the queue
     * @returns {number}
     */
    size() {
        return this.binaryTree.length;
    }



    /**
     * Erases all items from queue
     */
    clear() {
        if(this.binaryTree) this.binaryTree = [];
    }

    /**
     * Inserts an item or an array of items into the heap
     * This method is for test purposes only. To use the data structure, go to the respective method in
     * PriorityQueueFacade
     * @param values
     */
    enqueue(...values) {
        values.forEach(v => {
            this.binaryTree.push(v);
            this.siftUp(this.size() - 1);
        });
    }



    /**
     * Removes the root element from the heap and rebuilds it
     * This method is for test purposes only. To use the data structure, go to the respective method in
     * PriorityQueueFacade
     * @returns {T | undefined}
     */
    dequeue() {
        const element = this.binaryTree.shift();
        this.binaryTree.unshift(this.binaryTree.pop());
        this.siftDown(0);
        return element;
    }

    

    /**
     * Returns index of the left child of a given element in the heap
     * @param i
     * @returns {number}
     * @private
     */
    static _leftChild(i) {
        return (2 * i) + 1;
    }



    /**
     * Returns index of the right child of a given element in the heap
     * @param i
     * @returns {number}
     * @private
     */
    static _rightChild(i) {
        return (2 * i) + 2;
    }



    /**
     * Returns index of the parent node
     * @param i
     * @returns {number}
     * @private
     */
    static _parent(i) {
        return Math.floor((i - 1) / 2);
    }



    /**
     * Heap getter
     * @returns {*|Array}
     */
    get heap() {
        return this.binaryTree;
    }



    /**
     * Returns array of ordered base properties
     * @returns {any[]}
     */
    get _initialBasePropertyRow() {
        return this._initialArray.map(i => i[this._config.baseProperty]);
    }



    /**
     * Returns array of base properties in sorted order
     * @returns {any[]}
     */
    get _sortedBasePropertyRow() {
        return this.binaryTree.map(i => i[this._config.baseProperty]);
    }



    /**
     * Return true if the current instance is a min-heap based queue
     * @private
     */
    get _isMinHeap() {
        return this._config.minHeap;
    }


    /**
     * Builds max heap out of a given array
     */
    _buildHeap() {
        for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
            this.siftDown(i);
        }
    }




    /**
     * Sifts down a given element until its children less then itself
     * @param i
     */
    siftDown(i) {
        let minIndex = i;
        let l = PriorityQueue._leftChild(i);
        let r = PriorityQueue._rightChild(i);

        if(this._nodeHasChildAndCanBeSwapped(minIndex, l)) minIndex = l;
        if(this._nodeHasChildAndCanBeSwapped(minIndex, r)) minIndex = r;

        if (i !== minIndex) {
            this._swap(minIndex, i);
            this.siftDown(minIndex);
        }
    }


    /**
     * Decides whether or not a given node has child and should be swapped with it based on their values and the heap type
     * @param minIndex
     * @param childIndex
     * @returns {boolean}
     * @private
     */
    _nodeHasChildAndCanBeSwapped(minIndex, childIndex) {
        if (childIndex >= this.size()) return false;
        const childValue = this.binaryTree[childIndex][this._config.baseProperty];
        const nodeValue  = this.binaryTree[minIndex][this._config.baseProperty];
        if (this._isMinHeap) return childValue < nodeValue;
        return childValue > nodeValue;
    }



    /**
     * Sifts an element Up after insertions / deletions
     * @param i
     */
    siftUp(i) {
        let parent = PriorityQueue._parent(i);
        if(this._nodeHasParentAndCanBeSwapped(i, parent)) {
            this._swap(i, parent);
            this.siftUp(parent);
        }
    }


    /**
     * Decides if a given node should be swapped with its parent based on their base properties values
     * and heap type.
     * @param nodeIndex
     * @param parentIndex
     * @returns {boolean}
     * @private
     */
    _nodeHasParentAndCanBeSwapped(nodeIndex, parentIndex) {
        if(!this.binaryTree[parentIndex]) return false;
        const parentValue = this.binaryTree[parentIndex][this._config.baseProperty];
        const nodeValue = this.binaryTree[nodeIndex][this._config.baseProperty];
        return this._isMinHeap ? parentValue > nodeValue : parentValue < nodeValue;
    }




    /**
     * Swaps two given elements in the heap
     * @param a
     * @param b
     * @private
     */
    _swap(a, b) {
        const tempEl = this.binaryTree[a];
        this.binaryTree[a] = this.binaryTree[b];
        this.binaryTree[b] = tempEl;
    }



    /**
     * Checks whether or not a given array of values is consistent and appropriate for processing
     * @private
     */
    _validateInput() {
        new Validator(this._initialArray, this._config);
    }



    /**
     * Initializer for the data structure
     * @private
     */
    _init() {
        this._validateInput();
        this._buildHeap();
    }

}



export default PriorityQueue;