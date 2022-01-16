const replaceX = (string, name) => {
  return string.replace(/\sx\s/gi, ` ${name} `);
};

const skills = ["Shell", "Git", "HTML", "CSS", "Javascript"];

const concatSentence = (string) => {
  return `${string} Minhas cinco principais habilidades são: ${skills.sort().join(", ")}`;
};

const startString = replaceX("Tryber x aqui!", "Bebeto");

console.log(concatSentence(startString));
