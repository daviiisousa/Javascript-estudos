// Elaborar um programa que leia o nome completo de um aluno. O
// programa deve validar o preenchimento de um nome completo e exibir a
// senha inicial do aluno, a qual será o sobrenome seguido pelo número de
// vogais do nome completo dele. O programa deve conter as funções:
// • validarNome() – que receba um nome como parâmetro e retorne true (nome
// completo) ou false (nome incompleto).
// • obterSobrenome() – que receba um nome como parâmetro e retorne o último
// nome do aluno em letras minúsculas.
// • contarVogais() – que receba um nome e retorne o número de vogais deste,
// com dois dígito

const form = document.querySelector("form");
const campo = document.getElementById("campo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = form.nome.value;

  validarNome(nome)
  const ultimoNome = obterSobrenome(nome)
  const vogaisQuatidade = contarVogais(nome)

  campo.innerHTML = `
  <h3>${ultimoNome}${vogaisQuatidade}</h3>
  `

});

function validarNome(nome) {
    const nommDividido = nome.split(" ")
    if(nommDividido.length >= 2){
        return true
    }else{
        return false
    }
}

function obterSobrenome(nome) {
  const arrayDeNome = nome.split(" ").at(-1).toUpperCase();
  return arrayDeNome;
}

function contarVogais(nome) {
  let vogais = ["A", "E", "I", "O", "U"];
  let contador = 0

  const nomeMaisculo = nome.toUpperCase()

  for (let i = 0; i < nomeMaisculo.length; i++) {
      if(vogais.includes(nomeMaisculo[i])) {
        contador++
    }
  }

  if(contador < 10){
    contador = `0${contador}`
  }else{
    contador
  }

  return contador
}
