import name from './cli.js';

const start = () => {
  console.log('Welcome to the Brain Games!');
  const userName = name();
  console.log(`Hello, ${userName}!`);
};

export default () => start();
