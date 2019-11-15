const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger = MAX + 1;

console.log();

while (positiveInteger < MIN ||
       positiveInteger > MAX) {

    positiveInteger = Number(readlineSync.question("Positive integer: "));
}

console.log();
