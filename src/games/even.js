import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const YES = 'yes';
const NO = 'no';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) return YES;
  return NO;
};

const getExpression = () => {
  const randomInt = getRandomInt(100);
  const resultArr = [];
  resultArr.push(getCorrectAnswer(randomInt));
  resultArr.push(String(randomInt));

  return resultArr;
};

play(MAINQUESTION, getExpression);
