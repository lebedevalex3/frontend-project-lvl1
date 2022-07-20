import getRandomInt, { getRandomIntMinMax } from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'What number is missing in the progression?';

const getExpression = () => {
  const firstElement = getRandomIntMinMax(1, 10);
  const denominator = getRandomIntMinMax(1, 10); // знаменатель прогрессии
  const lengthProgression = getRandomIntMinMax(5, 15); // кол-во членов прогрессии
  const progressionArray = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    progressionArray.push(firstElement + i * denominator);
  }
  const randomIndex = getRandomInt(progressionArray.length);
  const item = progressionArray[randomIndex];
  progressionArray[randomIndex] = '..';
  const resultArray = [item, progressionArray.join(' ')];
  return resultArray;
};

play(MAINQUESTION, getExpression);
