const input = require('readline-sync');

let NI = -8;

while (NI < 0) {

  NI = input.questionInt("digite um numero: ");

  if (NI >= 0) {
    console.log(`contagem regressiva de ${NI} até zero:`)

    for (NI; NI >= 0; NI--) {
      console.log(NI)
    }
    NI = 1;

  } else {

    console.log(NI, "menor que zero, insira um numero maior que zero..");

  }

}


//usei o for porque Sei quantas vezes preciso repetir a contagem  //
//   usei o while por conta do numero que o usuario pode colocar,//
//  o for foi complemento do while caso o usuario digite um valor menor que zero//