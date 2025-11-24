const input = require("readline-sync");

let numero = input.questionInt("digite um numero: ");
let fatorial = 1;

if (fatorial === 0) {
    fatorial = 1;
} else {
    for (let i = numero; i > 1; i--) {
        fatorial = fatorial * i;
        console.log(`${i} fatorial = ${fatorial}`);
    }
    console.log(`${numero}! = ${fatorial}`);
}
