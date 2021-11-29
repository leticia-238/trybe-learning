const custo = 80;
const venda = 100;
let desconto = custo * 0.2;
let lucro = (venda - custo - desconto) * 1000;

if (custo >= 0 && venda >= 0) {
  console.log(`lucro: ${lucro}`);
} else {
  console.log("erro");
}
