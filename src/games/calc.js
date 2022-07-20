import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'What is the result of the expression?';

const getExpression = () => {
  const num1 = getRandomInt(20);
  const num2 = getRandomInt(20);
  let stringExpression = null;
  let numberExpression = null;
  const arrOperations = ['+', '-', '*'];
  const random = Math.floor(Math.random() * arrOperations.length);
  const operation = arrOperations[random];

  switch (operation) {
    case '+':
      numberExpression = num1 + num2;
      stringExpression = `${num1} + ${num2}`;
      break;
    case '-':
      numberExpression = num1 - num2;
      stringExpression = `${num1} - ${num2}`;

      break;
    case '*':
      numberExpression = num1 * num2;
      stringExpression = `${num1} * ${num2}`;
      break;

    default:
  }

  return [numberExpression, stringExpression];
};

play(MAINQUESTION, getExpression);
