
    //Como contar um array de elementos

    console.log(["a", {type: "array"}, function (){return "aló"}, {}].length)

    // Transformar uma cadeia de caracteres em elementos de um array

    let wordi = "Açaí"
    console.log(Array.from(wordi))

    //Manipular array add ou del um item em diferente posicoes do array

    let techs = [ "html", "css", "js","android"]
    
    //colocando no fim
    techs.push("node.js")
    //colocando no começo
    techs.unshift("react")
    //remover do fim
    techs.pop()
    //remover do começo
    techs.shift()
    //pegar elementos especificos do array
    console.log(techs.slice(0,1))
    //Remover um ou mais elementos
    techs.splice(1,2)
    //Encontrar um elemento no array pelo inde
    let index = techs.indexOf('css')
    techs.splice(index,1)

    console.log(techs)
      