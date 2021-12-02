let number = 8;
let line = "";

for (let n = 1; n <= number; n += 1) {
  for (let countSpace = n; countSpace < number; countSpace += 1) {
    line += " ";
  }
  let starNumber = number - line.length;
  for (let countStar = 0; countStar < starNumber; countStar += 1) {
    line += "*";
  }
  console.log(line);
  line = "";
}
