// @ts-check

import random from 'lodash/random.js';

import start from '../index.js';
import { isEven } from '../utils.js';

/** @typedef { import("../typedefs").Game } Game */

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 100;

/** @type {Game} */
const EvenGame = {
  getTask() {
    return task;
  },

  newRound() {
    const number = random(min, max);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    return { question: String(number), correctAnswer };
  },
};

export default () => start(EvenGame);
