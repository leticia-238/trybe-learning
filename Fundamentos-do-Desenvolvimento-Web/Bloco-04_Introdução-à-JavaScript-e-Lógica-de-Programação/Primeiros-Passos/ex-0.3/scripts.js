const a = 584;
const b = 863;
const c = 86;
let result = null;

if (a > b && a > c) {
  result = a;
} else if (b > a && b > c) {
  result = b;
} else if (c > a && c > b) {
  result = c;
} else [(result = "os valores são iguais")];

console.log(result);
