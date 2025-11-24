const input = require("readline-sync");



for (let i = 1; i <= 10; i = i + 1) {
  console.log("3 x " + i + " = " + (3 * i));
}

let numero = input.questionInt("digite um numero: ");
for (let tabu = 1; tabu <= 10; tabu = tabu + 1) {

  console.log(`${numero} x ${tabu} = ${numero * tabu}`)
}

//for: foi usado porque Sei quantas vezes preciso repetir//