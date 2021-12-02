let starNumber = 5;
let line = "";

for (let row = 0; row < starNumber; row += 1) {
  for (let col = 0; col < starNumber; col += 1) {
    line += "*";
  }
  console.log(line);
  line = "";
}

/*
for (let col = 0; col <= starNumber ** 2 + starNumber; col += 1) {
  if (line.length < starNumber) {
    line += "*";
  } else {
    console.log(line);
    line = "";
  }
}
*/
