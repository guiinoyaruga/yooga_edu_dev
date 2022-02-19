/* Criar uma função que receba uma string em celsius ou em fahrenheit e faça a transformação de unidade para outra

C = (F-32 * 5/9)

F = C * 9/5 +32

*/


function temperatureConversion(temp) {

    //includes determinar se há um elemento especifico na string

    const celsiusExists = temp.toUpperCase().includes("C")
    const fahrenheitExists = temp.toUpperCase().includes("F")

    if(!celsiusExists  && !fahrenheitExists){
        throw new Error("Medida de temperatura inválida")
    }

    let conversionString;
    let deGree =''
    
    //let toCersius = temp[2] === 'F' || temp[2] === 'f' ;
    //let toFahrenheit = temp[2] === 'C' || temp[2] ==='c';
   

    if(celsiusExists){
        conversionString = Number(temp.toUpperCase().replace("C", ""))
        conversionFormula = fahrenheit => (fahrenheit * 9/5) + 32
        deGree = 'F'

    } else if (fahrenheitExists){
        conversionString = Number(temp.toUpperCase().replace("F", ""))
        conversionFormula = celsius => (celsius - 32) * 5/9
        deGree = 'C'
}
   

return conversionFormula(conversionString) + deGree
}

try{

    console.log(temperatureConversion('100f'))

} catch (error){
    console.log(error.message)
}
