// @ts-check

import random from 'lodash/random.js';

import { genProgression } from '../utils.js';

/** @typedef { import("../typedefs").Game } Game */

const task = 'What number is missing in the progression?';

/** @implements {Game} */
export default class Progression {
  getTask() {
    return task;
  }

  newRound() {
    const progression = genProgression(random(20), random(2, 9), random(5, 10));
    const index = random(progression.length - 1);

    const correctAnswer = String(progression[index]);
    const question = progression.join(' ').replace(correctAnswer, '..');

    return { question, correctAnswer };
  }
}
