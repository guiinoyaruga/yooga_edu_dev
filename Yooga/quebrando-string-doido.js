// 1 - Criar string com "n" palavras;
// 2 - Separar todas as palavras por espaços " ";
// 3 - Conte quantas vezes cada uma delas apareceram;
// 4 - Ordenar por ordem decrescente;

let phase = "a lavadeira trabalhava trabalhava trabalhava e trabalhava";

let regex = phase.replace(/,/g, "");

let divisor = regex;

let divisor = phase.split(" ");

divisor = divisor.filter(function (element) {
  return element.replace(/(\r\n|\n|\r)/gm, ""); // Retira os espaços vazios/vírgulas utilizando o filter
});

function countArray(divisor) {
  const contElem = Object.create(null); // Criação de um objeto vazio
  for (const element of divisor) {
    // for of para verifica valor e não a chave do objeto
    if (!contElem[element]) {
      // Se não existir elemento dentro do objeto, adiciona 1.

      contElem[element] = 1;
    } else {
      // Caso contrário, incrementamos o valor.
      contElem[element] += 1;
    }
  }
  return contElem;
}

console.log(
  countArray(
    divisor
      .sort((a, b) => {
        return b.qt - a.qt;
      })
      .reverse()
  )
); // Coloca na ordem descrecente
