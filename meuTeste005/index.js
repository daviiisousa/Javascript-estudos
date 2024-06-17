
function pesquisar(){
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    let resposta = document.getElementById('res')

    resposta.innerHTML = `<table class="table">
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
      <td>${nome}</td>
       <td>${idade}</td>
       <td>${email}</td>
    </tr>
    <tr>

     
    </tr>
    <tr>
      
    </tr>
  </tbody>
</table>`

}

