async function carregarUsuarios(){
    const opcoes = {
        method: "GET"
    };

    const resposta1 = await fetch("http://localhost:3000/usuarios", opcoes)
    
    const usuarios = await resposta1.json();

    alimentaTabela(usuarios)
}

function alimentaTabela(usuarios){
    const htmlUsarios = usuarios.map(usuario =>{
        return `
       
        <table class="table table-hover">
            <tbody>
                <tr>
                    <td>${usuario.nome}</td>
                    <td>${usuario.idade}</td>
                </tr>
            </tbody>
        </table>
        `
    })

    const htmlConteudo = htmlUsarios.join("");
    document.getElementById('conteudo').innerHTML = htmlConteudo
}

document.addEventListener('DOMContentLoaded', carregarUsuarios)