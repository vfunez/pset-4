const readlineSync = require("readline-sync");

const userLowerBound = readlineSync.question("\nLower bound: ");
const userUpperBound = readlineSync.question("Upper bound: ");

let lowerBound = userLowerBound;
let upperBound = userUpperBound;
while (lowerBound > upperBound) {
    lowerBound = readlineSync.question("Lower bound: ");
    lowerBound = readlineSync.question("Upper bound: ");

    if (lowerBound < upperBound) {
        n = (upperBound - lowerBound) + 1
        sum = (n / 2)(lowerBound + upperBound)
    }
}

console.log(sum);
