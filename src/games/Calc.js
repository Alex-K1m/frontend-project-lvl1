// @ts-check

import random from 'lodash/random.js';

import start from '..';

/**
 * @typedef { import("../typedefs").Game } Game
 * @typedef {[ string, (n1: number, n2: number) => number]} Operation
 */

const task = 'What is the result of the expression?';
const min = 5;
const max = 20;

/** @type {Operation[]} */
const operations = [
  ['+', (num1, num2) => num1 + num2],
  ['-', (num1, num2) => num1 - num2],
  ['*', (num1, num2) => num1 * num2],
];

/** @type {Game} */
const CalcGame = {
  getTask() {
    return task;
  },

  newRound() {
    const index = random(operations.length - 1);
    const num1 = random(min, max);
    const num2 = random(min, max);
    const [sign, calculate] = operations[index];

    const question = `${num1} ${sign} ${num2}`;
    const correctAnswer = String(calculate(num1, num2));

    return { question, correctAnswer };
  },
};

export default () => start(CalcGame);
