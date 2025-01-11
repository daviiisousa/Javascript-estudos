// Elaborar um programa que leia um número e verifique se ele é ou não
// perfeito. Um número dito perfeito é aquele que é igual à soma dos seus
// divisores inteiros (exceto o próprio número). O programa deve exibir os
// divisores do número e a soma deles. A Figura 5.17 exibe a página do
// programa com um exemplo de número perfeito.

const form = document.querySelector("form");
const campo = document.getElementById("campo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.numero.value);
  let divisores = [];
  let somaDosDivisores = 0;

  campo.innerText = "";

  // Encontrar divisores do número
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      divisores.push(i); // Adiciona o divisor à lista
      somaDosDivisores += i; // Soma o divisor
    }
  }

  // Exibir os divisores e a soma
  campo.innerText = `Divisores do número ${numero}: ${divisores.join(", ")}\nSoma: ${somaDosDivisores}`;

  // Verificar se o número é perfeito
  if (somaDosDivisores === numero) {
    campo.innerText += `\nO número ${numero} é perfeito!`;
  } else {
    campo.innerText += `\nO número ${numero} não é perfeito.`;
  }
});

