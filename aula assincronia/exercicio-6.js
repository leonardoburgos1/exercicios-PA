const input = require("readline-sync");
console.log("  Média de Notas dos alunos ")

let NumAlunos = input.questionInt("quantos alunos?")

for(let i = 1; i <= NumAlunos; i++ ) {
    let somaNotas = 0; 
    console.log(`\nAlunos ${i}:`);

for(let j = 1; j <= 3; j++) {
    let nota = input.questionInt(`digite a nota ${j}:`);
    somaNotas += nota;
}


let media = somaNotas / 3;  
console.log(`\nmedia da nota ${media}`);

if(media >= 7){
    console.log(`\naprovado com nota ${media}`);
}
else if(media <= 5) {
    console.log(`\nrecuperação com media de ${media}`);

}}

//for: foi usado porque Sei quantas vezes preciso repetir//