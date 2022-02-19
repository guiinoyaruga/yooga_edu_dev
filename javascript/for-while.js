
// estrutura de repetição
// for 
//break - para a execução do loop
//continue - pula a execução do momento

//crescente

for(let i = 0; i <=2; i++){
    console.log(i)

}

//decrescente

for (let j = 3; j > 0; j--){
    console.log(j)
}


// com condição - abaixo o if irá ir até 5 e pular ele na hora de mostrar

for (let k = 4; k > 0; k--){
     if(k === 2){
         continue;
     }

     console.log(k)

}


//while

let i = 0;

while (i <= 10){
      console.log(i)

      i++;
}

//for of - imprime cada elemento de string ou de um vetor e faz a repetição em cada elemento de ambos

let name ='Guilherme'
let names = ['Hugo', 'Leandro', 'Orlando']

for(let char of names){
    console.log(char)
}

//for in - imprime cada elemento de uma objeto já criado

const pessoa = {
    name: 'Guilherme',
    age: 22,
    weight: 73.200

}

for(let property in pessoa){
    console.log(property)
    console.log(pessoa[property])
}

