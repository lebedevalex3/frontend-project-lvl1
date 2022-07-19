import { getRandomIntMinMax } from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const YES = 'yes';
const NO = 'no';

const isPrime = (num) => {
  if (num === 1) return false;
  let i = 2;
  while (i <= Math.ceil(num / 2)) {
    if (num % i === 0) return false;
    i += 1;
  }
  return true;
};
const getCorrectAnswer = (num) => {
  if (isPrime(num)) return YES;
  return NO;
};

const getExpression = () => {
  const randomInt = getRandomIntMinMax(1, 16);
  const resultArr = [];
  resultArr.push(getCorrectAnswer(randomInt));
  resultArr.push(String(randomInt));

  return resultArr;
};

play(MAINQUESTION, getExpression);
