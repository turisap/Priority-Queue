'use strict';

import Queue from './src/Queue';
import dotenv from 'dotenv';
import getUser from './src/factory';
import generator from './src/stressTest';

dotenv.config({ silent: true });

const config = {
    minHeap : true,
    baseProperty : 'salary'
};

const array = getUser(10);

const queue = new Queue(array, config);

queue.getHeap();

generator();
