let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (
  let numeroDeIteracoes = 1;
  numeroDeIteracoes < numbers.length;
  numeroDeIteracoes += 1
) {
  for (let i = 0; i < numbers.length - numeroDeIteracoes; i += 1) {
    if (numbers[i] > numbers[i + 1]) {
      let aux = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = aux;
    }
  }
}

console.log(numbers);
