

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

let pao = true
let cafe = false

const niceBreakfast = pao || cafe ? 'Café top' : 'Café Bad'
const niceBreakfast = pao && cafe ? 'Café top' : 'Café Bad'
const niceBreakfast = pao && !cafe ? 'Café top' : 'Café Bad'

console.log(niceBreakfast)