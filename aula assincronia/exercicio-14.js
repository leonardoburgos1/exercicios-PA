const input = require("readline-sync");

let totalpagar = 0;
let valor = -1;

while (valor != 0) {
  valor = input.questionInt("digite um numero :  (0 para sair) ")
    totalpagar = totalpagar + valor;
}

console.log("total a pagar: ", totalpagar);