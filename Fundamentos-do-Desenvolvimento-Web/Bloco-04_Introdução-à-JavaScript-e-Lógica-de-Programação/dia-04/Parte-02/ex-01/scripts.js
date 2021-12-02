function verificaPalindromo(palavra) {
  let array = palavra.split("");
  let arrayReverse = array.reverse();
  let palavraReverse = arrayReverse.join("");

  if (palavra === palavraReverse) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo("arara"));
