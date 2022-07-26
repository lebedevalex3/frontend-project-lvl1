import getRandomInt, { getRandomIntMinMax } from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'What number is missing in the progression?';

const generateProgression = (first, denom, length) => {
  const elements = [];
  for (let i = 0; i < length; i += 1) {
    elements.push(first + i * denom);
  }
  return elements;
};

const getGameData = () => {
  const firstElement = getRandomIntMinMax(1, 10);
  const denominator = getRandomIntMinMax(1, 10);
  const lengthProgression = getRandomIntMinMax(5, 15);
  const progressionArray = generateProgression(firstElement, denominator, lengthProgression);

  const randomIndex = getRandomInt(progressionArray.length);
  const item = progressionArray[randomIndex];
  progressionArray[randomIndex] = '..';
  const results = [item, progressionArray.join(' ')];
  return results;
};

export default () => play(MAINQUESTION, getGameData);
