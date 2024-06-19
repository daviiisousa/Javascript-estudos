//codigos que talvez eu reutilize
 // let nome = document.getElementById('nome').value;
    // let idade = document.getElementById('idade').value;
    // let email = document.getElementById('email').value;
    // let resposta = document.getElementById('res')

    //     resposta.innerHTML = `<table class="table">
//   <thead>
//     <tr>
//     <th scope="col">#</th>
//       <th scope="col">nome</th>
//       <th scope="col">idade</th>
//       <th scope="col">email</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//     <th scope="row">1</th>
//       <td>${nome}</td>
//        <td>${idade}</td>
//        <td>${email}</td>
//     </tr>
//     <tr>

     
//     </tr>
//     <tr>
      
//     </tr>
//   </tbody>
// </table>`


async function carregarUsuarios(){
    const metodos ={
        method: "GET"
    }

    const resposta = await fetch("http://localhost:3000/usuarios", metodos)

    const usuarios = await resposta.json()

    alimentaTabela(usuarios)
}

function alimentaTabela(usuarios){
   
    const htmlUsuarios = usuarios.map(usuario =>{
        return `
        <table>
  <thead>
    <tr>
      <th scope="col">nome</th>
      <th scope="col">idade</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${usuario.nome}</td>
       <td>${usuario.idade}</td>
       
       
    </tr>
    
  </tbody>
</table>
        `
    })

    const htmlConteudo = htmlUsuarios.join("");
    document.getElementById('res').innerHTML = htmlConteudo
}

async function salvarUsuario() {
    let Nome = document.getElementById("nome").value
    let Idade = document.getElementById("idade").value
    // const email = document.getElementById("email").value

    if (!Nome) {
        alert('erro')
        return;
    }
    // if (!email) {
    //   alert('erro')
    //     return;
    // }
    if (!Idade) {
        alert('erro')
        return;
    }

    let reader = new FileReader()
    reader.onload = async function() {
        const payload = {
            nome: Nome,
            idade: Idade
        }
    
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload)
        };
    
        await fetch("http://localhost:3000/usuarios", requestOptions)
    
        carregarUsuarios()

    }

    
}

document.addEventListener('DOMContentLoaded', carregarUsuarios)
document.getElementById("procurar").addEventListener('click', salvarUsuario) 

