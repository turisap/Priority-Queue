import Queue from './src/Queue';
import dotenv from 'dotenv';
import getUser from './src/factory';
//import generator from './src/stressTest';

dotenv.config({ silent: true });

const config = {
    minHeap : true,
    baseProperty : 'id'
};



const queue = new Queue(getUser(10), config);

console.log(queue.getHeap());

//generator();
