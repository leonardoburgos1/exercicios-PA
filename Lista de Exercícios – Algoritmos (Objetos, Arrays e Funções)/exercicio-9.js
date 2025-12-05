var input = require('readline-sync');

const conta = {
    agencia: "0001",
    numero: "12345-6",
    senha: "1234",
    saldo: 800,
    historico: []
};

function validarAcesso(ag, num, sen) {
    return ag === conta.agencia && num === conta.numero && sen === conta.senha;
}

function verSaldo() {
    return conta.saldo;
}

function sacar(valor) {
    if (valor > conta.saldo) {
        return "Saldo insuficiente!";
    }

    conta.saldo -= valor;
    conta.historico.push(`Saque de R$${valor}`);

    let notas = {};
    let cedulas = [100, 50, 20, 10];

    for (let c of cedulas) {
        notas[c] = Math.floor(valor / c);
        valor = valor % c;
    }

    return notas;
}

console.log(validarAcesso("0001", "12345-6", "1234"));
console.log(verSaldo());
console.log(sacar(280));
console.log(conta);
