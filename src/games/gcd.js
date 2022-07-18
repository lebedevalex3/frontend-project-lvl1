import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};

const expression = () => {
  const num1 = getRandomInt(40) + 1;
  const num2 = getRandomInt(40) + 1;
  const gcdNumber = gcd(num1, num2);

  const arrResult = [gcdNumber, `${num1} ${num2}`];

  return arrResult;
};

const correctAnswer = (exp) => exp;
const mainQuestion = 'Find the greatest common divisor of given numbers.';

play(mainQuestion, correctAnswer, expression);
