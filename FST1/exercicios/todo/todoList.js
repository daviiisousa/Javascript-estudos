const form = document.getElementById("form");
const lista = document.getElementById("lista");

const tarefas = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.tarefa.value.trim(); // pega os valores escritos nos campos e tira espaçoes se tiver
  const nivel = form.nivel.value.trim();

  if (!nome || !nivel) {
    //verifica se os campos forem preenchidos
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (nivel !== "alto" && nivel !== "baixo") {
    //verifica se preencheu os campos corretamente
    alert("Por favor, digite a prioridade corretamente (alto ou baixo).");
    return;
  }

  const tarefa = { nome, nivel }; // objeto que vai ser passado para o array

  if (nivel === "alto") {
    // se o nivel for alto ele e manda pro começo da tabela
    tarefas.unshift(tarefa);
  } else {
    //se nao for prioridade e manda para o final da tabela
    tarefas.push(tarefa);
  }

  lista.innerHTML = `
    <tr>
        <th>Tarefa</th>
        <th>Prioridade</th>
    </tr>
  `; //limpa a tabela para depois trazer ela com os dados do array atulizado atualizado

  tarefas.forEach((item) => {
    // percorres o array ja com os itens
    const linha = document.createElement("tr"); //cria uma tr
    linha.innerHTML = ` 
      <td>${item.nome}</td>
      <td>${item.nivel}</td>
    `; // alimenta a tr
    lista.appendChild(linha); // adicina no espaço
  });

  form.reset(); // reseta o formulario
});
