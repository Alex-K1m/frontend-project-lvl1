#!/usr/bin/env node

import Progression from '../src/games/Progression.js';
import start from '../src/index.js';

const progressionGame = new Progression();

start(progressionGame);
