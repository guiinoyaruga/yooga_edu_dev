

// declaraçao de uma funçao
function createPhrases()  {
    console.log("Preparando...")
    console.log("Carregando..//")
    console.log("Aqui uma funçao está rodando!")

}

// Executa a funçao
createPhrases()


// function expression
// function entender number 1 e number 2 como 2 e 3 descrito na ultima linha em sum(2,3)

const sum = function(number1,number2){
   total = number1 + number2
   return total
}

//sum(2,3) // argumentos
//sum(4,5)
//sum(10, 20.4434)

let number1 = 34
let number2 = 25


//precisa do return na function para retorna o valor sem ser undefined. entao total receber n1 e n2 e o return retorna o valor para sum()//

console.log("O numero 1 é: " + number1)
console.log("O numero 2 é: " + number2)
console.log("O total é: " + sum(number1, number2))

function fazerSuco(fruta1, fruta2){

    return fruta1 + fruta2

}

const copo = fazerSuco("Banana", "Maça")

console.log(copo)

//function hoisting = reorganiza o codigo

sayMyName()

 function sayMyName() {
     console.log("Gui")
     
 }



 // => Arrow Function = funçao mais curta
 const sayMyName1 = () => {
 console.log("guilherme")

 }

 sayMyName1()


 //callback function =  passando uma funçao como paramentro para outra funçao

 function sayMyName2(name) {
  name()
 }

 sayMyName2( 
     () =>{
         console.log("Estou em uma callback")
     } 
     
     )


     // function constructor. posso passar uma funçao com um objeto colocando o atributo + a funcao = guilherme.walk no console//


     function Person(name, run) {
         this.name = name
         this.run = function () {
             return this.name + " está correndo"
             
         }
    }

    const guilherme = new Person("Guilherme")
    const leandro = new Person("Leandro")
    console.log(guilherme.run())
    console.log(leandro.run())


    // criando um array através de um constructor

    let meuArray = new Array('p', 'p')
    console.log(meuArray)

    //Manipulando Strings e Numeros = Transformando string em numero e vice-versa
    let string = "123"
    console.log(Number(string))
    let number = 321
    console.log(String(number))


    //Contando quantos caracteres tem uma palavra ou um número
    let word = "Otorrinolaringologista"
    console.log(word.length)
    let num = 10500
    console.log(String(num).length)

    //Transformar um número quebrado com 2 casa decimais e trocar ponto por vírgula
    let num1 = 13245.54332
    console.log(num1.toFixed(2).replace(".", ","))


    //Transformar letras minúsculas em maiúsculas e o oposto.

    let palavra = "Programa é Demais da Conta."
    console.log(palavra.toUpperCase())
    console.log(palavra.toLowerCase())

    //Transformar String para Array e separar por espaços ou underscore

    let phrase = "Eu amo bolo de banana"
    let myArray = phrase.split("a")
    ///let phraseWithUnderscore = myArray.join("_")
    console.log(myArray)

    //Verificar se o texto contem uma palavra especifica
    let frase = "Vou botar tudo no talo, em 4k!"
    console.log(frase.includes("Erro"))

    

   /* let goiEnd = new Array (3)S
    const g = new Array("G")
    const l = new Array("L")
    const a = new Array("A")
    const b = new Array("B")
    console.log(g)
    console.log(l)
    console.log(a)
    console.log(b)*/


    