import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

const getExpression = () => {
  const randomInt = getRandomInt(100);
  const resultArr = [];
  resultArr.push(getCorrectAnswer(randomInt));
  resultArr.push(String(randomInt));

  return resultArr;
};

play(MAINQUESTION, getExpression);
