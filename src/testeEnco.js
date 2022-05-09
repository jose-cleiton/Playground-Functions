/**
 * 9 - Crie uma função que Codifique e Decodifique
Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

O que será verificado:

Retorne uma string codificada quando a função encode for utilizada

Retorne uma string decodificada quando a função decode for utilizada
 */

const encode = (string) => {
  const a = [...string];
  const b = [...string];
  const obj = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  Object.entries(obj).forEach((key) => {
    a.forEach((element, i) => {
      if (key[0] === element) {
        b[i] = key[1];
      }
    });
  });
  return b.join('');
};
encode('hi there!');
