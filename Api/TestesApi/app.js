const form = document.getElementById("form");
const Url = "http://localhost:3000/usuarios";

const formLogin = document.getElementById("login")

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    criarUsuario();
});

formLogin.addEventListener("submit", (e) => {
    e.preventDefault(); 
    login();
});

async function criarUsuario() {
    const nome = form.nome.value;
    const email = form.email.value;
    const senha = form.senha.value;

    const payload = {
        nome: nome,
        email: email,
        senha: senha,
    };

    try {
        const response = await fetch(Url, {
            method: "POST",
            body: JSON.stringify(payload), // Converte o objeto para JSON
            headers: {
                "Content-Type": "application/json", // Define o tipo do conteúdo
            },
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Usuário criado:", data);
    } catch (error) {
        console.error("Erro ao consumir a API:", error);
    }
}

async function login(){
    const email = formLogin.email.value
    const senha = formLogin.senha.value

    const payload = {
        email,
        senha
    }

    const loginUrl = `${Url}/login`
    try {
        const response = await fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

         // Armazena o token no localStorage
         if (data.token) {
            localStorage.setItem("token", data.token);
            console.log("Login bem-sucedido, token armazenado:", data.token);

            // Redireciona ou atualiza a interface
            // window.location.href = "/dashboard";
        } else {
            console.error("Token não retornado pela API.");
        }
    } catch (error) {
        console.error("Erro ao realizar login:", error);
    }
}

async function getAll() {
    const token = localStorage.getItem("token"); // Substitua por um token válido

    if (!token) {
        console.error("Token não encontrado. Faça login novamente.");
        return;
      }      
  
    try {
      // Fazer a requisição com o token no cabeçalho
      const response = await fetch(Url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // Adiciona o token no cabeçalho
          "Content-Type": "application/json", // Define o tipo do conteúdo
        },
      });
  
      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }
  
      // Parsear os dados da resposta
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Erro ao consumir a API:", error);
    }
  }
  
  getAll();
  