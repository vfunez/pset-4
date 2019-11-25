const readlineSync = require("readline-sync");

let nonNegativeInteger = 1;
let sum = 0;
let a = 0;

console.log();

while (nonNegativeInteger > 0 ||
       nonNegativeInteger > Number.MAX_SAFE_INTEGER) {

    nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));

    if (nonNegativeInteger < 0){
      continue;
    }

    if (nonNegativeInteger !== -1) {
        sum = sum + nonNegativeInteger;
        a = a + 1
      }
}
let average = sum / a
average = average.toLocaleString('en', {minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + average + ".\n");

//umm idk
