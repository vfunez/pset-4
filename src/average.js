const readlineSync = require("readline-sync");

let nonNegativeInteger = 1

console.log();

while (nonNegativeInteger > 0 ||
       nonNegativeInteger < Number.MAX_SAFE_INTEGER) {

    nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));

    if (nonNegativeInteger < 0) {
        nonNegativeInteger = nonNegativeInteger + 0;
}
}
console.log("\n" + nonNegativeInteger);

//WORK ON THIS AT HOME
