let array = ["java", "javascript", "python", "html", "css"];
let biggestWord = array[1];
let smallestWord = array[1];

for (let i = 0; i < array.length; i += 1) {
  let currentWord = array[i];
  if (currentWord.length > biggestWord.length) {
    biggestWord = currentWord;
  } else if (currentWord.length < smallestWord.length) {
    smallestWord = currentWord;
  }
}

console.log("Maior palavra:", biggestWord, "\nMenor palavra:", smallestWord);
