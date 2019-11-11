const readlineSync = require("readline-sync");

const userLowerBound = Number(readlineSync.question("\nLower bound: "));
const userUpperBound = Number(readlineSync.question("Upper bound: "));

let lowerBound = userLowerBound;
let upperBound = userUpperBound;
while (lowerBound > upperBound) && (lowerBound < Number.MIN_SAFE_INTEGER) && (lowerBound > Number.MAX_SAFE_INTEGER) && (upperBound < Number.MIN_SAFE_INTEGER) && (upperBound > Number.MAX_SAFE_INTEGER);{
    lowerBound = Number(readlineSync.question("Lower bound: "));
    lowerBound = Number(readlineSync.question("Upper bound: "));

    if (lowerBound < upperBound) {
        let n = (upperBound - lowerBound) + 1
        let sum = (n / 2)(lowerBound + upperBound)
    }
}

console.log("\n" + sum + "\n");
