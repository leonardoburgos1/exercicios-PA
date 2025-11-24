const input = require("readline-sync");

let palavra = input.question(" digite uma palavra: ");
let contadorvogais = 0;

for(i = 0; i < palavra.length; i++) {

    let letra = palavra[i] .toLowerCase();
    if(letra === `a` || letra === `e` || letra === `i` || letra === `o` || letra === `u` ) {
        contadorvogais++;
    }
}
console.log("quantidade de vogais: ", contadorvogais )