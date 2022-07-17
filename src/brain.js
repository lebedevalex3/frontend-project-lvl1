import name from './cli.js';

console.log('Welcome to the Brain Games !');
const userName = name();
console.log(`Hello, ${userName}!`);

export { userName };
