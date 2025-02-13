// a) Elaborar um programa que leia o nome e a idade de um atleta de um
// clube de natação. O programa deve exibir o nome com “-” abaixo das
// letras do nome e a categoria do atleta, que pode ser “Infantil” (até 12
// anos), “Juvenil” (entre 13 e 18 anos) ou “Adulto” (acima de 18 anos). O
// programa deve conter as funções:
// • retornarTracos() – que receba um nome como parâmetro e retorne uma linha
// com “-” para as letras do nome (nos espaços, manter os espaços).
// • categorizarAluno() – que receba um número como parâmetro e retorne a
// categoria do aluno, conforme indicação no enunciado do exercício.

const form = document.querySelector("form");
const campo = document.getElementById("campo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.nome.value;
  const idade = +form.idade.value;

  const categorizacaoAluno = categorizarAluno(idade);
  console.log(categorizacaoAluno);

  const tracos = retornarTracos(nome);
  console.log(tracos);

  campo.innerHTML = `
    <p>${nome}</p>
    <p>${tracos}</p>
    <p>Categoria: ${categorizacaoAluno}</p>
  `;
});

function retornarTracos(nome) {
  let tracos = "";
  for (let i = 0; i < nome.length; i++) {
    if (nome[i] === " ") {
      tracos += " ";
    } else {
      tracos += "-";
    }
  }
  return tracos;
}

function categorizarAluno(idade) {
  let categoriaAtleta = "";
  if (idade <= 12) {
    categoriaAtleta = "infatil";
  } else if (idade >= 13 && idade <= 18) {
    categoriaAtleta = "juvenil";
  } else {
    categoriaAtleta = "Adulto";
  }
  return categoriaAtleta;
}
