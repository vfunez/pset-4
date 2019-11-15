const readlineSync = require("readline-sync");

let positiveInteger = 0;

console.log();

while (positiveInteger > Number.MAX_SAFE_INTEGER ||
       positiveInteger < 1) {

    positiveInteger = Number(readlineSync.question("Positive integer: "));
}

console.log();
