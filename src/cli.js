import readlineSync from 'readline-sync';

const app = () => {
  console.log('Welcome to the Brain Games!');

  const userName =
    readlineSync.question('May I have your name? ') || 'anonymous';

  console.log(`Hello, ${userName}!`);
};

export default app;
