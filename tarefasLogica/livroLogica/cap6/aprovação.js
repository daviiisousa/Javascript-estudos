// Elaborar um programa que leia nome e número de acertos de candidatos
// inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no
// botão Aprovados 2ª Fase, ler o número de acertos para aprovação dos
// candidatos para a 2ª fase do concurso, conforme ilustra a Figura 6.16. O
// programa deve, então, exibir os candidatos aprovados, ou seja, apenas os
// que obtiveram nota maior ou igual à nota informada. Exibir os candidatos
// aprovados em ordem decrescente de número de acertos (Figura 6.17). Caso
// nenhum candidato tenha sido aprovado, exibir mensagem.

const form = document.querySelector("form");
const campo = document.getElementById("campo");
const campo2 = document.getElementById("campo2");
const btnAprovados = document.getElementById("aprovados");
let candidatos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.nome.value;
  const numeroDeAcertos = parseInt(form.acertos.value, 10);

  if (isNaN(numeroDeAcertos) || numeroDeAcertos < 0) {
    alert("Por favor, insira um número válido de acertos.");
    return;
  }

  const p = document.createElement("p");
  const span = document.createElement("span");
  p.innerText = nome;
  span.innerText = ` - ${numeroDeAcertos} acertos`;
  p.appendChild(span);
  campo.appendChild(p);

  const alunoEAcerto = {
    nome: nome,
    acertos: numeroDeAcertos,
  };
  candidatos.push(alunoEAcerto);

  form.reset();
  console.log(candidatos);
});

btnAprovados.addEventListener("click", () => {
  campo2.innerHTML = "<h2>Aprovados</h2>";

  const acertos = +prompt("Número de acertos para a aprovação?");

  if (isNaN(acertos) || acertos < 0) {
    alert("Por favor, insira um número válido de acertos.");
    return;
  }

  const aprovados = candidatos
    .filter((candidato) => candidato.acertos >= acertos)
    .sort((a, b) => b.acertos - a.acertos);

  if (aprovados.length === 0) {
    campo2.innerHTML += "<p>Nenhum candidato foi aprovado.</p>";
  } else {
    aprovados.forEach((candidato) => {
      const p = document.createElement("p");
      const span = document.createElement("span");
      p.innerText = candidato.nome;
      span.innerText = ` - ${candidato.acertos} acertos`;
      p.appendChild(span);
      campo2.appendChild(p);
    });
  }
});