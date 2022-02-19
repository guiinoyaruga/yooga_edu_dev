// if, else, switch e for

let temperature = 37.4
let highTemp = temperature >= 37.5
let mediumTemp = temperature >= 37 && temperature <= 37.4


// Primeiro jeito
if(temperature >= 37.5){
   console.log("Febre")

} else if (temperature < 37.5 && temperature >=37){
  console.log("Temperatura Moderada")

} else{
    console.log("Temperatura Normal")
}

//Segundo jeito
if(highTemp){
  console.log("Febre")

} else if (mediumTemp){
 console.log("Temperatura Moderada")

} else{
   console.log("Temperatura Normal")
}

//Switch



function calculate(number1, operator, number2) {

  let result

switch (operator) {
  case "+" :
       result = number1 + number2
       break
  case "-" :
       result = number1 - number2
       break
  case "*" :
       result = number1 * number2
       break
  case "/" :
       result = number1 / number2
       break
    default:
      console.log("Erro")
       break

}

return result

}

console.log(calculate(4,'+', 2))

// throw para uma condição ou uma repetição e jogar a mensagem do primeiro if para o try catch tratando como erro

function sayMyName(name ='') {
    if (name ===''){
    throw 'Nome é obrigatório'
  }

   console.log(name)
  
}

//try catch

try{
  sayMyName('Gui')

}catch(e) {
  console.log(e)
}