
async function carregarUsuarios(){
    const metodos ={
        method: "GET"
    }

    const resposta = await fetch("http://localhost:3000/usuarios", metodos)

    const usuarios = await resposta.json()

    pesquisar(usuarios)
}

function pesquisar(usuarios){
    // let nome = document.getElementById('nome').value;
    // let idade = document.getElementById('idade').value;
    // let email = document.getElementById('email').value;
    // let resposta = document.getElementById('res')

    const htmlUsuarios = usuarios.map(usuario =>{
        return `
        <table class="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">nome</th>
      <th scope="col">idade</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">1</th>
      <td>${usuario.nome}</td>
       <td>${usuario.idade}</td>
       <td>${usuario.email}</td>
    </tr>
    <tr>

     
    </tr>
    <tr>
      
    </tr>
  </tbody>
</table>
        `
    })

    const htmlConteudo = htmlUsuarios.join("")
    document.getElementById('res').innerHTML = htmlConteudo

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
}

document.addEventListener('DOMContentLoaded', carregarUsuarios)

