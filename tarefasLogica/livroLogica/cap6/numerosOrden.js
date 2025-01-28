// Elaborar um programa que adicione números a um vetor. O programa
//  deve impedir a inclusão de números repetidos. Exibir a lista de números a
//  cada inclusão. Ao clicar no botão Verificar Ordem, o programa deve
//  analisar o conteúdo do vetor e informar se os números estão ou não em
//  ordem crescente. A Figura 6.15 demonstra um exemplo de execução do
//  programa.

const numeros = [];

const form = document.querySelector("form");
const campo = document.getElementById("campo");
const campo2 = document.getElementById("campo2");
const btnOrdem = document.getElementById("verificarOrdem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = +form.Numero.value;

  campo.innerHTML = "<p>Numero: </p>";

  if (numeros.includes(numero)) {
    campo.innerHTML = "<p> Esse numero ja esta inserido </p>";
    return;
  } else {
    numeros.push(numero);
  }

  numeros.forEach((numero) => {
    const span = document.createElement("span");
    span.textContent = `${numero}, `;
    campo.appendChild(span);
  });
});

btnOrdem.addEventListener("click", () => {
    let estaOrdenado = true;
  
    // Percorre o array e verifica se todos os pares consecutivos estão ordenados
    for (let i = 0; i < numeros.length - 1; i++) {
      if (numeros[i] > numeros[i + 1]) {
        estaOrdenado = false;
        break; // Se encontrar um fora de ordem, para a verificação
      }
    }
  
    // Atualiza o campo2 com o resultado
    if (estaOrdenado) {
      campo2.innerHTML = `<p>Os números estão em ordem crescente</p>`;
    } else {
      campo2.innerHTML = `<p>Os números não estão em ordem crescente</p>`;
    }
  });
  