// Desafio 1
function compareTrue(parameterOne, parametertwo) {
       if (parameterOne===true && parametertwo === true) {
         return true;
       }else {
         return false;
       }
}

// Desafio 2
function calcArea(base,height) {

  return (base*height)/2;
  
}

// Desafio 3
function splitSentence(string) {
  let Array = string.split(' ',);
 
  return Array;
  // seu código aqui
}


// Desafio 4
function concatName(arrayStrings) {
    let lastItem = (arrayStrings[arrayStrings.length - 1])
    let firstItem =(arrayStrings[0])
    let varConcatName = lastItem + ', ' + firstItem; 
    return varConcatName;
  // seu código aqui
}
 

// Desafio 5
function footballPoints(wins, ties) {
  let amountOfPoints = (wins*3) + ties
  return amountOfPoints;
  // seu código aqui
}


// Desafio 6
function highestCount(arrayNambrs) {
  let cont=0;
  let maxNumbrs = Math.max.apply(null, arrayNambrs );
   for (let key in arrayNambrs) {
        if(maxNumbrs ===arrayNambrs[key]) {
          cont+=1;
        }
         
   }
   
  return cont;
  // seu código aqui
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
