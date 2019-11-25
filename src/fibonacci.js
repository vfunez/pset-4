const readlineSync = require("readline-sync");

let positiveInteger = -1;
let a = 0;
let b = 1;
let c = 1;

console.log();

while (positiveInteger < 1||
       positiveInteger > 78 ||
       !Number.isInteger(positiveInteger)||
        Number.isNaN(positiveInteger)){

    positiveInteger = Number(readlineSync.question("Positive integer: "));
}

for (i = 2; i <= positiveInteger; i++){
    c = a + b;
    a = b;
    b = c;
}
console.log(`\n${c.toLocaleString()}.\n`);
