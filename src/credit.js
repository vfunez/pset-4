const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 9999999999999999;

let creditCardNumber = 0;
let creditCardNumberTwo = 0;
let digit = 0;
let firstDigit = 0;
let lastDigits = 0;
let singleDigit = 0;
let checkSum = 0;
let x = 0;

console.log();

  do {
    creditCardNumber = Number(readlineSync.question("Number: "));
}
  while (creditCardNumber < MIN || creditCardNumber > MAX);
    creditCardNumberTwo = creditCardNumber;

  while (creditCardNumberTwo >= 1) {
    creditCardNumberTwo = creditCardNumberTwo / 10;
    digit = digit + 1;
}

  firstDigit = Math.floor(creditCardNumber / 10 ** (digit - 1));
  lastDigits = (Math.floor(creditCardNumber / 10 ** (digit - 2)) / 10 * 10);

  for (let i = 0; i < digit; i++) {
  singleDigit = (creditCardNumber - Math.floor(creditCardNumber / 10) * 10);
  creditCardNumber = Math.floor (creditCardNumber / 10);
      if (i % 2 === 1) {
        if (singleDigit * 2 >= 10) {
        checkSum = checkSum + ((singleDigit * 2 - singleDigit * 2 % 10) / 10 + singleDigit * 2 % 10);
        }
          else if (singleDigit * 2 < 10) {
          checkSum = checkSum + singleDigit * 2;
          }
      }   else {
          checkSum = checkSum + singleDigit;
      }
          ++x;
}
  if (checkSum / 10 % 1 !== 0) {
    console.log("\nInvalid.\n");
  }
    else if (digit == 15 && (lastDigits == 34 || lastDigits == 37)){
    console.log("\nAmex.\n");
  }
    else if (digit == 16 && (lastDigits >= 51 && lastDigits <= 55)){
    console.log("\nMastercard.\n");
  }
    else if ((digit == 13 || digit == 16) && firstDigit == 4){
    console.log("\nVisa.\n");
}
