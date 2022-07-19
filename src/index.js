import readlineSync from 'readline-sync';

const gameMoves = 3;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const play = (MAINQUESTION, getExpression) => {
  let i = 0;
  console.log(MAINQUESTION); // Уникальный главный вопрос в каждой игре
  while (i < gameMoves) {
    const [correctAnswer, strExp] = getExpression();

    console.log(`Question: ${strExp}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
