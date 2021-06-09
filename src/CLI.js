// @ts-check

import readlineSync from 'readline-sync';

export default class CLI {
  /** @arg {string} text */
  notify(text) {
    console.log(text);
  }

  /** @arg {string} question */
  ask(question) {
    return readlineSync.question(question);
  }
}
