// Elaborar um programa que leia três lados e verifique se eles podem ou
// não formar um triângulo. Para formar um triângulo, um dos lados não
// pode ser maior que a soma dos outros dois. Caso possam formar um
// triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados
// iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes). A Figura
// 4.10 exibe um exemplo de execução do exercício.

const form = document.querySelector("form");
const campo = document.getElementById("campo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(form.ladoA.value);
  const ladoB = Number(form.ladoB.value);
  const ladoC = Number(form.ladoC.value);

  // Validação para verificar se é possível formar um triângulo
  if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    alert("Não pode formar um triângulo");
    form.reset();
    return;
  }

  // Verificar o tipo do triângulo
  if (ladoA === ladoB && ladoA === ladoC) {
    campo.innerText = "Pode formar um triângulo\nTipo: Equilátero";
  } else if (
    (ladoA === ladoB && ladoA !== ladoC) ||
    (ladoA === ladoC && ladoA !== ladoB) ||
    (ladoB === ladoC && ladoB !== ladoA)
  ) {
    campo.innerText = "Pode formar um triângulo\nTipo: Isósceles";
  } else {
    campo.innerText = "Pode formar um triângulo\nTipo: Escaleno";
  }
});
