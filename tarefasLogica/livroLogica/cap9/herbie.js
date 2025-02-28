// c) Elaborar um programa para cadastrar os serviços a serem realizados
// por um auto center, que organize a ordem de execução dos serviços.
// Armazenar os serviços no navegador do usuário e a cada clique no botão
// Executar Serviço remover o primeiro serviço e exibi-lo na página. O
// programa deve atualizar o número de serviços pendentes quando: a) a
// página for aberta; b) um serviço for incluído; c) um serviço for removido. A
// Figura 9.9 ilustra a página do sistema

const form = document.querySelector("form");
const btnExecutar = document.getElementById("btnExecutar");
const campo = document.getElementById("campo");
let servicos = JSON.parse(localStorage.getItem("servico")) || [];

mostratServicos(servicos);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const servico = form.servico.value.trim();
  servicos.push(servico);
  localStorage.setItem("servico", JSON.stringify(servicos));
  form.reset();
  mostratServicos(servicos);
});

btnExecutar.addEventListener("click", () => {
  const servicoExecutado = servicos.shift();
  localStorage.setItem("servico", JSON.stringify(servicos));

  campo.innerHTML = `
        <h2>Serviços pendentes: ${servicos.length}</h2>
        <h3>Serviço em execução: </h3>
        <p>${servicoExecutado}</p>
    `;

    if(servicoExecutado === undefined){
        mostratServicos(servicos)
    }

  console.log(servicoExecutado);
});

function mostratServicos(servicos) {
  if (servicos.length === 0) {
    campo.innerHTML = `
        <h2>Serviços pendentes: ${servicos.length}</h2>
        <p>nenhum servico pendente</p>
    `;
    return;
  } else{
    campo.innerHTML = `
        <h2>Serviços pendentes: ${servicos.length}</h2>
    `
  }
}
