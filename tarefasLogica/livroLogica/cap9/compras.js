// b) Elaborar um programa para cadastrar produtos na lista de compras da
// semana. Salvar e exibir a listagem dos produtos em ordem alfabética. A
// Figura 9.8 exibe a ilustração da página com alguns dados inseridos.

//GEPTO
const form = document.querySelector("form");
const lista = document.getElementById("lista");

// Recuperar os produtos salvos no localStorage
let produtos = JSON.parse(localStorage.getItem("produto")) || [];

function atualizarLista() {
    lista.innerHTML = "<h2>Produtos da Lista</h2>";
    produtos.sort().forEach((produto) => {
        lista.innerHTML += `
            <ul>
                <li>${produto}</li>
            </ul>
        `;
    });
}

// Atualizar a lista ao carregar a página
atualizarLista();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const produto = form.produto.value.trim();

    if (produto) {
        produtos.push(produto);
        localStorage.setItem("produto", JSON.stringify(produtos));
        form.reset();
        atualizarLista();
    }
});

//MEU CODIGO
// const form =  document.querySelector('form');
// const lista = document.getElementById('lista');
// let produtos = []
// let produtosDaLista = localStorage.getItem('produto') || ''

// produtos.push(produtosDaLista.split(','))

// let proutosSemEspaço = produtosDaLista.split(',').filter((produto) => produto !== '')

// lista.innerHTML = `
//     <h2>Produtos da Lista</h2>
// `
// proutosSemEspaço.sort().map((produto) => {
//     lista.innerHTML += `
//          <ul>
//             <li>${produto}</li>
//         </ul>
// `
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const produto = form.produto.value
//     produtos.push(produto)
//     localStorage.setItem('produto', produtos)
    
//     form.reset()

// })

// console.log(proutosSemEspaço)
