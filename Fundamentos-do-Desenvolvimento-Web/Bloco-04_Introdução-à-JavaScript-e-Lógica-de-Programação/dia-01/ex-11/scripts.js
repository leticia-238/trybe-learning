let salarioBruto = 1890;
let aliquotaInss = null;
let salarioBase = null;
let impostoDeRenda = null;
let salarioLiquido = null;

if (salarioBruto <= 1556.94) {
  aliquota = 0.08 * salarioBruto;
} else if (salarioBruto <= 2594.92) {
  aliquota = 0.09 * salarioBruto;
} else if (salarioBruto <= 5189.82) {
  aliquota = 0.11 * salarioBruto;
} else {
  aliquota = 570.88;
}

salarioBase = salarioBruto - aliquota;

if (salarioBase <= 1903.98) {
  impostoDeRenda = 0;
} else if (salarioBase <= 2826.65) {
  impostoDeRenda = 0.075 * salarioBase - 142.8;
} else if (salarioBase <= 3751.05) {
  impostoDeRenda = 0.15 * salarioBase - 354.8;
} else if (salarioBase <= 4664.68) {
  impostoDeRenda = 0.225 * salarioBase - 636.13;
} else {
  impostoDeRenda = 0.275 * salarioBase - 869.36;
}

salarioLiquido = salarioBase - impostoDeRenda;
salarioLiquido = salarioLiquido.toFixed(2);
console.log("Salário Líquido: ", salarioLiquido);
