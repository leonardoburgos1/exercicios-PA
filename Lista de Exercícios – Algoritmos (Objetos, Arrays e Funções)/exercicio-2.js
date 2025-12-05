var input = require('readline-sync');

const produtos = [
    { nome: "Mouse", preco: 30 },
    { nome: "Teclado", preco: 120 },
    { nome: "Fone", preco: 80 }
];

function filtrarProdutosCaros(lista) {
    return lista.filter(p => p.preco > 50);
}

console.log(filtrarProdutosCaros(produtos));
