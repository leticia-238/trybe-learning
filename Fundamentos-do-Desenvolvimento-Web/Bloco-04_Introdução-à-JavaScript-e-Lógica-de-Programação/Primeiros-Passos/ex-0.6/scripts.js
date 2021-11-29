let nomeDaPeca = "Queen";
nomeDaPeca = nomeDaPeca.toLowerCase();
let mensagem = null;

switch (nomeDaPeca) {
  case "pawn":
    mensagem = "1 casa à frente";
    break;
  case "queen":
    mensagem = "1º: diagonal, 2º: horizontal, 3º: vertical";
    break;
  case "king":
    mensagem =
      "1º: 1 casa na diagonal, 2º: 1 casa na vertical, 3º: 1 casa na horizontal";
    break;
  case "rook":
    mensagem = "1º: horizontal, 2º: vertical";
    break;
  case "bishop":
    mensagem = "diagonal";
    break;
  case "horse":
    mensagem =
      "1º: 2 casas na vertical e 3 na horizontal, 2º: 3 casas na horizontal e 2 na vertical";
    break;
  default:
    mensagem = "(erro): Peça não encontrada";
    break;
}

console.log(mensagem);
