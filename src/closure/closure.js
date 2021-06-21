const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// Clousures, funciones que recuerdan
//la asignación del valor anterior

const moneyBox = () => {
  debugger;
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
