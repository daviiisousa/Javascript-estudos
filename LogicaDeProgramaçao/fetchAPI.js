//Promises e Fetch API: Use a Fetch API para fazer uma chamada para uma API pública (como a API do JSONPlaceholder) e exibir os resultados no console.

async function api(){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts')//fetch retorna uma promessa que resolve para um objeto Response representando a resposta à requisição.
    const dados = await resposta.json()// .json() é usado para extrair e converter a resposta de uma requisição HTTP (feita com fetch) em um objeto JavaScript.
    console.log(dados);
}

api()