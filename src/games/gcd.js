import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};

const getExpression = () => {
  const num1 = getRandomInt(40) + 1;
  const num2 = getRandomInt(40) + 1;
  const gcdNumber = gcd(num1, num2);

  const arrResult = [gcdNumber, `${num1} ${num2}`];

  return arrResult;
};

play(MAINQUESTION, getExpression);
