import { getRandomIntMinMax } from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const YES = 'yes';
const NO = 'no';

const isPrime = (number) => {
  if (number <= 1) return false;
  let i = 2;
  while (i <= Math.ceil(number / 2)) {
    if (number % i === 0) return false;
    i += 1;
  }
  return true;
};
const getCorrectAnswer = (number) => {
  if (isPrime(number)) return YES;
  return NO;
};

const getGameData = () => {
  const randomInt = getRandomIntMinMax(1, 100);
  const results = [];
  results.push(getCorrectAnswer(randomInt));
  results.push(String(randomInt));

  return results;
};

export default () => play(MAINQUESTION, getGameData);
