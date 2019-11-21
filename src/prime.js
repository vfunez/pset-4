const readlineSync = require("readline-sync");

let nonNegativeInteger = -1

console.log();

do {
  nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (nonNegativeInteger < 0 || nonNegativeInteger > Number.MAX_SAFE_INTEGER || !Number.isInteger(nonNegativeInteger) || Number.isNaN(nonNegativeInteger));

let isPrime = false;

for (let i = 2; (i * i) < nonNegativeInteger; i++) {
  if (nonNegativeInteger % i == 0) {
    isPrime = false;
    break;
  } else {
    isPrime = true;
  }
}
// while (nonNegativeInteger > 0||
//       nonNegativeInteger < Number.MAX_SAFE_INTEGER) {
//         let valueOne = (nonNegativeInteger - 1);
//         let valueTwo = (-1 % nonNegativeInteger);
// }
if (isPrime){
        console.log("Prime");

} else {
        console.log("Not prime.");

}

//WORK ON THIS AT HOME
