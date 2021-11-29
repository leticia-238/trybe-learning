const a = 60;
const b = 65;
const c = 55;
let result = null;

if (a >= 0 && b >= 0 && c >= 0) {
  if (a + b + c === 180) {
    result = true;
  } else {
    result = false;
  }
} else {
  result = "erro";
}

console.log(result);
