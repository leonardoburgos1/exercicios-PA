var input = require('readline-sync');

const carrinho = [
    { nome: "Camiseta", quantidade: 2, preco: 50 },
    { nome: "Calça", quantidade: 1, preco: 120 },
    { nome: "Boné", quantidade: 3, preco: 30 }
];

function calcularTotal(itens) {
    let total = 0;

    for (let item of itens) {
        total += item.preco * item.quantidade;
    }

    return total;
}

console.log(calcularTotal(carrinho));
