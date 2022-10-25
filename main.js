//Variables
numeros([25, 128, 80, 14, 9, 127])
let pali = [];
const array = [
  [1,0,0], 
  [0,1,1],
  [0,1,0]];
let zero = 0;
let repetir = [];
let piramide = 10

//Ejercicio 1
function numeros(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);

}


//EJERCICIO 2

function palindromo(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    pali.push(string[i]);
  }
  const revert = pali.join("");
  if (revert === string) {
    return "Si es palindromo";
  } else {
    return "No es palindromo";
  }
}
console.log(palindromo("reconocer"));
// console.log(palindromo("profesor"));


//EJERCICIO 3

function cero(){
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == 0){
        zero ++;
      }
    }
  }
  return 'La cantidad de ceros es: ' +zero
  }
  
  console.log(cero())


 //EJERCICIO 4

function again(num){
  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] === num[i]) {
      repetir.push(num[i]);   
    }  
  } 
    if(repetir.length >= 1){
      return repetir;
    }
    else{
      return 'No se encontraron números repetidos en la lista de números recibida'
    }
  }
  // console.log(again([ 1, 2, 3, 3, 3, 4, 4, 5, 6]))
  console.log(again([ 1, 2, 3, 4, 5, 6, 7, 8, 9]))


  //EJERCICIO 5

for(let i = 0; i < piramide; i++) {
  let elemento = '';
for(let j = 1 ; j < i; j++){
  elemento += '* '
}
console.log(elemento)
}