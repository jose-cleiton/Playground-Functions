// Desafio 10
const techList = (tec, name) => {
  // seu código aqui
  const compare = (a, b) => {
    if (a.tech < b.tech) return -1;
    if (a.tech > b.tech) return 1;
    return 0;
  }
  let arrObj = [];
  if (tec.length === 0) return 'Vazio!';
  tec.forEach((item) => arrObj.push({ tech: item, name }));
  return arrObj.sort(compare);
}
// Desafio 11
/*
  Essa função peguei do blog
   https://wbruno.com.br/expressao-regular/mascara-campo-de-telefone-em-javascript-com-regex-nono-digito-telefones-sao-paulo/
  */
function generatePhoneNumber(phoneNumber) {
  function mtel(v) {
    v = v.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
    v = v.replace(/(\d)(\d{4})$/, '$1-$2');
    return v;
  }
  function count(array_elements) {
    let array_elementsOrdenado = Array.from(array_elements);
    array_elementsOrdenado.sort();
    let current = null;
    let cnt = 0;
    for (let i in array_elementsOrdenado) {
      if (array_elementsOrdenado[i] != current) {
        if (cnt >= 3) {
          return true;
        }
        current = array_elementsOrdenado[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
  }
  /* ----------------------------------------------------------------*/

  if (phoneNumber.length === 11) {
    for (let i in phoneNumber) {
      if (count(phoneNumber)) {
        return 'não é possível gerar um número de telefone com esses valores';
      } if (phoneNumber[i] < 0 || phoneNumber[i] > 9) {
        return ('não é possível gerar um número de telefone com esses valores');
      }
    }
  } else {
    return ('Array com tamanho incorreto.');
  }
  return mtel(phoneNumber.toString());
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function checkMeasures(lineA, lineB, lineC) {
    if (lineA > (lineB + lineC)) {
      return false;
    } if (lineB > (lineA + lineC)) {
      return false;
    } if (lineC > (lineA + lineB)) {
      return false;
    }
    return true;
  }

  function differenceMeasure(lineA, lineB, lineC) {
    if (lineA > Math.abs((lineB - lineC))) {
      return false;
    } if (lineB > Math.abs((lineA - lineC))) {
      return false;
    } if (lineC > Math.abs((lineA - lineB))) {
      return false;
    }
    return true;
  }
  if (checkMeasures(lineA, lineB, lineC)) {
    return true;
  }
  return false;

  if (differenceMeasure(lineA, lineB, lineC)) {
    return true;
  }
  return false;

  if (checkMeasures(lineA, lineB, lineC) && differenceMeasure(lineA, lineB, lineC)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(drink) {
  let glassOfWater = 0;
  for (let i in drink) {
    if (drink[i] === ' ') {
      continue;
    } else if (!isNaN(drink[i])) {
      glassOfWater += parseInt(drink[i]);
    }
  }
  if (glassOfWater === 1) {
    return `${glassOfWater} copo de água`;
  }
  return `${glassOfWater} copos de água`;

  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
