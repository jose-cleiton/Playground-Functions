// Desafio 10
function techList(tecnologias,name) {
  // seu código aqui
  function compare(a,b) {
    if (a.tech < b.tech)
       return -1;
    if (a.tech > b.tech)
      return 1;
    return 0;
  }
  let arrayDeObjeto=[];
  if (tecnologias.length === 0) {
    return 'Vazio!'
  }else {
          for (let i in tecnologias) {
            arrayDeObjeto.push({tech :tecnologias[i],
                                name :name
            })

          }
  }
//console.log(arrayDeObjeto)
return arrayDeObjeto.sort(compare);
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas')


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
