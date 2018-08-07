import Queue from './src/PriorityQueueFacade';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

const queue = new Queue([2,4,5]);

queue.size();
queue.clear();