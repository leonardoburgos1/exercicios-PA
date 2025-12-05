var input = require('readline-sync');

const livros = [
    { titulo: "Livro A", autor: "Autor 1", ano: 2008 },
    { titulo: "Livro B", autor: "Autor 2", ano: 2015 },
    { titulo: "Livro C", autor: "Autor 3", ano: 2021 }
];

function livrosRecentes(arr) {
    return arr.filter(livro => livro.ano > 2010);
}

console.log(livrosRecentes(livros));
