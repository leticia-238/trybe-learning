const fatorial = (number) => (number === 0 ? 1 : number * fatorial(number - 1));

console.log(fatorial(5));

const longestWord = (string) =>
  string.split(" ").sort((a, b) => b.length - a.length)[0];

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);
