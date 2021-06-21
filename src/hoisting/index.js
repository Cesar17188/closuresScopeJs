/*Levantamiento de las asignaciones */

// -> var a, pasa para ser asignado
a = 2;
var a;
console.log(a); // 2

// no generamos el valor de la variable por lo que nos da undefined
console.log(a);
var a = 2;

//JS utiliza el hoisting en las asignaciones y no en las
// inicializaciones

nameOfDog("Arthas");

function nameOfDog(name) {
  console.log(name);
}

/* El motor de javascript pone en la memoria primero las 
variables y las funciones en el orden escrito */
