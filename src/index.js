// @ts-check

import cli from './io/cli.js';

/** @typedef { import("./typedefs").Game } Game */

/** @arg {Game} game} */
const start = (game, numberOfRounds = 3, ui = cli) => {
  let isGameWon = true;

  const userName = ui.ask('Welcome to the Brain Games!\nMay I have your name? ')
    || 'Anonymous';
  ui.notify(`Hello, ${userName}!`);
  ui.notify(game.getTask());

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const { question, correctAnswer } = game.newRound();

    const userAnswer = ui.ask(`Question: ${question}\nYour answer: `);

    const isCorrectAnswer = userAnswer === correctAnswer;
    const feedback = isCorrectAnswer
      ? 'Correct!'
      : [
        `'${userAnswer}' is wrong answer ;(.`,
        `Correct answer was '${correctAnswer}'`,
      ].join(' ');
    ui.notify(feedback);

    if (!isCorrectAnswer) {
      isGameWon = false;
      break;
    }
  }

  ui.notify(
    isGameWon
      ? `Congratulations, ${userName}!`
      : `Let's try again, ${userName}!`,
  );
};

export default start;
