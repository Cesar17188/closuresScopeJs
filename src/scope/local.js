/* SCOPE LOCAL

Las variables inicializadas con la palabra reservada
let o const dentro de un bloque de código solo pueden ser
accedidas dentro de ese mismo bloque de código.
Si se intenta acceder a esas variables desde fuera del bloque
de código no se podrá utilizar.*/

const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
};

helloWorld();

console.log(hello);

/*Si inicializamos una variable con la palabra reservada var
fuera de un bloque de código es una variable global
y creamos otra variable con el mísmo nombre de identificador
dentro de un bloque de código, la variable global no se reasigna,
y la variable local actua solo dentro del bloque de código
donde fue creada */

var scope = "I am global";

const functionScope = () => {
  var scope = "I am just a local";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
console.log(scope);
