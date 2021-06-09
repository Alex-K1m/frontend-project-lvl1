#!/usr/bin/env node

import Even from '../src/games/Even.js';
import start from '../src/start.js';

const evenGame = new Even();

start(evenGame);
