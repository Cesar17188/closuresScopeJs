/*Todas estan dentro del scope global así que 
pueden ser usadas en todo el spectro del programa
pero solo var puede ser reasignada, let y const no*/

var hello = "Hello";
var hello = "Hello +";
let world = "Hello World";
let world = "Hello";
const helloWorld = "Hello World!";
console.log(hello);

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

/*Se está asignando una variable global dentro 
de una función, lo cual es una mala práctica ya que
puedo acceder desde cualquier parte del programa*/
const helloWorld = () => {
  globalVar = "im global";
};

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = (globalVar = "Im Global");
};

anotherFunction();
console.log(globalVar);
