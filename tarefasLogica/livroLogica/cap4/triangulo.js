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

  
});
