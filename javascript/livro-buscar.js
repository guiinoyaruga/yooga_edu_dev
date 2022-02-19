

/* Buscando e contando dados em Arrays

   Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver
    * os livros desse autor   */

   const booksByCategory = [
           
              {
                category: "Riqueza",
                books: [
                      
                    {
                        title: "Os segredos da mente milionária",
                        author: "T. Harv Eker",
                    },
                    {
                        title: "O homem mais rico da Babilônia",
                        author: "George S. Clason",
                    },
                    {
                        title: "Pai rico, pai pobre",
                        author: "Robert T. Kiyosaki e Sharon L. Lechter",

                    },

                ],
              },
              {
                  category: "Inteligência Emocional",
                  books: [

                    {
                        title: "Você é Insubstituível",
                        author: "Augusto Cury",
                    },
                    {
                        title: "Ansiedade - Como enfrentar o mal do século",
                        author: "Augusto Cury"
                    },
                    {
                        title: "Os 7 hábitos das pessoas altamente eficazes",
                        author: "Stephen R. Covey"
                    }
                  ],
              },
        
   ]

 
   

function countLibrary(){

    for (let category of booksByCategory){
        console.log("Número de livros da categoria ", category.category)
        console.log(category.books.length)
    }


    // Mostrar a qt. de autores colocando eles dentro de um array
    let authors = [];

    for (let category of booksByCategory){
        for (let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
              
            }
        }
    }
     console.log("Qt. de Autores: "+ authors.length)
}


// Mostrar o livro do autor desejado
function findAuthor(author){
    let booksAc = [];

for (let category of booksByCategory){
    for (let book of category.books){
        if(book.author === author){
                  booksAc.push(book.title)
            
        }
    }
}
console.log(" Livros do " + author + ': '+ booksAc.join(", "))

}




console.log("Número de categorias:" + booksByCategory.length)
countLibrary()
findAuthor('Augusto Cury')