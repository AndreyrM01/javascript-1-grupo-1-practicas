/*Escriba un programa que imprima, utilizando ciclos, un cuadrado de 10x10
caracteres, formado por 2 triángulos, uno con el carácter '#' y el otro con el carácter
'*':*/
function cuadradoCiclo(){
  for (let i = 0; i <= 10; i++) {
    let forma = "";
    for (let j = 10; j >= 1; j--) {
      if (i >= j) {
        forma += "#";
      } else {
        forma += "*";
      }
    }
    console.log(forma);
  }
}

/*Escriba una función que calcule el valor de un número N elevado por otro número
M. (La función debe de recibir ambos parámetros).*/
function elevarNumero (){
let aExponer = 6;
let exponente = 5;
}
console.log('El resultado es '+ Math.pow(aExponer, exponente));

/*Escriba una función que resuelve el problema del ejercicio anterior de manera
recursiva.*/
function recursiva3 (aExponer, exponente){
  if (exponente === 0){
    return 1;
  }else return aExponer * recursiva3(exponente -1);
}

/*Escriba una función recursiva que reciba un arreglo y calcule la suma de sus
elementos.*/
function arregloRecursivo (numero) {
  if(numero.length === 1){
    return numero[0];
  } else {
    return numero.pop(0) + arregloRecursivo(numero);
  }
}

function main(){
  cuadradoCiclo();
  elevarNumero();
  console.log('El resulatdo de esta potencia recursiva es '+ recursiva3(aExponer, exponente));
  console.log("El resultado de la suma es " + arregloRecursivo([2,4,5,7]));
}
main();
