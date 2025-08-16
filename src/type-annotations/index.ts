/* eslint-disable */

/* const let ou var id_da_variavel: type da variavel = valor da variavel*/
let nome: string = 'Jonh'; //Ainda ocorre a inferência de tipos
let sobrenome = 'Luiz'; //Tipagem dinamica

/* Tipos básicos (Onde ocorre a inferencia de tipos)
ex.: */
let idade: number = 18;
let adulto: boolean = false;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

//Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];
let arrayOfStrings2: string[] = ['a', 'b', 'c'];

//Objects
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: 'rawl',
};

console.log(pessoa.nome);

//Functions
function soma(x: number, y: number): number {
  return x + y;
}
