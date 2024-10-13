const formulario = document.querySelector("#formulario");
const nome = formulario.nome;
const email = formulario.email;
const senha = formulario.senha;
const foto = formulario.foto;
const resposta = document.querySelector('#resposta');

// Adicionar evento de submit ao formulário
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    postUsuario();
});

// Função para obter usuários da API e exibi-los
getUsuarios();

async function getUsuarios() {
    const method = {
        method: 'GET'
    };
    const usuarios = await fetch('http://localhost:3000/usuarios', method);
    const dados = await usuarios.json();

    resposta.innerHTML = ''; // Limpa o conteúdo anterior

    dados.forEach((usuario) => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.innerHTML = `
        <img src="${usuario.foto}" alt="Foto de ${usuario.nome}">
        <h1>${usuario.nome}</h1>
        <h3>${usuario.email}</h3>
        <box-icon name='trash'></box-icon>
        <box-icon name='message-square-edit'></box-icon>
        `;

        // Adicionar evento ao ícone de exclusão
        const trashIcon = usuarioDiv.querySelector("[name='trash']");
        trashIcon.addEventListener('click', () => deleteUsuario(usuario.id));

        resposta.appendChild(usuarioDiv);
    });
    
}

// Função para adicionar um novo usuário
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

    // Faz o post do usuário na API
    await fetch('http://localhost:3000/usuarios', method);

    // Atualiza a lista de usuários após adicionar
    getUsuarios();
}

// Função para deletar um usuário
async function deleteUsuario(id) {
    const method = {
        method: 'DELETE'
    };

    await fetch(`http://localhost:3000/usuarios/${id}`, method);
    getUsuarios();
}
