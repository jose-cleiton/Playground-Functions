// Desafio 1
const compareTrue = (one, two) => !!(one === true && two === true);
// Desafio 2
const calcArea = (base, height) => (base * height) / 2;
// Desafio 3
const splitSentence = (string) => string.split(' ');
// Desafio 4
const concatName = (arrayStrings) => {
  let lastItem = arrayStrings[arrayStrings.length - 1];
  let firstItem = arrayStrings[0];
  return `${lastItem}, ${firstItem}`;
};
// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;
// Desafio 6
const highestCount = (arrayNumbrs) => {
  let cont = 0;
  let maxNumbrs = Math.max.apply(null, arrayNumbrs);
  arrayNumbrs.forEach((item) => {
    if (item === maxNumbrs) cont += 1;
  });
  return cont;
};
// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (mouse - cat1 > mouse - cat2) {
    return 'cat1';
  }
  return 'cat2';
};
// Desafio 8
const fizzBuzz = (arr) => {
  let arrTeste = [];
  arr.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      arrTeste.push('fizzBuzz');
    } else if (element % 3 === 0) {
      arrTeste.push('fizz');
    } else if (element % 5 === 0) {
      arrTeste.push('buzz');
    } else {
      arrTeste.push('bug!');
    }
  });
  return arrTeste;
};

// Desafio 9
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

const decode = (string) => {
  const a = [...string];
  const b = [...string];
  const obj = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  Object.entries(obj).forEach((key) => {
    a.forEach((element, i) => {
      if (key[0] === element) {
        // eslint-disable-next-line prefer-destructuring
        b[i] = key[1];
      }
    });
  });
  return b.join('');
};

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
