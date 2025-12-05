var input = require('readline-sync');

const aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia"
};

function apresentarAluno(obj) {
    return `O aluno ${obj.nome} tem ${obj.idade} anos e está cursando ${obj.curso}.`;
}

console.log(apresentarAluno(aluno));
