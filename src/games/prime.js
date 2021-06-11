// @ts-check

import random from 'lodash/random.js';

import start from '../index.js';
import { isPrime } from '../utils.js';

/** @typedef { import("../typedefs").Game } Game */

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const max = 100;

/** @type {Game} */
const primeGame = {
  getTask() {
    return task;
  },

  newRound() {
    const number = random(max);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return { question: String(number), correctAnswer };
  },
};

export default () => start(primeGame);
