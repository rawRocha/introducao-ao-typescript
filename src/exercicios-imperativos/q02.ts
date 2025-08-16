/*  Questão 2: Número Informado
 Faça umprograma que peça um número e então mostre a mensagem:
 O número informado foi [número]. */

import { question, closeRl } from '../utils/question';

async function main() {
  const n1 = Number(await question('Informe um numero: \n'));

  console.log('O numero informado foi: ' + n1);
  closeRl();
}

main();
