#!/usr/bin/env node

import Even from '../src/games/Even.js';
import start from '../src/index.js';

const evenGame = new Even();

start(evenGame);
