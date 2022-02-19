/* Sistema de gasto familiar

Criar um objeto que possuirá 2 propriedades, ambas do tipo array:
     * Receita[]
     * Despesas:[]
     

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem
se a família está com o saldo positivo ou negativo, seguido do valor do saldo*/

let calculatorFamilly = {
    
    profit: [100, 100, 800, 350],
    spending:[250, 700, 600, 150]

}

//Faz a soma dos vetores e guarda os valores na variavel soma

function calculator(array) {
    
    let soma = 0;
    
    for (let valor of array){
         soma = soma + valor
  }
  
    return soma
}


//Faz o calculo do debitos da familia e entra dentro de um if para verificar se está positivo ou negativo
function balanceCalculator() {

    const calculateProfit = calculator(calculatorFamilly.profit)
    const calculateSpending = calculator(calculatorFamilly.spending)

    const total = calculateProfit - calculateSpending

    const tudoBem = total >=0
    const tudoMal = total <=0

    if(tudoBem){
        console.log("Muito bem, seu saldo é de: " +"R$"+ total)

    } else if (tudoMal){
        console.log("Vish, seu saldo é de: " +"R$" + total)

    }
    
}

balanceCalculator()

