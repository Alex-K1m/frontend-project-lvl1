// @ts-check

import random from 'lodash/random.js';

import start from '../index.js';
import { genProgression } from '../utils.js';

/** @typedef { import("../typedefs").Game } Game */

const task = 'What number is missing in the progression?';
const max = 20;
const minStep = 2;
const maxStep = 9;
const minLength = 5;
const maxLength = 10;

/** @type {Game} */
const progressionGame = {
  getTask() {
    return task;
  },

  newRound() {
    const firstElement = random(max);
    const step = random(minStep, maxStep);
    const length = random(minLength, maxLength);
    const progression = genProgression(firstElement, step, length);
    const index = random(progression.length - 1);

    const correctAnswer = String(progression[index]);
    const question = progression.join(' ').replace(correctAnswer, '..');

    return { question, correctAnswer };
  },
};

export default () => start(progressionGame);
