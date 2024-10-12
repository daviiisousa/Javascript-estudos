const formulario = document.querySelector("#formulario");
const btnCadastrar = document.querySelector('#btnCadastrar')
const nome = formulario.nome;
const email = formulario.email;
const senha = formulario.senha;
const foto = formulario.foto;
const resposta = document.querySelector('#resposta');

formulario.addEventListener('submit',  (e) => {
    e.preventDefault();
    
    console.log("Evento submit prevenido!");

    console.log(
        nome.value,
        email.value,
        senha.value,
        foto.value
    );

     postUsuario();
});

getUsuarios()

async function getUsuarios(){
    const method = {
        method: 'GET'
    }
    const usuarios = await fetch('http://localhost:3000/usuarios', method)
    const dados = await usuarios.json()
    console.log(dados)

    dados.map((usuario) => {
        

        resposta.innerHTML += `
        <div>
        <img src="${usuario.foto}" >
        <h1>${usuario.nome}</h1>
        <h2> ${usuario.email} </h2>
        </div>`
    })
}

async function postUsuario() {
    const payload = {
        nome: nome.value,
        email: email.value,
        foto: foto.value,
        senha: senha.value
    };

    const method = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };

    await fetch('http://localhost:3000/usuarios', method);
}
