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
function catAndMouse(mouse, cat1, cat2) {
  

      if  (((mouse-cat1) === (cat2-mouse))){
        return 'os gatos trombam e o rato foge'
      } 
     if (mouse-cat1 > mouse-cat2) {
         return 'cat1';
      } else if (mouse-cat2 > mouse-cat1) {
          return 'cat2';
      } 


  // seu código aqui
}
// Desafio 8
function fizzBuzz(arrayNumber) {
  
  let arrayNambrsTesting=[];
  for ( let key in arrayNumber){
      if (arrayNumber[key]%3==0 && arrayNumber[key]%5==0){
        arrayNambrsTesting.push("fizzBuzz");
      } else if (arrayNumber[key]%3 == 0) {
        arrayNambrsTesting.push("fizz");
      } else if(arrayNumber[key]%5==0) {
        arrayNambrsTesting.push("buzz");
      } else {
        arrayNambrsTesting.push("bug!");
      }
  }    
  return arrayNambrsTesting;
}   
 
// Desafio 9
function encode(strings) {
  let a =/''/
 
 let encode='';
 for (let i in strings){
     strings[i] = strings.charAt(i);
     if (a.test(strings[i])) {
       encode+=strings[i];
     }else if (!isNaN(strings[i] * 1)){
         encode+=strings[i];
     }else if (strings[i] === strings[i].toUpperCase()) {
           encode+=strings[i];
         }else if (strings[i] === strings[i].toLowerCase()){
             if(strings[i]=='a') {
                 encode+='1';
             } else if(strings[i]=='e') {
                 encode+='2';
             }else if(strings[i]=='i') {
                 encode+='3';
             } else if(strings[i]=='o') {
                 encode+='4'; 
             } else if(strings[i]=='u') {
                 encode+='5';  
             } else {
                 encode+=strings[i];
                     }    
         }       }

 return encode;
}
  // seu código aqui

function decode(strings) {
    let encode='';
 for (let i in strings){
   if(strings[i]==='1') {
        encode+='a';
    } else if(strings[i]==='2') {
        encode+='e';
    }else if(strings[i]=='3') {
        encode+='i';
    } else if(strings[i]==='4') {
        encode+='o'; 
    } else if(strings[i]==='5') {
        encode+='u';  
    } else {
           encode+=strings[i];
       }    
             
  }                            
      return encode;
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
