let word = "tryber";
let invertWord = "";

for (let i = 1; i <= word.length; i += 1) {
  let char = word[word.length - i];
  invertWord += char;
}

console.log(invertWord);
