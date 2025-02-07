// Suponha que o prazo para o pagamento de uma infração de trânsito com
// desconto seja de 90 dias. Elaborar um programa que leia a data de uma
// infração e o valor da multa. Informe qual a data limite do pagamento com
// desconto (até 90 dias) e o valor a ser pago até essa data (com 20% de
// desconto). A Figura 7.11 ilustra o funcionamento do programa.

const form = document.querySelector("form");
const campo = document.getElementById("campo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const multa = +form.Multa.value;
  const desconto = multa * 0.2;
  const multaComDesconto = multa - desconto;

  //------------DATA-------------//
  //pega a data do usuario
  const data = form.data.value;
  //tranforma em obj date
  const dataObj = new Date(data + "T00:00");
  //utiliza o setdate para manipular o dia com getdate
  dataObj.setDate(dataObj.getDate() + 90);
  //organiza para data no brasil
  const dataFormatada = dataObj.toLocaleDateString("pt-BR");

  if (!data || !multa) {
    alert("preencha os campos");
    return;
  }

  campo.innerHTML = `
    <h3>Data limite para pagamento com desconto: ${dataFormatada}</h3>
    <h3>Valor com desconto: ${multaComDesconto.toFixed(2)}</h3>
    `;

  form.reset();
});
