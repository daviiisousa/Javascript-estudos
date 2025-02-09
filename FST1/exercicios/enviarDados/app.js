const form = document.querySelector("form");
const campo = document.getElementById("campo")

async function enviarDados(nome, email) {
    try {
        const dadosUsuario = { nome, email };
        const result = await fetch("http://localhost:3000/dados", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dadosUsuario),
        });

        if (!result.ok) {
            throw new Error(`Erro: ${result.status} - ${result.statusText}`);
        }

        const dados = await result.json();
        console.log("Resposta do servidor:", dados);

        campo.innerHTML = JSON.stringify(dados)

    } catch (error) {
        console.error("Erro ao enviar os dados:", error.message);
    }
}

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();

        if (!nome || !email) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        enviarDados(nome, email);
        form.reset()
    });
} else {
    console.error("Formulário não encontrado na página.");
}
