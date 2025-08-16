import { question, closeRl } from '../utils/question';

/*  Questão 3: Soma de Dois Números
 Faça um programa que peça dois números e imprima a soma. */

async function main() {
  console.log('A soma de dois numeros!');
  const num1 = Number(await question('Informe n1: \n'));
  const num2 = Number(await question('Informe n2: \n'));

  const soma = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  const result = soma(num1, num2);

  console.log(`A soma dos numeros ${num1} + ${num2} = ${result}`);

  closeRl();
}

main();
