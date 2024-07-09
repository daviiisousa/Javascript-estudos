async function pegarUsuarios(){
    const metodos={
        method: "GET"
    }

    const resposta = await fetch('http://localhost:3000/Usuarios', metodos)
    const dados = await resposta.json()

    console.log(dados);
}

pegarUsuarios()

async function criarUsuarios(){
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let resposta = document.getElementById('res')
   
    const userdados = {
        telefone: telefone,
        email: email
    };

    const metodo = {
        method: 'POST',
        body: JSON.stringify(userdados)
    };

    const response = await fetch('http://localhost:3000/Usuarios', metodo);
    const dados = await response.json()
    resposta.innerHTML = dados
}