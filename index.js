'use strict';

import dotenv from 'dotenv';
import QueueFacade from './src/PriorityQueueFacade';
import generator from './src/stressTest';


dotenv.config({ silent: true });

generator();

export default QueueFacade;
