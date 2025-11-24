const input = require("readline-sync");

let opcao = -1;

while (opcao != 0) {
    console.log("==============🎮 MENU PRINCIPAL ⚔️=================");
    console.log("1 - contagem (1 a 100)");
    console.log("2 - pares e impares até um número");
    console.log("3 - soma de 5 números");
    console.log("4 - contagem regressiva");
    console.log("5 - tabuada");
    console.log("6 - Média de Notas");
    console.log("7 - Maior e Menor Número");
    console.log("8 - Senha Correta");
    console.log("9 - Contar Vogais");
    console.log("10 - Fatorial");
    console.log("11 - Sequência de Fibonacci");
    console.log("12 - Número Primo");
    console.log("13 - Estatísticas");
    console.log("14 - Caixa de Loja");
    console.log("0 - Sair");
    console.log("==================✔👀==============================");

    opcao = input.questionInt("Escolha uma opção: ");

    switch (opcao) {

        // 1--------------------
        case 1:
            console.log("Opção 1 selecionada");
            for (let i = 1; i <= 100; i++) {
                console.log(i);
            }
            break;

        // 2--------------------
        case 2:
            console.log("Opção 2 selecionada");

            for (let i = 1; i <= 10; i += 2) {
                console.log(i, "ímpar");
            }
            for (let i = 2; i <= 10; i += 2) {
                console.log(i, "par");
            }
            break;

        // 3--------------------
        case 3:
            console.log("Opção 3 selecionada");

            console.log('--Me dê 5 números e veja a soma--');
            let soma = 0;

            for (let i = 1; i <= 5; i++) {
                let numero = input.questionInt("Digite o número: ");
                soma += numero;
            }
            console.log("A soma dos números é", soma);
            break;

        // 4--------------------
        case 4:
            console.log("Opção 4 selecionada");

            let NI = -1;

            while (NI < 0) {
                NI = input.questionInt("Digite um número positivo: ");

                if (NI >= 0) {
                    console.log(`Contagem regressiva de ${NI} até zero:`);

                    for (let i = NI; i >= 0; i--) {
                        console.log(i);
                    }

                } else {
                    console.log("Número menor que zero, tente novamente!");
                }
            }
            break;

        // 5--------------------
        case 5:
            console.log("Opção 5 selecionada");

            for (let i = 1; i <= 10; i++) {
                console.log(`3 x ${i} = ${3 * i}`);
            }

            let num = input.questionInt("Digite um número: ");
            for (let i = 1; i <= 10; i++) {
                console.log(`${num} x ${i} = ${num * i}`);
            }
            break;

        // 6--------------------
        case 6:
            console.log("Opção 6 selecionada");

            let NumAlunos = input.questionInt("Quantos alunos? ");

            for (let i = 1; i <= NumAlunos; i++) {

                let somaNotas = 0;
                console.log(`\nAluno ${i}:`);

                for (let j = 1; j <= 3; j++) {
                    let nota = input.questionInt(`Digite a nota ${j}: `);
                    somaNotas += nota;
                }

                let media = somaNotas / 3;
                console.log(`Média: ${media}`);

                if (media >= 7) {
                    console.log("Aprovado");
                } else if (media <= 5) {
                    console.log("Recuperação");
                } else {
                    console.log("Reprovado");
                }
            }
            break;

        // 7--------------------
        case 7:
            console.log("Opção 7 selecionada");

            let valor7;
            let maior = null;
            let menor = null;

            while (true) {
                valor7 = input.questionInt("Digite um número (0 para sair): ");

                if (valor7 === 0) break;

                if (maior === null || valor7 > maior) maior = valor7;
                if (menor === null || valor7 < menor) menor = valor7;
            }

            if (maior !== null) {
                console.log("Maior número:", maior);
                console.log("Menor número:", menor);
            } else {
                console.log("Nenhum número válido digitado.");
            }
            break;

        // 8--------------------
        case 8:
            console.log("Opção 8 selecionada");

            let senha = "";

            while (senha !== "1234") {
                senha = input.question("Digite a senha: ");
                if (senha !== "1234") console.log("Senha incorreta!");
            }

            console.log("Acesso permitido!");
            break;

        // 9--------------------
        case 9:
            console.log("Opção 9 selecionada");

            let palavra = input.question("Digite uma palavra: ");
            let contadorVogais = 0;

            for (let i = 0; i < palavra.length; i++) {
                let letra = palavra[i].toLowerCase();
                if ("aeiou".includes(letra)) contadorVogais++;
            }

            console.log("Quantidade de vogais:", contadorVogais);
            break;

        // 10-------------------
        case 10:
            console.log("Opção 10 selecionada");

            let numeroF = input.questionInt("Digite um número: ");
            let fatorial = 1;

            for (let i = numeroF; i >= 1; i--) {
                fatorial *= i;
            }

            console.log(`${numeroF}! = ${fatorial}`);
            break;

        // 11-------------------
        case 11:
            console.log("Opção 11 selecionada");

            let n = input.questionInt("Quantidade de termos: ");

            let a = 1, b = 1;

            if (n >= 1) console.log(a);
            if (n >= 2) console.log(b);

            for (let i = 3; i <= n; i++) {
                let c = a + b;
                console.log(c);
                a = b;
                b = c;
            }
            break;

        // 12-------------------
        case 12:
            console.log("Opção 12 selecionada");

            let numeroP = input.questionInt("Digite um número: ");
            let primo = true;

            if (numeroP <= 1) {
                primo = false;
            } else {
                for (let i = 2; i < numeroP; i++) {
                    if (numeroP % i === 0) {
                        primo = false;
                        break;
                    }
                }
            }

            console.log(primo ? `${numeroP} é primo` : `${numeroP} não é primo`);
            break;

        // 13-------------------
        case 13:
            console.log("Opção 13 selecionada");

            let soma13 = 0;
            let cont13 = 0;
            let maior13 = null;
            let menor13 = null;

            while (true) {
                let numeroX = input.questionInt("Digite um número (0 para sair): ");

                if (numeroX === 0) break;

                soma13 += numeroX;
                cont13++;

                if (menor13 === null || numeroX < menor13) menor13 = numeroX;
                if (maior13 === null || numeroX > maior13) maior13 = numeroX;
            }

            if (cont13 > 0) {
                let media13 = soma13 / cont13;
                console.log("Quantidade:", cont13);
                console.log("Média:", media13);
                console.log("Maior:", maior13);
                console.log("Menor:", menor13);
            } else {
                console.log("Nenhum número válido digitado.");
            }
            break;

        // 14-------------------
        case 14:
            console.log("Opção 14 selecionada");

            let total = 0;
            let valor14 = -1;

            while (valor14 !== 0) {
                valor14 = input.questionInt("Digite um valor (0 para sair): ");
                total += valor14;
            }

            console.log("Total a pagar:", total);
            break;

        // default--------------
        default:
            console.log("Opção inválida!");
            break;
    }
}

