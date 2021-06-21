/*Block scope

Las variables asignadas con var dentro de una función
pueden ser utilizadas dentro de todo el margen de la función
pero las variables inicializadas con las palabras reservadas
var y const solo puede accedidas dentro del bloque*/

const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    let fruits2 = "banana";
    const fruits3 = "kiwi";

    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
  //   console.log(fruits2);
  //   console.log(fruits3);
};

fruits();

// con let x1 = 1, x2 = 2

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

//con var  x1 = 2, x2 = 2

var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x);

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
