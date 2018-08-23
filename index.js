'use strict';

import dotenv from 'dotenv';
import generator from './src/stressTest';


dotenv.config({ silent: true });

generator();

