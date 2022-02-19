/* Transformar notas escolares 


Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo
A, B, C, D, F

*/


//switch

function notaSistema(nota) {

    let scoreA = nota >=90 && nota <=100
    let scoreB = nota >=80 && nota <=89
    let scoreC = nota >=70 && nota <=79
    let scoreD = nota >=60 && nota <=69
    let scoreF = nota <60 && nota >=0
    let scoreFinal

    if(scoreA){
        
        scoreFinal = 'A'
        
    } else if(scoreB) {
        
        scoreFinal = 'B'
    } else if (scoreC){
        
        scoreFinal = 'C'
    } else if (scoreD){

        scoreFinal = 'D'
    } else if (scoreF){

        scoreFinal = 'F'
    }else {
        console.log("Nota Inválida")
    }

    return scoreFinal

}

console.log("Nota 1ª prova: "+notaSistema(45))
console.log("Nota 2ª prova: "+notaSistema(75))
console.log("Nota 3ª prova: "+notaSistema(89))

