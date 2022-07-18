import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const expression = () => {
  const a1 = getRandomInt(10) + 1;
  const d = getRandomInt(5) + 2;
  const n = 10;
  const arrProgression = [];

  for (let i = 0; i < n; i += 1) {
    arrProgression.push(a1 + i * d);
  }
  const randomIndex = getRandomInt(arrProgression.length);
  const item = arrProgression[randomIndex];
  arrProgression[randomIndex] = '..';
  const resultArr = [item, arrProgression.join(' ')];
  return resultArr;
};

const correctAnswer = (exp) => exp;
const mainQuestion = 'What number is missing in the progression?';

play(mainQuestion, correctAnswer, expression);
