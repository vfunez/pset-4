const readlineSync = require("readline-sync");

let lowerBound = 1;
let upperBound = 0;

while (lowerBound > upperBound ||
       lowerBound < Number.MIN_SAFE_INTEGER ||
       lowerBound > Number.MAX_SAFE_INTEGER ||
       upperBound < Number.MIN_SAFE_INTEGER ||
       upperBound > Number.MAX_SAFE_INTEGER) {

    lowerBound = Number(readlineSync.question("Lower bound: "));
    upperBound = Number(readlineSync.question("Upper bound: "));
}

let sum = 0;
for (let i = lowerBound; i <= upperBound; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}

console.log(`\n${sum.toLocaleString()}.`);
