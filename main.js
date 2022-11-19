var option = parseInt(prompt("Ingrese un número: "));
alert("EL factoriales " + factorial(option));

var randomNumber = 13;
var oportunidad = 0;

//Primer ejercicio
function factorial(option) {
  if(option <= 1){
    return 1;
  }
  else{
    return option * factorial(option - 1);
  }
}

factorial()

//Segundo ejercicio
function bisiestro() {
  var año = prompt("Ingrese un año: ")

  if(((año % 4 == 0) && (año % 100 != 0)) || año % 400 == 0){
    alert("El año " + año + " es bisiesto")
  } else {
      alert("El año " +  año + " no es bisiesto")
  }
}

bisiestro()

//Tercer ejercicio
let text = prompt("Introduce un texto: ");
let ch = prompt("Introduce un caracter: ");
let contador = 0;

for (let i = 0; i < text.length; i++) {
  const element = text[i];
  if(element == ch){
    contador++;
  }
}
console.log("El caracter " + ch + " aparece " + contador + " veces en el texto");

//Cuarto ejercicio
function randomNum (){
  while (oportunidad < 100){
    var numero = prompt("Adivina el numero /del 1 al 100/")
    oportunidad++;
    if (number == randomNumber){
      alert("¡Acertaste!")
      break;
    } 
    else { 
      if (number > randomNumber){
        alert("¡Ups!, el numero es mas bajo");
      }
      else {
        alert("Mas arriba ¡Bro!");
      }
    }
  }
}

randomNumber()

//Quinto ejercicio
function espaciado() {
  const phrase = "May the force be with you"
  let juntar
  
  juntar = phrase.split(" ").join("")
  console.log(juntar);
}

spaces();

//Main
function main(){
  factorial();
  bisiestro();;
  randomNum()
  espaciado();
}

main();