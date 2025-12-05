var input = require('readline-sync');

const pessoas = [
    { nome: "Paulo", idade: 17 },
    { nome: "Marina", idade: 22 },
    { nome: "Carlos", idade: 30 }
];

function maioresDeIdade(lista) {
    return lista.filter(p => p.idade > 18);
}

console.log(maioresDeIdade(pessoas));
