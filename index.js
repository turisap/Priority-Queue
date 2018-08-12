import Queue from './src/Queue';
import dotenv from 'dotenv';
//import generator from './src/stressTest';

dotenv.config({ silent: true });

const queue = new Queue([4,5,1,8,3,15,9,10,11,2], false);

console.log(queue.getHeap());

//generator();
