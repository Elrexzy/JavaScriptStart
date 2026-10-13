const userInput = require("prompt-sync")();

let name = userInput("what is your name?: ");
process.stdout.write(`My name is ${name}`);

