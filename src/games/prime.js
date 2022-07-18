import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const isPrime = (num) => {
  let i = 2;
  while (i < Math.ceil(Math.sqrt(num))) {
    if (num % i === 0) return false;
    i += 1;
  }
  return true;
};

const expression = () => {
  const randomInt = getRandomInt(16) + 2;
  const arr = [];
  arr[0] = randomInt;
  arr[1] = String(randomInt);
  return arr;
};

const correctAnswer = (exp) => {
  if (isPrime(exp)) return 'yes';
  return 'no';
};

const mainQuestion =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

play(mainQuestion, correctAnswer, expression);
