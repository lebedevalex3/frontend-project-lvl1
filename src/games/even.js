import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const expression = () => {
  const randomInt = getRandomInt(100);
  const arr = [];
  arr[0] = randomInt;
  arr[1] = String(randomInt);
  return arr;
};

const correctAnswer = (exp) => {
  const remainder = exp % 2;
  if (remainder === 0) return 'yes';
  return 'no';
};

const mainQuestion =
  'Answer "yes" if the number is even, otherwise answer "no".';

play(mainQuestion, correctAnswer, expression);
