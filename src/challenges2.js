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
 /* 
  Essa função peguei do blog
   https://wbruno.com.br/expressao-regular/mascara-campo-de-telefone-em-javascript-com-regex-nono-digito-telefones-sao-paulo/ 
  */
function generatePhoneNumber(phoneNumber) {
      function mtel(v){
          v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
          v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
          v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
          return v;
      }
      /*--------------------------------------------------------*/
      /* funçao baseada no artigo 
      https://www.ti-enxame.com/pt/javascript/como-contar-o-valor-duplicado-em-uma-matriz-no-javascript/1041477557/ 
      */
      function count(array_elements) {
    
        let  array_elementsOrdenado = Array.from(array_elements)
        array_elementsOrdenado.sort();
    
        var current = null;
        var cnt = 0;
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



  if (phoneNumber.length===11) {
     for (let i in phoneNumber ) {
         if (count(phoneNumber)) {
           return "não é possível gerar um número de telefone com esses valores";
          } else  if (phoneNumber[i]<0 || phoneNumber[i]>9){
            return ("não é possível gerar um número de telefone com esses valores")
          }
      }        
          
  }else {
      return ("Array com tamanho incorreto.")
    }
      return mtel(phoneNumber.toString());
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function  checkMeasures(lineA, lineB, lineC){
    if (lineA >(lineB+lineC)) {
        return false;
    }else if (lineB >(lineA+lineC)) {
        return false;
    }else if (lineC>(lineA+lineB)) {
        return false;

    }else {
        return true;
    }

}

function differenceMeasure(lineA, lineB, lineC){

  if (lineA >Math.abs((lineB-lineC))) {
      return false;
  }else if (lineB >Math.abs((lineA-lineC))) {
      return false;
  }else if (lineC>Math.abs((lineA-lineB))) {
      return false;

  }else {
      return true;
  }

}
if (checkMeasures(lineA, lineB, lineC)) {
  return true;
}else {
  return false
}
if(differenceMeasure(lineA, lineB, lineC)) {
  return true;
}else {
  return false;
}




 if (checkMeasures(lineA, lineB, lineC) && differenceMeasure(lineA, lineB, lineC)) {
    return false;
}  else {
  return true;
}


}

// Desafio 13
function hydrate(drink) {

  let   glassOfWater=0;
  for ( let i in drink) {
    if (drink[i]===' '){
      continue
    }else if (!isNaN(drink[i] )){
      glassOfWater += parseInt(drink[i]);
    }
  }
  if (glassOfWater ===1) {
    return glassOfWater + ' copo de água'
  }else {
    return glassOfWater + ' copos de água'
  }
 
   
  // seu código aqui
}
 
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
