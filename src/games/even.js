import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const YES = 'yes';
const NO = 'no';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => {
  if (isEven(number)) return YES;
  return NO;
};

const getGameData = () => {
  const randomNumber = getRandomInt(100);
  const results = [getCorrectAnswer(randomNumber), String(randomNumber)];

  return results;
};

export default () => play(MAINQUESTION, getGameData);
