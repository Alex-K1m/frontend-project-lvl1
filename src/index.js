// @ts-check

import cli from './io/cli.js';

/** @typedef { import("./typedefs").Game } Game */

/** @arg {Game} game} */
const start = (game, numberOfRounds = 3, ui = cli) => {
  let isGameLost = false;

  const userName = ui.ask('Welcome to the Brain Games!\nMay I have your name? ')
    || 'Anonymous';
  ui.notify(`Hello, ${userName}!`);
  ui.notify(game.getTask());

  for (let round = 1; round <= numberOfRounds && isGameLost === false; round += 1) {
    const { question, correctAnswer } = game.newRound();

    const userAnswer = ui.ask(`Question: ${question}\nYour answer: `);

    const isCorrectAnswer = userAnswer === correctAnswer;
    const feedback = isCorrectAnswer
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`;
    ui.notify(feedback);

    if (!isCorrectAnswer) isGameLost = true;
  }

  ui.notify(
    `${isGameLost ? "Let's try again" : 'Congratulations'} ${userName}!`,
  );
};

export default start;
