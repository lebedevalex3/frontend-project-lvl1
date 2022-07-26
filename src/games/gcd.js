import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};

const getGameData = () => {
  const num1 = getRandomInt(50) + 1; // +1 на случай появления нуля
  const num2 = getRandomInt(50) + 1;
  const gcdNumber = gcd(num1, num2);

  const results = [gcdNumber, `${num1} ${num2}`];

  return results;
};

export default () => play(MAINQUESTION, getGameData);
