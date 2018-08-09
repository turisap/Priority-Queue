import Queue from './Queue';

let heapLogs = '';


/**
 * Generates random inputs and creates a priority queue based on each of them.
 * Afterwards, runs a series of checks for each instance. Stops if a check falls.
 */
function generator () {

    let queue;
    while (true) {

        queue = getFreshQueue();

        //check if the binary heap has been properly built
        if(checkHeap(queue)) {
            console.log('Checking heap, OK');
            console.log(`HEAP: ${queue.getHeap()}`);
        } else {
            console.log(`
                WRONG ANSWER,
                HEAP: ${queue.getHeap()}
                LOGS : ${heapLogs}
            `);
            break;
        }


        // check insertion into the heap
        queue = getFreshQueue();
        queue.enqueue(getRandomArray());
        if(checkHeap(queue)) {
            console.log('Checking Insertion, OK');
            console.log(`HEAP: ${queue.getHeap()}`);
        } else {
            console.log(`
                WRONG ANSWER,
                HEAP: ${queue.getHeap()}
                LOGS : ${heapLogs}
            `);
            break;
        }


    }

}



/**
 * Gets a random integer based on a given threshold
 * @param threshold
 * @returns {number}
 */
const getRandom = threshold => {
    return Math.floor(Math.random() * threshold + 1);
};




/**
 * Gets a fresh randomly generated priority queue
 * @returns {PriorityQueue}
 */
const getFreshQueue = () => {
    return new Queue(getRandomArray(), null);
};


/**
 * Returns a random array
 * @returns {number[]}
 */
const getRandomArray = () => {
    return new Array(getRandom(50))
        .fill(0)
        .map(() => getRandom(100));
};


/**
 * Check legibility of a given heap by checking parent of each node and comparing them
 * @param queue
 * @returns {boolean}
 */
const checkHeap = queue => {
    const heap = queue.getHeap();
    let isHeap = true;

    heap.forEach((node, i) => {
        let parent = parentNode(i);
        if (heap[parent] > node && parent >= 0) isHeap = false;
        heapLogs = `Node ${node} on index ${i} has illegal parent at index ${parent}`;
    });

    return isHeap;
};


/**
 * Returns index of a parent node
 * @param i
 * @returns {number}
 */
function parentNode(i) {return Math.floor((i - 1) / 2);}


export default generator;