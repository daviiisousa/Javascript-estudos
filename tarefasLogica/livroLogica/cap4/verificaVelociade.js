// Elaborar um programa que leia a velocidade permitida em uma estrada
// e a velocidade de um condutor. Se a velocidade for inferior ou igual à
// permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a
// permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da
// velocidade permitida, exiba “Multa Grave” – conforme ilustra a Figura

const form = document.querySelector("form");
const campo = document.getElementById("campo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const velocidadePermitida = Number(form.permitida.value);
  const velocidadeCondutor = Number(form.condutor.value);

  if (velocidadeCondutor <= velocidadePermitida) {
    campo.innerText = "Sem multa";
  } else if (velocidadeCondutor <= velocidadePermitida * 1.2) {
    campo.innerText = "Multa leve";
  } else {
    campo.innerText = "Multa grave";
  }
});

