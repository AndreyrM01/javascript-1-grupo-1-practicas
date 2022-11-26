//Escriba un programa que solicite un número al usuario e imprima en la consola si el
//número es primo (solo divisible entre 1 y él mismo) o no.
function primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        console.log(i + " es un multiplo de " + numero);
        console.log(numero + " no es un numero primo porque es multiplo de " + i);
        return false;
      }
    }
    if (numero === 1) {
      console.log("Has ingresado el numero 1, este numero no es primo");
    } else {
      console.log("Tu numero resulto no siendo primo");
    }
  }
  
  primo(56);
  
  var variable1 = prompt ('Ingrese el valor a ');
  var variable2 = prompt ('Ingrese el valor b ');
  var variable3 = prompt ('Ingrese el valor c ');
  
  function option1 (variable1, variable2, variable3){
    if (a===0)
    //Math.sqrt: Raíz cuadrada
    //Math.pow (variable2, exponente): Elevar un valor a un determinado número
    return (((-1)*variable2)-(Math.sqrt(Math.pow (variable2,2))-(4*variable1*variable3))))/(2*variable1);
  }
  var resultadoOption1 = option1 (variable1, variable2, variable3);
  console.log ("option1 = "  + resultadoOption1);
  
  function option2 (variable1, variable2, variable3){
    return (((-1)*variable2)+(Math.sqrt(Math.pow (variable2,2))+(4*variable1*variable3))))/(2*variable1);
  }
  var resultadoOption2 = option2 (variable1, variable2, variable3);
  console.log ("option2 = " + resultadoOption2)
  
  // Escriba un programa que imprima todos los números del 1 al 100, uno por línea.
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  
  //Modifique el programa anterior para que sólo imprima los números pares.
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
  }
  
  //Modifique el programa del ejercicio 4 para que imprima 10 números por línea,separados por un espacio. 
  //La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20, la tercera del 21 al 30 y así hasta llegar a 100.
  for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (1 % 10 === 0){
      console.log('');
    }
  }