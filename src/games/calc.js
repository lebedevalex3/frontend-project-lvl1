import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'What is the result of the expression?';

const calcCorrectAnswer = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const calcDataToPrint = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return `${num1} + ${num2}`;
    case '-':
      return `${num1} - ${num2}`;
    case '*':
      return `${num1} * ${num2}`;
    default:
      return null;
  }
};

const getGameData = () => {
  const num1 = getRandomInt(20);
  const num2 = getRandomInt(20);
  const arrOperations = ['+', '-', '*'];
  const random = getRandomInt(arrOperations.length);
  const operation = arrOperations[random];
  const options = [operation, num1, num2];

  return [calcCorrectAnswer(...options), calcDataToPrint(...options)];
};

export default () => play(MAINQUESTION, getGameData);
