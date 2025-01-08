// Elaborar um programa para simular um parquímetro, o qual leia o valor
// de moedas depositado em um terminal de estacionamento rotativo. O
// programa deve informar o tempo de permanência do veículo no local e o
// troco (se existir), como no exemplo da Figura 4.9. Se o valor for inferior ao
// tempo mínimo, exiba a mensagem: “Valor Insuficiente”. Considerar os
// valores/tempos da Tabela 4.6 (o máximo é 120 min).

const form = document.querySelector("form");
const campo = document.getElementById("campo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(form.valor.value);

  if (valor < 1) {
    alert("valor insuficiente");
    campo.innerText = "";
    return;
  }

  if (valor >= 1 && valor < 1.75) {
    campo.innerText = `
            Tempo: 30min
            troco: ${valor - 1}
        `;
  } else if (valor >= 1.75 && valor < 3) {
    campo.innerText = `
        Tempo: 60min
        troco: ${valor - 1.75}
    `;
  } else if (valor >= 3) {
    campo.innerText = `
        Tempo: 120min
        troco: ${valor - 3}
    `;
  }
});
