/*Escriba un programa que reciba y genere una matriz del tamaño de la entrada y que
contenga una X representada por medio de ‘x’.*/


function crearMatrizenX(n){
    let matrizIdentidad = [];
    for(let i = 0; i < n; i++) {
     let row = [];
      for (let j = 0; j < n; ++j){
        if(1 == j){
          row.push('*');
/*Esto lo vi en la tutoria por que realmente no tenia ni idea de como hacerlo*/
        }else if(j + 2 === n - i){
          row.push('*');
        }else{
          row.push(0);
       }
       matrizIdentidad.push(row)
    }
   return matrizIdentidad;
  }
  console.log(crearMatrizenX(6))

  /*Escriba un programa que reciba dos arreglos con elementos y verifique si ambos
arreglos contienen los mismos elementos. Si ambos arreglos contienen lo mismo
imprima: ‘Los arreglos son iguales’ o si no, imprima los elementos diferentes entre
los dos arreglos.*/

function arreglosSimilares(arreglo1, arreglo2){
  if (arreglo1 instanceof Array && arreglo2 instanceof Array){
    if(arreglo1.length === arreglo2.length){
      for(let i = 0; i < arreglo1.length; i++){
        if(arreglo1[i] !== arreglo2[i]){
          return false;
        }
      }
      return true;
    }
  }else{
      throw Error('Ambos deben ser arreglos')
  }
}

try{
  console.log(arreglosSimilares([1,2,3],[1,2,4]));
}catch(e){
  console.log('Error: ${e.message}');
}