const nomes = ["Ana", "Lucas", "Bianca", "Marcos"];
const readline = require("readline");

// Cria interface de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário
rl.question("Digite o nome que deseja buscar: ", function(nomeUsuario) {
    if (nomes.includes(nomeUsuario)) {
        console.log(`O nome "${nomeUsuario}" já existe na lista.`);
    } else {
        console.log(`O nome "${nomeUsuario}" não existe na lista.`);
    }
    rl.close();
});
