// @ts-check

import random from 'lodash/random.js';

import start from '../index.js';
import { findGcd } from '../utils.js';

/** @typedef { import("../typedefs").Game } Game */

const task = 'Find the greatest common divisor of given numbers.';
const min = 5;
const max = 100;

/** @type {Game} */
const GcdGame = {
  getTask() {
    return task;
  },

  newRound() {
    const num1 = random(min, max);
    const num2 = random(min, max);

    const question = `${num1} ${num2}`;
    const correctAnswer = String(findGcd(num1, num2));

    return { question, correctAnswer };
  },
};

export default () => start(GcdGame);
