var input = require('readline-sync');

function contarOcorrencias(array) {
    const contagem = {};

    for (let item of array) {
        if (contagem[item]) {
            contagem[item]++;
        } else {
            contagem[item] = 1;
        }
    }

    return contagem;
}

console.log(contarOcorrencias(["a", "b", "a", "c", "b", "a"]));
