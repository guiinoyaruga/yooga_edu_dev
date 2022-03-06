// 1 - Criar string com "n" palavras;
// 2 - Separar todas as palavras por espaços " ";
// 3 - Conte quantas vezes cada uma delas apareceram;
// 4 - Ordenar por ordem decrescente;


let phase = "a lavadeira trabalhava, trabalhava, trabalhava e trabalhava";

let regex = phase.replace(/,/g, "");

let divisor = regex;

divisor = divisor.split(" ");

divisor = divisor.filter(function (element) {
  return element.replace(/g(\r\n|\n|\r)/gm, ""); // retira os espaços vazios/virgulas utilizando o filter
});

function countArray(divisor) {
  const contElem = Object.create(null); // criação de um objeto vazio
  for (const element of divisor) {
    // for of verifica valor e não a chave
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
