# Introdução ao TypeScript

# 📚 Introdução ao TypeScript

Este repositório contém meus estudos e exemplos práticos de **TypeScript**, cobrindo desde conceitos básicos até recursos mais avançados da linguagem.

## 🚀 Objetivo

Aprender e praticar os fundamentos do TypeScript, entendendo como ele melhora a produtividade e segurança no desenvolvimento JavaScript.

## 📦 Dependências de Desenvolvimento

Este projeto utiliza as seguintes _devDependencies_:

| Pacote                                                                                                 | Versão  | Descrição                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**@eslint/js**](https://www.npmjs.com/package/@eslint/js)                                             | ^9.33.0 | Configuração oficial do ESLint para JavaScript, oferecendo regras padrão prontas para uso.                                                         |
| [**@types/node**](https://www.npmjs.com/package/@types/node)                                           | ^24.3.0 | Tipos TypeScript para APIs do Node.js, permitindo autocomplete e checagem de tipos ao usar recursos nativos do Node.                               |
| [**@typescript-eslint/eslint-plugin**](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | ^8.39.1 | Conjunto de regras ESLint específicas para projetos TypeScript, ajudando a manter um código limpo e consistente.                                   |
| [**@typescript-eslint/parser**](https://www.npmjs.com/package/@typescript-eslint/parser)               | ^8.39.1 | Parser que permite ao ESLint compreender o código TypeScript.                                                                                      |
| [**eslint**](https://eslint.org/)                                                                      | ^9.33.0 | Ferramenta para encontrar e corrigir problemas no código JavaScript/TypeScript.                                                                    |
| [**eslint-config-prettier**](https://www.npmjs.com/package/eslint-config-prettier)                     | ^10.1.8 | Desativa regras do ESLint que possam conflitar com o Prettier, garantindo formatação consistente.                                                  |
| [**eslint-plugin-prettier**](https://www.npmjs.com/package/eslint-plugin-prettier)                     | ^5.5.4  | Integra o Prettier ao ESLint, permitindo que problemas de formatação sejam exibidos como erros no ESLint.                                          |
| [**prettier**](https://prettier.io/)                                                                   | ^3.6.2  | Formatador de código automático para JavaScript, TypeScript e outros, garantindo um estilo consistente em todo o projeto.                          |
| [**ts-node**](https://typestrong.org/ts-node/)                                                         | ^10.9.2 | Permite executar arquivos `.ts` diretamente no Node.js sem precisar compilá-los manualmente para `.js`. Útil para testes e desenvolvimento rápido. |
| [**typescript**](https://www.typescriptlang.org/)                                                      | ^5.9.2  | Superset do JavaScript que adiciona tipagem estática e outros recursos. É o compilador oficial usado para converter `.ts` em `.js`.                |
| [**typescript-eslint**](https://www.npmjs.com/package/typescript-eslint)                               | ^8.39.1 | Pacote que unifica a integração do TypeScript com o ESLint, oferecendo ferramentas para análise estática e padronização do código.                 |

🔹 **Por que estão em `devDependencies`?**
Essas bibliotecas são necessárias apenas durante o desenvolvimento, não em produção. O código final compilado para JavaScript não depende delas para ser executado.
