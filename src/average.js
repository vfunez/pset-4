const readlineSync = require("readline-sync");

let nonNegativeInteger = 1;
let sum = 0;

console.log();

while (nonNegativeInteger > 0 ||
       nonNegativeInteger > Number.MAX_SAFE_INTEGER) {

    nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));

    if (nonNegativeInteger < 0) {
        nonNegativeInteger = nonNegativeInteger + 0;
        sum = sum + 1
      }
}
let average = nonNegativeInteger / sum
average = average.toLocaleString('en', {minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + nonNegativeInteger + "\n");

//umm idk
