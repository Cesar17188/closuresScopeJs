/*Asignar valores, reasignar los elementos
y manejar el último valor de una variable utilizada */

const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

const myCount = buildCount(1);

myCount(); // 1
myCount(); // 2
myCount(); // 3

const myOtherCount = buildCount(10);

myOtherCount(); // 10
myOtherCount(); // 11
