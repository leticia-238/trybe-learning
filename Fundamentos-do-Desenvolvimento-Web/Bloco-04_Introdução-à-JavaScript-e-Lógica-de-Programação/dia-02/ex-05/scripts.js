let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[1];

for (let index = 0; index < numbers.length; index += 1) {
  let num = numbers[index];

  if (num > maiorNumero) {
    maiorNumero = num;
  }
}

console.log(maiorNumero);
