var input = require('readline-sync');

function mediaNotas(notas) {
    let soma = 0;
    for (let n of notas) {
        soma += n;
    }
    return soma / notas.length;
}

console.log(mediaNotas([8, 7, 10, 9]));
