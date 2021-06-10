#!/usr/bin/env node

import Prime from '../src/games/Prime.js';
import start from '../src/index.js';

const primeGame = new Prime();

start(primeGame);
