const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger = MAX + 1;
let print = 0;

console.log();

while (positiveInteger < MIN ||
       positiveInteger > MAX) {

    positiveInteger = Number(readlineSync.question("Positive integer: "));
}

while (positiveInteger > 0) {
    let number = positiveInteger % 10;
      positiveInteger = Math.floor(positiveInteger / 10);

    if (number % 2 === 1) {
      print = print + number;
  }
}

console.log("\n" + print + ".");
