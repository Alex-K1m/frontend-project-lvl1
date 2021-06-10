// @ts-check

import random from 'lodash/random.js';

import { findGcd } from '../utils.js';

/** @typedef { import("../typedefs").Game } Game */

const task = 'Find the greatest common divisor of given numbers.';

/** @implements {Game} */
export default class GCD {
  getTask() {
    return task;
  }

  newRound() {
    const num1 = random(5, 100);
    const num2 = random(5, 100);

    const question = `${num1} ${num2}`;
    const correctAnswer = String(findGcd(num1, num2));

    return { question, correctAnswer };
  }
}
