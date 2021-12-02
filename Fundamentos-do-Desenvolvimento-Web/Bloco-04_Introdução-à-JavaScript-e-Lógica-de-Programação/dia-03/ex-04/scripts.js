let maiorNum = 50;
let maiorNumPrimo = 0;
let numPrimo = true;

//Mapeamento de números primos
for (let num = 2; num <= maiorNum; num += 1) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      numPrimo = false;
      break;
    } else {
      numPrimo = true;
    }
  }
  if (numPrimo) {
    maiorNumPrimo = num;
  }
}

console.log(maiorNumPrimo);
