let starNumber = 8;
let line = "";

for (let num = 1; num <= starNumber; num += 1) {
  for (let row = 0; row < num; row += 1) {
    line += "*";
  }
  console.log(line);
  line = "";
}
