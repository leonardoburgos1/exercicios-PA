var input = require('readline-sync');

const jogadores = [
    { nome: "João", pontos: 120 },
    { nome: "Maria", pontos: 300 },
    { nome: "Carlos", pontos: 180 }
];

function ranking(arr) {
    return arr.sort((a, b) => b.pontos - a.pontos);
}

console.log(ranking(jogadores));
