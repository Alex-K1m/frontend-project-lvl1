// @ts-check

import random from 'lodash/random.js';

/**
 * @typedef { import("../typedefs").Game } Game
 * @typedef {[ string, (n1: number, n2: number) => number]} Operation
 */

const task = 'What is the result of the expression?';

/** @type {Operation[]} */
const operations = [
  ['+', (num1, num2) => num1 + num2],
  ['-', (num1, num2) => num1 - num2],
  ['*', (num1, num2) => num1 * num2],
];

/** @implements {Game} */
export default class Calc {
  getTask() {
    return task;
  }

  newRound() {
    const index = random(0, operations.length - 1);
    const num1 = random(5, 20);
    const num2 = random(5, 20);
    const [sign, calculate] = operations[index];

    const question = `${num1} ${sign} ${num2}`;
    const correctAnswer = String(calculate(num1, num2));

    return { question, correctAnswer };
  }
}
