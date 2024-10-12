const formulario = document.querySelector("#formulario");
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
