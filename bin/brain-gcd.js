#!/usr/bin/env node

import GCD from '../src/games/GCD.js';
import start from '../src/index.js';

const gcdGame = new GCD();

start(gcdGame);
