let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

function welcome(name) {
  return `Bem-vinda, ${name}`;
}

console.log(welcome(info.personagem));
