const readlineSync = require("readline-sync");

let positiveInteger = 0;
let print = 0;

console.log();

while (positiveInteger > Number.MAX_SAFE_INTEGER ||
       positiveInteger < 1 ||
       !Number.isInteger(positiveInteger)||
        Number.isNaN(positiveInteger)){

    positiveInteger = Number(readlineSync.question("Positive integer: "));
}

while (positiveInteger > 0) {
    let number = positiveInteger % 10;
    positiveInteger = Math.floor(positiveInteger / 10);

    if (positiveInteger > 0) {
    print = print + number + ", ";

}   else {
    print = print + number + ".";

  }
}

console.log("\n" + print + "\n");
