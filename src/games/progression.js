import getRandomInt, { getRandomIntMinMax } from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'What number is missing in the progression?';

const getExpression = () => {
  const firstElement = getRandomIntMinMax(2, 12);
  const denominator = getRandomIntMinMax(3, 8);
  const lengthProgression = getRandomIntMinMax(6, 15);
  const arrProgression = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    arrProgression.push(firstElement + i * denominator);
  }
  const randomIndex = getRandomInt(arrProgression.length);
  const item = arrProgression[randomIndex];
  arrProgression[randomIndex] = '..';
  const resultArr = [item, arrProgression.join(' ')];
  return resultArr;
};

play(MAINQUESTION, getExpression);
