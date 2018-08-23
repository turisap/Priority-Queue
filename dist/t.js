/**
 * This file is only for testing purposes
 */

// requiring the library from the bundle file
const Queue = require('./build.js');

// creating a new instance using initial values to feed the queue and configuration object
const initialValues = [{id: 3},{id : 1}];
const config = {
    minHeap: true,
    baseProperty : 'id'
};

const q = new Queue(initialValues, config)

// running one operation
console.log(q.size());
