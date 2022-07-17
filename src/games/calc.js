import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const arrOperations = ['+', '-', '*'];

const expression = () => {
  const num1 = getRandomInt(20);
  const num2 = getRandomInt(20);
  let stringExpression = null;
  let numberExpression = null;
  let index = null;

  const random = Math.floor(Math.random() * arrOperations.length);
  const operation = arrOperations[random];

  switch (operation) {
    case '+':
      numberExpression = num1 + num2;
      stringExpression = `${num1}+${num2}`;
      break;
    case '-':
      numberExpression = num1 - num2;
      stringExpression = `${num1}-${num2}`;

      break;
    case '*':
      numberExpression = num1 * num2;
      stringExpression = `${num1}*${num2}`;
      break;

    default:
  }
  index = arrOperations.indexOf(operation);
  arrOperations.splice(index, 1);

  const arrResult = [numberExpression, stringExpression];
  return arrResult;
};

const correctAnswer = (exp) => Number(exp);

const mainQuestion = 'What is the result of the expression?';

play(mainQuestion, correctAnswer, expression);
