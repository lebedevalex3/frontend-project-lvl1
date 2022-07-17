import readlineSync from 'readline-sync';

const gameMoves = 3;

console.log('Welcome to the Brain Games !');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const play = (mainQuestion, correctAnswer, expression) => {
  let i = 0;
  console.log(mainQuestion); // Уникальный главный вопрос в каждой игре
  while (i < gameMoves) {
    const [numExp, strExp] = expression(); // Получение выражения вопроса в числовом и строковом формате (5 или '2+3')

    const correct = String(correctAnswer(numExp)); 
    console.log(`Question: ${strExp}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correct) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correct}.`
      );
      console.log(`Let's try again, ${userName}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return null;
};

export default play;
