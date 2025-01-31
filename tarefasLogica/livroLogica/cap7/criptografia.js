// Você deve desenvolver um programa de criptografia para transmitir
// mensagens entre amigos. O programa deve ler uma mensagem e, em
// seguida, exibi-la criptografada. A criptografia consiste em: a) exibir todas
// as letras das posições pares da mensagem; b) exibir todas as letras das
// posições ímpares da mensagem. A Figura 7.9 exibe a mensagem
// criptografada. O programa deve conter ainda um botão para
// decriptografar a mensagem, ou seja, retornar a mensagem original a partir
// do texto cifrado.

const form = document.querySelector("form");
const campo = document.getElementById("campo");
const btnDescriptografar = document.getElementById("btnDescriptografar");
let mensagemCriptografada = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let mensagemCriptografadaPares = "";
  let mensagemCriptografadaImpar = "";

  campo.innerHTML = "";

  const mensagem = form.mensagem.value;
  const tamanho = mensagem.length;

  for (let i = 0; i < tamanho; i++) {
    if (i % 2 !== 0) {
      mensagemCriptografadaPares += mensagem[i];
    } else {
      mensagemCriptografadaImpar += mensagem[i];
    }
  }

  mensagemCriptografada = mensagemCriptografadaPares + mensagemCriptografadaImpar;
  campo.innerHTML = `<h4>${mensagemCriptografada}</h4>`;

  form.reset();
});

btnDescriptografar.addEventListener("click", () => {
  let mensagemOriginal = "";
  const meio = Math.ceil(mensagemCriptografada.length / 2);
  let pares = mensagemCriptografada.slice(0, meio);
  let impares = mensagemCriptografada.slice(meio);

  for (let i = 0; i < meio; i++) {
    if (impares[i]) mensagemOriginal += impares[i]; // Primeiro grupo (posições pares)
    if (pares[i]) mensagemOriginal += pares[i]; // Segundo grupo (posições ímpares)
  }

  campo.innerHTML = `<h4>${mensagemOriginal}</h4>`;
});
