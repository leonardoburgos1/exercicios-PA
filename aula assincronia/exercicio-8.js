const input = require("readline-sync");

let senha;
console.log("senha 1234");

while (senha !== "1234") {
    senha = input.question("digite a senha:  ");
  
    if (senha !== "1234") {
        console.log(" senha invalida, insira a senha correta!");
    }
}
console.log("acesso permitido")

//while Não sabemos quantas vezes vai repetir//