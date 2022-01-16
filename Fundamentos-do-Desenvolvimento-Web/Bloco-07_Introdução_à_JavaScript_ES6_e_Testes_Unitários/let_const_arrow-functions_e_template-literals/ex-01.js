const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    return `${ifScope} ótimo, fui utilizada no escopo !`;

  }
  return 'Não devo ser utilizada fora meu escopo (else)';
}

console.log(testingScope(true));
console.log(testingScope(false))

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortNumbers = (array) => {
  const numbers = array.sort((a, b) => a - b).join(', ')
  return `Os números ${numbers} se encontram ordenados de forma crescente!`
}

console.log(sortNumbers(oddsAndEvens)); 