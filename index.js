import Queue from './src/PriorityQueueFacade';

// Loadinng ENV variables
require('dotenv').config();

const queue = new Queue([2,4,5]);

queue.size();
queue.clear();