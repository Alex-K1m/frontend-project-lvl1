// @ts-check

import random from 'lodash/random.js';

import { isPrime } from '../utils.js';

/** @typedef { import("../typedefs").Game } Game */

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/** @implements {Game} */
export default class Prime {
  getTask() {
    return task;
  }

  newRound() {
    const number = random(100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return { question: String(number), correctAnswer };
  }
}
