// Elaborar um programa para gerar uma tabela com os jogos de uma fase
// eliminatória de um campeonato. O programa deve conter três funções (a
// serem executadas no evento click de cada botão) para: 1) validar o
// preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os
// clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x
// último, segundo x penúltimo e assim por diante. Exibir mensagem e não
// listar a tabela de jogos, caso o número de clubes informados seja ímpar. A
// Figura 6.14 ilustra a página gerada com a tabela de jogos.

let clubes = [];

const form = document.querySelector("form");
const campo = document.getElementById("campo");
const btnListar = document.getElementById("listar");
const btnTabela = document.getElementById("tabela");

// Função para adicionar clubes e exibi-los
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = form.clube.value.trim();

  if (!clube) {
    alert("Por favor, insira o nome de um clube.");
    return;
  }

  clubes.push(clube);

  listarClubes();
  form.reset();
});

// Função para listar clubes
btnListar.addEventListener("click", listarClubes);

function listarClubes() {
  if (clubes.length === 0) {
    campo.innerHTML = `<p style="color: red;">Não há clubes cadastrados.</p>`;
    return;
  }

  campo.innerHTML = "<h2>Clubes Cadastrados:</h2>";
  const ul = document.createElement("ul");

  clubes.forEach((clube) => {
    const li = document.createElement("li");
    li.textContent = clube;
    ul.appendChild(li);
  });

  campo.appendChild(ul);
}

// Função para gerar a tabela de jogos
btnTabela.addEventListener("click", () => {
  if (clubes.length % 2 !== 0) {
    campo.innerHTML = `<p style="color: red;">Não é possível montar a tabela. O número de clubes deve ser par.</p>`;
    return;
  }

  if (clubes.length < 2) {
    campo.innerHTML = `<p style="color: red;">Cadastre pelo menos dois clubes para montar a tabela.</p>`;
    return;
  }

  campo.innerHTML = "<h2>Tabela de Jogos:</h2>";
  const tabela = document.createElement("ul");

  for (let i = 0; i < clubes.length / 2; i++) {
    const jogo = document.createElement("li");
    const adversario = clubes[clubes.length - 1 - i];
    jogo.textContent = `${clubes[i]} x ${adversario}`;
    tabela.appendChild(jogo);
  }

  campo.appendChild(tabela);
});
