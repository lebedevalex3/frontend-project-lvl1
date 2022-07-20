import { getRandomIntMinMax } from '../getRandomInt.js';
import play from '../index.js';

const MAINQUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const YES = 'yes';
const NO = 'no';

const isPrime = (number) => {
  if (number === 1) return false; // 1 -не является простым числом
  let i = 2; // Проверяем остатки при делении чисел больших единицы
  while (i <= Math.ceil(number / 2)) {
    if (number % i === 0) return false;
    i += 1;
  }
  return true;
};
const getCorrectAnswer = (number) => {
  if (isPrime(number)) return YES;
  return NO;
};

const getExpression = () => {
  const randomInt = getRandomIntMinMax(1, 100);
  const resultArray = [];
  resultArray.push(getCorrectAnswer(randomInt));
  resultArray.push(String(randomInt));

  return resultArray;
};

play(MAINQUESTION, getExpression);
