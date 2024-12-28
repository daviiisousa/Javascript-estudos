const estoque = [
    { id: 1, nome: "Camisa", quantidade: 10, preco: 50 },
    { id: 2, nome: "Calça", quantidade: 5, preco: 100 },
    { id: 3, nome: "Sapato", quantidade: 8, preco: 200 },
];

function addProduto(id, nome, quantidade, preco){
    const produtoNovo = {id: id, nome: nome, quantidade: quantidade, preco: preco}
    estoque.push(produtoNovo)
}

function removerProduto(id){
    console.log(estoque.filter((item) => item.id !== id))
}

function atualizarQuantidade(id, novaQuantidade){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
            estoque[i].quantidade = novaQuantidade
            console.log(estoque[i])
        }
    }
}

function listarProdutos(){
    console.log('-------itens-------')
    estoque.forEach((item) => {
        console.log(item)
    })
}

function calcularValorTotalEstoque(){
    estoque.forEach((item) => {
        console.log(item.preco * item.quantidade) 
    })
}

function buscarProduto(nome){
    estoque.forEach(item => {
        if(item.nome.includes(nome)){
            console.log(item)
        }else{
            return
        }
    })
}
