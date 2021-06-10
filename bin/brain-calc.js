#!/usr/bin/env node

import Calc from '../src/games/Calc.js';
import start from '../src/index.js';

const calcGame = new Calc();

start(calcGame);
