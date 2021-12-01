let num = 10;
let fatorial = 1;

for (let i = 0; i < num; i += 1) {
  fatorial *= num - i;
}

console.log(fatorial);
