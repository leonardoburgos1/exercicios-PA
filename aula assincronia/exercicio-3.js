const input = require("readline-sync");

console.log('--Me de 5 Numeros e veja a soma--');

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = input.questionInt("Digite o numero: ");
    soma += numero;
}

console.log('A Soma dos numeros é', soma);

//for: foi usado porque Sei quantas vezes preciso repetir//