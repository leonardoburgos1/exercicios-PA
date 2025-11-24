const input = require("readline-sync");


console.log("digite o numero correto!");
let valor;
let maior = null;
let menor = null;

while (true) {
  valor = input.questionInt("Digite um numero (0 para sair): ");

  if (valor === 0) break;

  if (maior === null || valor > maior) {
    maior = valor;
  }

  if (menor === null || valor < menor) {
    menor = valor;
  }
}

if (maior !== null && menor !== null) {
  console.log("Maior número:", maior);
  console.log("Menor número:", menor);

} else {
  console.log("Nenhum número válido foi digitado.");
}

//while Não sabemos quantas vezes vai repetir//