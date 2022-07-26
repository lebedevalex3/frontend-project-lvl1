import readlineSync from 'readline-sync';

const play = (MAINQUESTION, getGameData) => {
  const gameMoves = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(MAINQUESTION); // Уникальный главный вопрос в каждой игре
  for (let i = 0; i < gameMoves; i += 1) {
    const [correctAnswer, dataToPrint] = getGameData();

    console.log(`Question: ${dataToPrint}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
