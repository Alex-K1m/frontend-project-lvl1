// @ts-check

import random from 'lodash/random.js';

import { isEven } from '../utils.js';

/** @typedef { import("../typedefs").Game } Game */

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

/** @implements {Game} */
export default class Even {
  getTask() {
    return task;
  }

  newRound() {
    const number = random(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    return { question: String(number), correctAnswer };
  }
}
