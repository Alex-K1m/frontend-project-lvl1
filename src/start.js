// @ts-check

import readlineSync from 'readline-sync';

/** @typedef { import("./typedefs").Game } Game */

/** @arg {Game} game} */
const start = (game, numberOfRounds = 3) => {
  // const userName = greetUser();
  console.log('Welcome to the Brain Games!');
  const userName =
    readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hello, ${userName}!`);

  let isGameWon = true;

  console.log(game.getTask());

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const { question, correctAnswer } = game.newRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrectAnswer = userAnswer === correctAnswer;
    const feedback = isCorrectAnswer
      ? 'Correct!'
      : [
          `'${userAnswer}' is wrong answer ;(.`,
          `Correct answer was '${correctAnswer}'`,
        ].join(' ');

    console.log(feedback);

    if (!isCorrectAnswer) {
      isGameWon = false;
      break;
    }
  }

  console.log(
    isGameWon
      ? `Congratulations, ${userName}!`
      : `Let's try again, ${userName}!`
  );
};

export default start;
