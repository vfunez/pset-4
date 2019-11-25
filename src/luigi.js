const readlineSync = require("readline-sync");

let height = 0;
let i = "";
let j = "";
let print = "";

console.log();

while (height < 1||
       height > 24) {

    height = Number(readlineSync.question("Height: "));
}
for (i = 1; i <= height; i = i + 1) {
    for (j = 0; j < height - i; ++j) {
        print += " ";
    }
    for (j = -1; j < i; ++j) {
        print += "#"
    }
    print += " ";
    for (j = -1; j < i; ++j) {
        print += "#"
    }
    print += "\n";
    }
    console.log("\n"+ print);
