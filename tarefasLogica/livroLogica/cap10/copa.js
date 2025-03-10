// Elaborar um programa que leia o nome de um clube e, ao clicar em
// Adicionar, insira-o na página a partir de uma tag h5 (alinhada à direita e
// em itálico). Ao clicar em Montar Tabela de Jogos, o programa deve
// verificar se o número de tags h5 existentes na página é par. Se for, exiba os
// jogos (na ordem de inserção) em uma tabela, também inserida pelo
// programa na página. Os clubes devem ser recuperados das tags h5
// existentes na página. Se o número de tags h5 for ímpar, exiba mensagem de
// advertência. Depois de montar a tabela, o programa deve desabilitar os
// botões Adicionar e Montar Tabela de Jogos. A Figura 10.11 ilustra
// uma execução desse programa.

const form = document.querySelector("form");
const campo = document.getElementById("campo");
const tabela = document.getElementById("tabela");
const btnTabela = document.getElementById("btnTabela");
const btnNovoClube = document.getElementById("btnNovoClube");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const clube = form.clube.value.trim();
  if (!clube) {
    alert("Por favor, insira um nome de clube.");
    return;
  }

  // Criar e estilizar o elemento h5
  const h5 = document.createElement("h5");
  h5.innerText = clube;
  h5.style.textAlign = "right";
  h5.style.fontStyle = "italic";

  campo.appendChild(h5);
  form.reset(); // Limpar o input após adicionar um clube
});

btnTabela.addEventListener("click", () => {
  const clubes = Array.from(campo.children).map((el) => el.textContent.trim());

  if (clubes.length % 2 !== 0) {
    alert("O número de clubes deve ser par para montar a tabela!");
    return;
  }

  // Criar tabela
  const table = document.createElement("table");
  table.border = "1";
  table.style.width = "100%";
  table.style.textAlign = "center";

  // Criar cabeçalho da tabela
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Time 1</th><th>Time 2</th>";
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Criar corpo da tabela
  const tbody = document.createElement("tbody");
  for (let i = 0; i < clubes.length; i += 2) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${clubes[i]}</td><td>${clubes[i + 1]}</td>`;
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  tabela.innerHTML = "";
  tabela.appendChild(table);

  // Desativar botões
  btnNovoClube.disabled = true;
  btnTabela.disabled = true;
});

