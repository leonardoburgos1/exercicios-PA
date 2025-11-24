const input = require("readline-sync");
//exercicio-1


const carteira = ["cartao", "moedas", "RG", "habilitacao","foto" ];

console.log(carteira[2]);

//exercicio-2

const carro = {
    modelo: "palio",
    ano: "2000",
    fabricante: "Fiat"

}
console.log(carro.ano);

//exercicio-3
 function bemVindo(){
    let nome = input.question("Digite seu nome: ");
    console.log(`bem vindo!!! ${nome}`);
    
 }
 bemVindo()

//exercicio-4
const estojo = ["lapis", "caneta", "borracha"]



//exercicio-5

const pessoa = {
    nome: "leo",
    idade: 22,

    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

pessoa.apresentar();


