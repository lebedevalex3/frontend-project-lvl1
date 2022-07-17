import readlineSync from 'readline-sync';
import { userName } from './brain.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const even = () => {
  const gameMoves = 3;
  let i = 0;
  while (i < gameMoves) {
    const randomInt = getRandomInt(100);
    const remainder = randomInt % 2;
    let correctAnswer = null;

    if (remainder === 0) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${userName}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

even();
