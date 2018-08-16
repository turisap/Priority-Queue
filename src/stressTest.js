import Queue from './Queue';
import getUsers from './factory';

let heapLogs = '';
const baseProperty = 'salary';


/**
 * Generates random inputs and creates a priority queue based on each of them.
 * Afterwards, runs a series of checks for each instance. Stops if a check falls.
 */
function generator () {
    /* eslint-disable no-unused-vars */

    let queue;
    while (true) {

        const minHeap = getRandomBoolean();
        queue = getFreshQueue({minHeap, baseProperty});


        //check if the binary heap has been properly built
        if(!checkHeap(queue, minHeap)) break;


        // check insertion into the heap
        queue = getFreshQueue({minHeap, baseProperty});
        queue.enqueue(getUsers(getRandom(10)));
        if(!checkHeap(queue, minHeap)) break;


        // checking removal from the queue
        queue = getFreshQueue({minHeap, baseProperty});
        const el = queue.dequeue();
        if(!checkHeap(queue, minHeap)) break;
        if(!checkMinEl(queue, el, minHeap)) break;



        // stress testing of queue with a naive implementation
        queue = getFreshQueue({minHeap, baseProperty});
        const naiveQueue = queue._initialBasePropertyRow.sort((a,b) => {
            if(minHeap) return a - b;
            return b - a;
        });

        if(!compareImplementations([...naiveQueue], queue)){
            console.log(heapLogs);
            console.log(`NAIVE: ${naiveQueue}
                         QUEUE : ${queue._sortedBasePropertyRow}`);
            break;
        }
        console.log(queue.heap);
        console.log(`COMPARING QUEUES, OK. Queue : ${queue._sortedBasePropertyRow}`);

        heapLogs = '';
    }
}



/**
 * Compares naive and fast implementations member by member
 * @param naive
 * @param fast
 * @returns {boolean}
 */
const compareImplementations = (naive, fast) => {
    let equalQueues = true;
    for (let i = 0; i < naive.length; i++) {
        let naiveEl = parseInt(naive.shift());
        let fastEl  = parseInt(fast.dequeue()[baseProperty]);
        if (naiveEl !== fastEl) {
            heapLogs = `WRONG ANSWER!!!
                Element from binary heap: ${fastEl[baseProperty]}
                Naive implementation element: ${naiveEl} :`;
            equalQueues = false;
        }
    }
    return equalQueues;
};



/**
 * Gets a random integer based on a given threshold
 * @param threshold
 * @returns {number}
 */
const getRandom = threshold => {
    return Math.floor(Math.random() * threshold + 1) + 1;
};




/**
 * Gets a fresh randomly generated priority queue
 * @returns {PriorityQueue}
 */
const getFreshQueue = config => {
    const users = getUsers(getRandom(50));
    return new Queue(users, config);
};



/**
 * @returns {boolean}
 */
const getRandomBoolean = () => {
    return Math.random() > 0.5;
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
const checkHeap = (queue, minHeap) => {
    const heap = queue._sortedBasePropertyRow;
    let isHeap = true;

    heap.forEach((node, i) => {
        let parent = parentNode(i);
        if (minHeap && heap[parent] > node && parent >= 0) {
            heapLogs = `Node ${node} on index ${i} has illegal parent ${heap[parent]} at index ${parent} \n
        HEAP: ${heap}`;
            isHeap = false;
        }
        if (!minHeap && heap[parent] < node && parent >= 0) {
            heapLogs = `Node ${node} on index ${i} has illegal parent ${heap[parent]} at index ${parent} \n
        HEAP: ${heap}`;
            isHeap = false;
        }

    });

    if(isHeap) {
        console.log('Checking heap, OK');
        console.log(`HEAP: ${queue.heap}`);
    } else {
        console.log(`
                WRONG ANSWER,
                HEAP: ${queue.sortedBasePropertyRow}
                HEAP TYPE : ${queue.isMinHeap() ? 'min-heap' : 'max-heap'}, ${minHeap ? 'min-heap' : 'max-heap'}
                LOGS : ${heapLogs}
            `);
    }

    return isHeap;
};



/**
 * Checks whether or not there is a member with less priority then a given element in a given queue
 * @param queue
 * @param el
 * @param minHeap
 * @returns {boolean}
 */
const checkMinEl = (queue, el, minHeap) => {
    let isMin = true;
    if(minHeap) {
        queue._sortedBasePropertyRow.forEach(member => {
            if(member < el) isMin = false;
        });
    }
    if(!minHeap) {
        queue._sortedBasePropertyRow.forEach(member => {
            if(member > el) isMin = false;
        });
    }
    return isMin;
};



/**
 * Returns index of a parent node
 * @param i
 * @returns {number}
 */
const parentNode = (i) => Math.floor((i - 1) / 2);



export default generator;