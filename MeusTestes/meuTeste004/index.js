async function carregarRemedios(){
    const metodos ={
        method: "GET"
    }

    const resposta = await fetch("http://localhost:3000/remedios", metodos)

    const remedios = await resposta.json()

    alimentaTabela(remedios)
}

function alimentaTabela(remedios){
    const htmlRemedios = remedios.map(remedio =>{
        return `
       
        <table class="table table-hover">
            
            <tbody>
                <tr>
                    <td>${remedio.nome}</td>
                    <td>${remedio.quantidade}</td>
                    <td>${remedio.descriçao}</td>
                </tr>
            </tbody>
        </table>
        `
    })

    const htmlConteudo = htmlRemedios.join("")
    document.getElementById('conteudo').innerHTML = htmlConteudo
}

function pesquisar(){
    const pesquisaRemedio = document.getElementById('verificar').value
    if(pesquisaRemedio === "" ||  !/^[^\d]+$/.test(pesquisaRemedio)){
        alert('digite um nome de remedio valido')
    }else if(pesquisaRemedio){
        alert('temos no estoque! clique em ok depois em sair verifique')
    }
        
}
    document.addEventListener('DOMContentLoaded', carregarRemedios)
    document.getElementById('pesquisar').addEventListener('click', pesquisar)