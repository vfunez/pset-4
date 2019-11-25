const readlineSync = require("readline-sync");

let positiveInteger = 0;
let a = 1;
let b = 0;
let print = "";

console.log();

while (positiveInteger < 1||
       positiveInteger > Number.MAX_SAFE_INTEGER) {

    positiveInteger = Number(readlineSync.question("Positive integer: "));
}
while (a <= Math.floor(Math.sqrt(positiveInteger))){
      if (a <= positiveInteger){
         b = positiveInteger % a
      if (a === Math.floor(Math.sqrt(positiveInteger))){
         print = print + a + "."
      break;
      }
      else if ( b === 0){
         print = print + a + ", " + (positiveInteger / a) + ", "
      }
      a++
      }
}
console.log("\n" + print + "\n");
